
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
    resolveLoader: {
        modules: ['node_modules', path.resolve(__dirname, 'node_tools/loaders')]
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                //exclude: /node_modules/,
                loader: "babel-loader",
                query: {
                    presets: ['es2015-loose'],
                    plugins: [
                        "transform-async-to-generator",
                        "transform-decorators-legacy"
                    ]
                }
            },
            {
                test: /\.js$/,
                exclude: /node_modules|vendor/,
                loader: "eslint-loader",
                options: {
                    failOnWarning: false,
                    failOnError: false
                }
            },
            {
                test: /\.(css)$/,
                loader: 'text-loader',
                options: {
                    minimize: true
                }
            },
            {
                test: /\.(html)$/,
                loader: 'html-normalize-loader'
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
        DEBUG: true,
        IN_EDITOR: true
    }),
    new ExtractTextPlugin('css/styles.css'),
    function() {
        this.plugin("done", function(stats)
        {
            console.log(`build at ${new Date()}`);
            // && process.argv.indexOf('--watch') == -1
            if (stats.compilation.errors && stats.compilation.errors.length ) {
                console.log(`errors: ${stats.compilation.errors.length}`);
            }
        });
    }
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