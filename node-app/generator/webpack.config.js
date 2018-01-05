
const path = require('path');
const webpack = require('webpack');
const ExtractTextPlugin = require('extract-text-webpack-plugin');

const UglifyJSPlugin = require('uglifyjs-webpack-plugin');

module.exports =  (params)=>{

    let config = {
        entry: {
            bundle:`./workspace/${params.projectName}/generated/src/index.js`,
            debug: ['./client-app/debug/debug.js','./client-app/debug/devConsole.js']
        },
        output: {
            path: path.resolve(`./workspace/${params.projectName}/generated/tmp`),
            filename:'[name].js'
        },
        resolveLoader: {
            modules: ['node_modules', 'node_tools/loaders']
        },
        //devtool: 'inline-source-map', // false // see https://www.thecssninja.com/demo/source_mapping/
        module: {
            rules: [
                {
                    test: /\.ts$/,
                    loader: "ts-loader",
                    options: {}
                },
                {
                    test: /\.js$/,
                    //exclude: /node_modules/,
                    loader: "babel-loader",
                    query: {
                        presets: ['es2015-loose'],
                        plugins: [
                            "transform-async-to-generator",
                            "transform-decorators-legacy",
                            "transform-class-properties"
                        ]
                    }
                },
                {
                    test: /\.js$/,
                    exclude: /node_modules/,
                    loader: "eslint-loader",
                    options: {
                        failOnWarning: true,
                        failOnError: true
                    }
                },
                {
                    test: /\.(html|css|frag|vert)$/,
                    loader: 'text-loader',
                    options: {
                        minimize: true
                    }
                },
                {
                    test: /\.(json)$/,
                    loader: 'json-to-object-loader'
                },
                { test: /\.scss$/, use: ExtractTextPlugin.extract(['css-loader', 'sass-loader']) },
                {
                    test: /\.less$/,
                    loader: ExtractTextPlugin.extract(['css-loader?url=false', 'less-loader?url=false']),
                },
            ]
        },
        resolve: {
            extensions: ['.js','.ts','.json'],
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
            IN_EDITOR: false,
            DEBUG: params.debug || false,
            PROJECT_NAME: params.projectName
        })
    ];

    if (!params.debug) {
        config.plugins.push(
            new UglifyJSPlugin({
                output: { // http://lisperator.net/uglifyjs/codegen
                    beautify: false,
                    comments: false
                },
                mangle: true,
                compress: { // http://lisperator.net/uglifyjs/compress, http://davidwalsh.name/compress-uglify
                    sequences: true,
                    booleans: true,
                    conditionals: true,
                    hoist_funs: true,
                    hoist_vars: true,
                    warnings: false
                },
            })
        );
    }
    else {
        // config.plugins.push(
        //     new webpack.SourceMapDevToolPlugin({
        //         filename: '[name].js.map'
        //     })
        // );
    }

    return config;
};
