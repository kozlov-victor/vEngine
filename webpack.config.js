
const path = require('path');

const UglifyJSPlugin = require('uglifyjs-webpack-plugin');

const debug = true;

let config = {
    entry: ['regenerator-runtime/runtime','./client-app/app/index.js'],
    output: {
        path: './assets/js/build',
        filename:'app.bundle.js'
    },
    module: {
        loaders: [
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
            }
        ]
    },
    resolve: {
        extensions: ["",".js",".ts"],
        root: [
            path.resolve('./client-app')
        ]
    },
};

if (!debug) {
    config.plugins = [
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
    ]
}

module.exports = config;