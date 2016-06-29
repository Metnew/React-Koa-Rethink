import compose from 'koa-compose';
import _ from 'lodash';


export default function Middelware (config) {
    
    function UrlMustMatchApiPrefix(ctx, next) {
        if(_.startsWith(ctx.request.url, config.API.prefix)){
            next()
        } else {
            ctx.throw('Invalid request', 400)
        }
    }

    return compose([UrlMustMatchApiPrefix])
}
