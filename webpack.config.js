const path = require('path');
const webpack = require('webpack');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = {
    entry: [
        './app/index.js',
        './app/scss/app.scss'
    ],
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'main.js',
        publicPath: '/'
    },
    resolve: {
        extensions: ['*', '.js', '.jsx'],
        alias: {
            Components: path.resolve(__dirname, 'app/components'),
            Pages: path.resolve(__dirname, 'app/pages'),
            History: path.resolve(__dirname, 'app/history.js'),
            Config: path.resolve(__dirname, 'app/config')
        }
    },
    plugins: [
        new MiniCssExtractPlugin({
            filename: 'app.css'
        })
    ],
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
                    {
                        loader: MiniCssExtractPlugin.loader
                    },
                    'css-loader',
                    'sass-loader'
                ]
            }
        ]
    },
    devServer: {
        contentBase: path.resolve(__dirname, ''),
        historyApiFallback: {
            index: '/index.html'
        },
        port: 8080
    }
};