import {nodeRequire} from "../base/fns";
const path = nodeRequire('path');
const webpack = nodeRequire('webpack');
// const UglifyJsPlugin = nodeRequire('uglifyjs-webpack-plugin');

export const configFn = (params)=>{

    let config:any = {
        entry: {
            bundle:`./workspace/${params.projectName}/generated/src/index.ts`,
            debug: ['./client-app/debug/debug.ts','./client-app/debug/devConsole.ts']
        },
        output: {
            path: path.resolve(`./workspace/${params.projectName}/generated/tmp`),
            filename:'[name].js'
        },
        mode: 'production',
        resolveLoader: {
            modules: ['node_modules', 'node_tools/loaders']
        },
        module: {
            rules: [
                {
                    test: /\.ts$/,
                    loader: "awesome-typescript-loader", // ts-loader
                    options: {
                        // getCustomTransformers: program => ({
                        //     before: [
                        //         transformer(program)
                        //     ]
                        // }),
                        configFileName: "./node-app/generator/tsconfig.json"
                    }
                },
                {
                    test: /\.js$/,
                    exclude: /node_modules/,
                    loader: "babel-loader",
                    query: {
                        presets: ['es2015'],
                        plugins: []
                    }
                },
                {
                    test: /\.(frag|vert)$/,
                    loader: 'text-loader',
                    options: {
                        minimize: true
                    }
                },
            ]
        },
        resolve: {
            extensions: ['.js','.ts'],
            modules: [
                path.resolve('node_modules')
            ]
        },
        optimization: {
            minimize: !!params.minify
        },
        plugins: [
            new webpack.DefinePlugin({
                BUILD_AT: new Date().getTime(),
                IN_EDITOR: false,
                DEBUG: !!params.debug,
                PROJECT_NAME: JSON.stringify(params.projectName),
                EMBED_RESOURCES: !!params.embedResources
            }),
            //new HardSourceWebpackPlugin()
        ],
    };

    return config;
};
