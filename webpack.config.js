const path = require('path');
const webpack = require('webpack');

module.exports = {
    entry: './app/index.js',
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'main.js'
    },
    resolve: {
        extensions: ['*', '.js', '.jsx'],
        alias: {
            Components: path.resolve(__dirname, 'app/components'),
            Pages: path.resolve(__dirname, 'app/pages'),
            History: path.resolve(__dirname, 'app/history.js')
        }
    },
    module: {
        rules: [
            {
                test: /\.(js|jsx)$/,
                exclude: /node_modules/,
                use: ['babel-loader']
            },
            {
                test: /\.((s[ac]ss)|css)$/,
                use: [
                    'style-loader',
                    'css-loader',
                    'sass-loader'
                ]
            }
        ]
    },
    devServer: {
        contentBase: path.resolve(__dirname, ''),
        port: 8080
    }
};