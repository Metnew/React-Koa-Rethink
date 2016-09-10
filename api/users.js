require('koa-router');

var router = new Router()({
    prefix: '/users'
})


router
    .get('/', function (ctx, next) {});
    .get('/:id', function (ctx, next) {});
    .post('/new', function (ctx, next) {});
    .put('/:id', function (ctx, next) {});
    .delete('/:id', function (ctx, next) {});


export default router;
