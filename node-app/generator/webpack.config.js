
const path = require('path');
const webpack = require('webpack');
const ExtractTextPlugin = require('extract-text-webpack-plugin');

const UglifyJSPlugin = require('uglifyjs-webpack-plugin');

module.exports =  (params)=>{
    let config = {
        entry: ['./node-app/generator/app.js'],
        output: {
            path: path.resolve('./node-app/generator/build'),
            filename:'bundle.js'
        },
        module: {
            rules: [
                {
                    test: /\.js$/,
                    //exclude: /node_modules/,
                    loader: "babel-loader",
                    query: {
                        presets: ['es2015-loose'],
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
                path.resolve('node_modules'),
                path.resolve('./client-app'),
                path.resolve('./node-app/generator')
            ]
        }
    };

    config.plugins = [
        new webpack.DefinePlugin({
            BUILD_AT: new Date().getTime(),
        }),
        new UglifyJSPlugin({
            output: { // http://lisperator.net/uglifyjs/codegen
                beautify: !params.minify,
                comments: false
            },
            mangle: true,
            compress: params.minify?{ // http://lisperator.net/uglifyjs/compress, http://davidwalsh.name/compress-uglify
                sequences: true,
                booleans: true,
                conditionals: true,
                hoist_funs: true,
                hoist_vars: true,
                warnings: false
            }:false,
        })
    ];

    return config;
};
