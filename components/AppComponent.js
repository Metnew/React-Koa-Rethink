import Koa from 'koa';
import helmet from 'koa-helmet';
import morgan from 'koa-morgan';
import body from 'koa-body';
import serve from 'koa-static2';
import convert from 'koa-convert';
import compress from 'koa-compress';
import validate from 'koa-validate';

var AppComponent = new Koa();
AppComponent.use(convert(helmet()))
AppComponent.use(convert(body()))
AppComponent.use(convert(morgan('dev')))
AppComponent.use(convert(validate()))
AppComponent.use(serve("static", "../public"))

let compressFunc = compress({
    filter: function(content_type) {
        return /text/i.test(content_type)
    },
    threshold: 2048,
    flush: require('zlib').Z_SYNC_FLUSH
})
AppComponent.use(convert(compressFunc))

export default AppComponent;
