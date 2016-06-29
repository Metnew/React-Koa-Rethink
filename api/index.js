import Router from 'koa-router';
import convert from 'koa-convert';
import Users from './Users';


export default function(config) {
    const Routing = new Router();
    const API = [Users];

    for (let part of API) {
        for (let method in part) {
            for (let path in part[method]) {
                let cb = part[method][path];
                Routing[method](path, cb);
            }
        }
    }

    return convert(Routing.routes());
}
