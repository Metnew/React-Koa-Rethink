const webpack = require('webpack');
const WebpackDevServer = require('webpack-dev-server');
const WebpackConfig = require('./webpack.config');
const open = require('open');
new WebpackDevServer(webpack(WebpackConfig), WebpackConfig.devServer)
    .listen(WebpackConfig.port, 'localhost', (err) => {
        if (err) {
            console.log(err);
        }
        console.log('WebpackDevServer listening at localhost:' + WebpackConfig.port);
        console.log('Opening your system browser...');
        open('http://localhost:' + WebpackConfig.port + '/webpack-dev-server/');
    });
