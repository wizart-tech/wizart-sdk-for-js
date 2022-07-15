var webpack = require('webpack')
    , path = require('path')
    , env = process.env.WEBPACK_ENV
;

var libraryName = 'wizart-vision'
    , outputFile = ''
    , plugins = []
;

// configure output for proper build type
if (env === 'build') {
    outputFile = libraryName + '.min.js';
} else {
    outputFile = libraryName + '.js';
}
const TerserPlugin = require("terser-webpack-plugin");

module.exports = {
    target: 'web',
    mode: 'development',
    entry: {
        main: path.resolve(__dirname, './src/index.js')
    },
    output: {
        path: path.resolve(__dirname, './dist'),
        filename: '[name].bundle.js',
        libraryTarget: 'umd',
        umdNamedDefine: true
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use: ['babel-loader'],
            }
        ]
    },
    optimization: {
        minimize: true,
        minimizer: [new TerserPlugin()],
    },
}