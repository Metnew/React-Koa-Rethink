'use strict';
let path = require('path');
let defaultSettings = require('./defaults');
let additionalPaths = [];
module.exports = {
    additionalPaths: additionalPaths,
    port: defaultSettings.port,
    debug: true,
    devtool: 'eval',
    output: {
        path: path.join(__dirname, './../client/dist/assets'),
        filename: 'app.js',
        publicPath: defaultSettings.publicPath
    },
    devServer: {
        contentBase: path.resolve(__dirname, '../client/src'),
        historyApiFallback: true,
        proxy: {
            "/api/v1": "localhost:8000"
        },
        compress: true,
        hot: true,
        port: defaultSettings.port,
        publicPath: defaultSettings.publicPath,
        noInfo: true
    },
    resolve: {
        extensions: [
            '',
            '.js',
            '.jsx'
        ],
        alias: {
            actions: `${ defaultSettings.srcPath }/actions/`,
            components: `${ defaultSettings.srcPath }/components/`,
            sources: `${ defaultSettings.srcPath }/sources/`,
            stores: `${ defaultSettings.srcPath }/stores/`,
            styles: `${ defaultSettings.srcPath }/styles/`,
            config: `${ defaultSettings.srcPath }/config/` + process.env.REACT_WEBPACK_ENV
        }
    },
    module: {},
    postcss: function() {
        return [];
    }
};
