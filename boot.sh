mkdir api
echo 'api/ dirs'
mkdir utils config common
echo 'config/ utils/ common/ dirs'
# touch index.js
# koa plugins
npm init -y
npm i --save koa@2 koa-router@next koa-static2 koa-compress koa-morgan koa-helmet koa-body koa-validate koa-convert
# other plugins
npm i --save bcrypt lodash jsonwebtoken moment rethinkdb
# devdepend
npm i --save-dev colors
