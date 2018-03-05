const path = require('path');
const webpack = require('webpack');
const buildDirectory = './build';

module.exports = {
    entry: [
        './src/index.js'
    ],
    devServer: {
        host: '127.0.0.1',
        port: '3000'
    },
    externals: {
        'react': 'React',
        'react-dom': 'ReactDOM'
    },
    output: {
        filename: 'bundle.js',
        path: path.resolve(buildDirectory),
        publicPath: '/build/'
    },
    module: {
        loaders: [
            {
                test: /\.jsx?$/,
                exclude: /node_modules/,
                loader: 'babel-loader',
            },
            {
                test: /\.css$/,
                loader:'style!css!'
            }
        ]
    },
    resolve: {
        extensions: ['', '.js', '.jsx', '.css']
    }
};