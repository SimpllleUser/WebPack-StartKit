const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ImageminPlugin = require('imagemin-webpack-plugin').default;
const CopyPlugin = require('copy-webpack-plugin');

module.exports = {
    entry: './src/index.js',
    output: {
        filename: './js/main.js',
        path: path.resolve(__dirname, './dist')
    },
    devServer: {
        contentBase: './dist'
    },
    module: {
        rules: [{
                test: /\.(png|svg|jpg|gif)$/,
                use: [
                    'file-loader'
                ]
            },
            {
                test: /\.scss$/,
                use: [
                    'style-loader',
                    'css-loader',
                    'sass-loader'
                ]
            },
            {
                test: /\.css$/,
                use: [
                    'style-loader',
                    'css-loader'
                ]
            }
        ]
    },
    plugins: [
        // Copy the images folder and optimize all the images
        new CopyPlugin([{ from: './src/img', to: '../dist/img' }]),
        new ImageminPlugin({ test: /\.(jpe?g|png|gif|svg)$/i })
    ]
};