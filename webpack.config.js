const path = require('path');
const webpack = require('webpack');

module.exports = {
    entry: './index.js',
    // output: {
    //     path: path.join(__dirname + './dist'),
    //     filename: 'main.js'
    // },
    resolve: {
        extensions: ['*', '.js', '.jsx']
    },
    module: {
        rules: [
            {
                test: /\.(js|jsx)$/,
                exclude: /node_modules/,
                use: ['babel-loader']
            }
        ]
    },
    plugins: [
        new webpack.HotModuleReplacementPlugin()
    ],
    devServer: {
        contentBase: __dirname + 'dist/main.js',
        hot: true
    }
};