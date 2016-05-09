import compose from 'koa-compose';
async function auth(res, ctx) {
    console.log(res, ctx)
}

export default {auth}
