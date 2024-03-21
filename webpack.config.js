const path = require('path');
const TerserPlugin = require("terser-webpack-plugin");

module.exports = (env) => {
    return {
        target: env && env.target || 'web',
        mode: 'production',
        entry: {
            main: './src/index.js'
        },
        output: {
            path: path.resolve(__dirname, 'dist'),
            filename: '[name].min.js',
            library: 'WizartVision',
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
    };
};