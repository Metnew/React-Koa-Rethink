'use strict';

let path = require('path');
let webpack = require('webpack');
let baseConfig = require('./base');
let defaultSettings = require('./defaults');

// Add needed plugins here
let BowerWebpackPlugin = require('bower-webpack-plugin');

let config = Object.assign({}, baseConfig, {
    entry: [
        'webpack-dev-server/client?http://127.0.0.1:' + defaultSettings.port,
        'webpack/hot/only-dev-server',
        path.resolve(__dirname, './../client/src/index')
    ],
    cache: true,
    devtool: 'eval-source-map',
    plugins: [
        new webpack.HotModuleReplacementPlugin(),
        new webpack.NoErrorsPlugin(),
        new BowerWebpackPlugin({searchResolveModulesDirectories: false})
    ],
    module: defaultSettings.getDefaultModules()
});

// Add needed loaders to the defaults here
config.module.loaders.push({
    test: /\.(js|jsx)$/,
    loaders: ['react-hot-loader/webpack', 'babel-loader'],
    include: [].concat(config.additionalPaths, path.resolve(__dirname, './../client/src'))
})

module.exports = config;
