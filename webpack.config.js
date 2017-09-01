
const path = require('path');
const webpack = require('webpack');
const ExtractTextPlugin = require('extract-text-webpack-plugin');

const UglifyJSPlugin = require('uglifyjs-webpack-plugin');

const debug = true;

let config = {
    entry: ['regenerator-runtime/runtime','./client-app/app/index.js'],
    output: {
        path: path.resolve('./assets/'),
        filename:'js/build/app.bundle.js'
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                //exclude: /node_modules/,
                loader: "babel-loader",
                query: {
                    presets: ['es2015'],
                    plugins: ["transform-async-to-generator"]
                }
            },
            {
                test: /\.(html|css)$/,
                loader: 'text-loader',
                options: {
                    minimize: true
                }
            },
            { test: /\.scss$/, use: ExtractTextPlugin.extract(['css-loader', 'sass-loader']) },
            {
                test: /\.less$/,
                loader: ExtractTextPlugin.extract(['css-loader?url=false', 'less-loader?url=false']),
            },
        ]
    },
    resolve: {
        extensions: ['.js','.ts'],
        modules: [
            path.resolve(__dirname, 'node_modules'),
            path.resolve(__dirname, 'src'),
            path.resolve(__dirname, './client-app')
        ]
    }
};

config.plugins = [
    new webpack.DefinePlugin({
        BUILD_AT: new Date().getTime(),
        DEBUG: false
    }),
    new ExtractTextPlugin('css/styles.css'),
];

if (!debug) {
    config.plugins.push(
        new UglifyJSPlugin({
            output: { // http://lisperator.net/uglifyjs/codegen
                beautify: debug,
                comments: false
            },
            compress: { // http://lisperator.net/uglifyjs/compress, http://davidwalsh.name/compress-uglify
                sequences: !debug,
                booleans: !debug,
                conditionals: !debug,
                hoist_funs: false,
                hoist_vars: debug,
                warnings: debug
            },
        })
    )
}

module.exports = config;