import Router from 'koa-router';
import convert from 'koa-convert';
import Users from './Users';
const Routing = new Router();
const API = [Users];

for (let part of API) {
    for(let method in part) {
        for(let path in part[method]) {
            let cb = part[method][path];
            Routing[method]('/api/v1' + path, cb);
        }
    }
}

export default convert(Routing.routes());
