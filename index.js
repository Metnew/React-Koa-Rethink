import {App, Rethink_DB, SocketLogic, Middelware} from './components';
import {Schema} from './models';
import Routes from './api';

import Koa from 'koa';
import r from 'rethinkdbdash';
import io from 'socket.io';
import cluster from 'cluster'
import graphqlHTTP from 'koa-graphql';
import mount from 'koa-mount';
import colors from 'colors';
import jwt from 'koa-jwt';
import convert from 'koa-convert';

if (cluster.isMaster && process.env.NODE_ENV === 'production') {
    let numWorkers = require('os').cpus().length;

    console.log('Master cluster setting up ' + numWorkers + ' workers...');

    for (var i = 0; i < numWorkers; i++) {
        cluster.fork();
    }

    cluster.on('online', function(worker) {
        console.log('Worker ' + worker.process.pid + ' is online');
    });

    cluster.on('exit', function(worker, code, signal) {
        console.log('Worker ' + worker.process.pid + ' died with code: ' + code + ', and signal: ' + signal);
        console.log('Starting a new worker');
        cluster.fork();
    });
} else {
    // boot conf
    let config;

    if (process.env.NODE_ENV === 'production') {
        console.log('START WORKING IN PROD ENV'.bgRed)
        config = require('./config/prod.json');
    } else if (process.env.NODE_ENV === 'dev') {
        console.log('START WORKING IN DEV ENV'.bgGreen)
        config = require('./config/dev.json');
    }

    // Middelwares for App
    App.use(Middelware(config));

    // Add JWT
    App.use(convert(jwt(config.jwt).unless({
        path: [/^\/public/, '/']
    })));
    // Add GraphQL
    let graphqlServer = convert(graphqlHTTP((req, ctx) => ({
        schema: Schema,
        graphiql: true,
        pretty: true,
        context: ctx
    })));
    App.use(convert(mount('/graphql', graphqlServer)));
    console.log('GraphQL added.'.cyan)

    // Add DB&WS TO CTX
    App.use(async(ctx, next) => {
        // create conn to db
        console.log(config)
        let connection = await r.connect(config.rethinkdb.connnect);
        console.log('Connection to db created');
        ctx.db = connection;
        next();
    })

    // add WS
    let server = require('http').createServer(App.callback());
    let SocketConnection = io(server);
    SocketLogic.init(SocketConnection);
    console.log('SocketLogic inited.'.red)

    // Add API Routes
    App.use(Routes());

    // Boot server
    server.listen(config.server.port);
    console.log(`APP SERVER STARTED AT ${config.server.port}`.bgCyan)
}
