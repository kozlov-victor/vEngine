import {nodeRequire} from "../base/fns";
const path = nodeRequire('path');
const webpack = nodeRequire('webpack');
// const UglifyJsPlugin = nodeRequire('uglifyjs-webpack-plugin');


interface GeneratorParams {
    projectName : string,
    minify: boolean,
    debug: boolean,
    embedResources: boolean
}

const getBool = (val:any):boolean=> {
   return !!val;
};

const dirname = path.dirname(nodeRequire.main.filename);

export const configFn = (params:GeneratorParams)=>{


    let config:any = {
        entry: {
            bundle:`./workspace/${params.projectName}/virtual/index.ts`,
            debug: ['./client-app/debug/debug.ts','./client-app/debug/devConsole.ts']
        },
        output: {
            path: path.resolve(`./workspace/${params.projectName}/virtual`),
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
                    loader: "awesome-typescript-loader", // ts-loader awesome-typescript-loader
                    options: {
                        useWebpackText: true,
                        // getCustomTransformers: program => ({
                        //     before: [
                        //         function(){
                        //             console.log(arguments);
                        //         }
                        //     ]
                        // }),
                        //configFile:  path.resolve(__dirname, "./node-app/generator", "tsconfig.json")
                        configFileName: "./node-app/generator/tsconfig.json"
                    }
                }
            ]
        },
        resolve: {
            extensions: ['.ts'],
            modules: [
                path.resolve(dirname, 'node_modules'),
                path.resolve(dirname, 'client-app')
            ],
            alias: {
                '@engine': path.resolve(dirname, 'client-app/engine/')
            },
        },
        optimization: {
            minimize: getBool(params.minify)
        },
        plugins: [
            new webpack.DefinePlugin({
                BUILD_AT: new Date().getTime(),
                IN_EDITOR: false,
                DEBUG: getBool(params.debug),
                PROJECT_NAME: JSON.stringify(params.projectName),
                EMBED_RESOURCES: getBool(params.embedResources),
            })
            //new HardSourceWebpackPlugin()
        ],
    };

    return config;
};
