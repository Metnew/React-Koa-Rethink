import Koa from 'koa';
import helmet from 'koa-helmet';
import morgan from 'koa-morgan';
import body from 'koa-body';
import serve from 'koa-static2';
import convert from 'koa-convert';
import compress from 'koa-compress';
import validate from 'koa-validate';
import path from 'path';

var App = new Koa();
validate(App);
App.use(convert(helmet()))
App.use(convert(body()))
App.use(convert(morgan('dev')))
// App.use((validate(App)))
App.use(serve("static", path.resolve(__dirname , "../client/dist")))

let compressFunc = compress({
    filter: function(content_type) {
        return /text/i.test(content_type)
    },
    threshold: 2048,
    flush: require('zlib').Z_SYNC_FLUSH
})
App.use(convert(compressFunc))

export default App;
