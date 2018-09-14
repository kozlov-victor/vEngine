
const fs = require('fs');
const path = require('path');
const webpack = require('webpack');
const ExtractTextPlugin = require('extract-text-webpack-plugin');

const debug = true;

class WebpackDonePlugin{
    apply(compiler){
        compiler.hooks.done.tap('compilation',  (stats)=> {
            let date = new Date();
            let hash = date.getTime();
            fs.writeFileSync('app-meta.json',JSON.stringify({hash}));
            if (stats.compilation.errors && stats.compilation.errors.length ) {
                console.error(`errors: ${stats.compilation.errors.length}`);
                let errorMessage = `window.showError("compiled with ${stats.compilation.errors.length} error(s)");`;
                fs.writeFileSync('assets/generated/js/compileMessageScript.js',errorMessage);
            } else {
                let successMessage = `build at ${date}`;
                console.log(successMessage);
                fs.writeFileSync('assets/generated/js/compileMessageScript.js',`console.log("${successMessage}")`);
            }
        });
    }
}

module.exports = (env={})=>{

    console.log('run builder with env:',env);

    const clientEntry = {
        'app.bundle':['./client-app/app/index.ts'],
        'debug':'./client-app/debug/debug.ts'
    };

    const serverEntry = {
        'server': ['./node-app/server.ts']
    };

    const clientOutput = {
        path: path.resolve('./assets/'),
        filename:'generated/js/[name].js'
    };

    const serverOutput = {
        path: path.resolve('./node-app'),
        filename:'../[name].js'
    };

    const entry = env.server!==undefined?serverEntry:clientEntry;
    const output = env.server!==undefined?serverOutput:clientOutput;

    console.log('webpack started at',new Date());

    let config = {
        entry,
        output,
        mode: 'production', //debug ? 'development' : 'production',
        resolveLoader: {
            modules: ['node_modules', path.resolve(__dirname, 'node_tools/loaders')]
        },
        watchOptions: {
            poll: true
        },
        performance: {
            maxEntrypointSize: 512000,
            maxAssetSize: 512000
        },
        module: {
            rules: [
                {
                    test: /\.ts$/,
                    loader: "awesome-typescript-loader",
                    options: {}
                },
                {
                    test: /\.(css|frag|vert)$/,
                    loader: 'text-loader'
                },
                {
                    test: /\.(html)$/,
                    loader: 'html-normalize-loader'
                },
                { test: /\.scss$/, use: ExtractTextPlugin.extract(['css-loader?url=false', 'sass-loader?url=false']) }
            ]
        },
        resolve: {
            extensions: ['.js','.ts'],
            modules: [
                path.resolve(__dirname, 'node_modules'),
                path.resolve(__dirname, 'client-app')
            ],
            alias: {
                '@engine': path.resolve(__dirname, 'client-app/engine/')
            },
        },
        optimization: {
            minimize: !debug,
            noEmitOnErrors: true
        },
    };

    config.plugins = [
        new webpack.DefinePlugin({
            BUILD_AT: new Date().getTime(),
            DEBUG: true,
            IN_EDITOR: true,
            EMBED_RESOURCES: false,
            PROJECT_NAME: ''
        }),
        new ExtractTextPlugin('generated/css/styles.css'),
        new WebpackDonePlugin()
    ];

    return config;
};


