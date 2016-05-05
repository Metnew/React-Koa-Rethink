import App from './components/AppComponent';
import DbBoot from './components/DbBoot';
import Models from './models';
import Routes from './api';
import colors from 'colors';
(async () => {
    let config;

    if (process.env.NODE_ENV === 'production') {
        console.log('START WORKING IN PROD ENV'.bgRed)
        config = require('./config/prod.json');
    } else {
        console.log('START WORKING IN DEV ENV'.bgGreen)
        config = require('./config/dev.json');
    }

    let connection = await DbBoot(config);
    App.use(async (ctx, next) => {
        ctx.db = connection;
        await next();
    })
    App.use(Routes);
    App.listen(config.server.port);
    console.log(`SERVER STARTED AT ${config.server.port}`.bgCyan)
})()
