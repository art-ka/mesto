const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin'); 
const { DefinePlugin } = require('webpack');

module.exports = {
    entry: { main: './src/pages/index.js' },
    output: {
        publicPath: '/mesto/',
        path: path.resolve(__dirname, ''),
        filename: 'main.js'
    },
    devtool: 'inline-source-map',

    module: {
        rules: [ // rules — это массив правил
            // добавим в него объект правил для бабеля
            {
                // регулярное выражение, которое ищет все js файлы
                test: /\.js$/,
                // при обработке этих файлов нужно использовать babel-loader
                loader: 'babel-loader',
                // исключает папку node_modules, файлы в ней обрабатывать не нужно
                exclude: '/node_modules/'
            },
            {
                // регулярное выражение, которое ищет все файлы с такими расширениями
                test: /\.(png|svg|jpg|gif|woff2|woff)$/,
                // при обработке этих файлов нужно использовать file-loader
                loader: 'file-loader'
            },
            {
                test: /\.html$/,
                loader: 'html-loader'
            },
            {
                test: /\.css$/,
                use: [
                    {
                        loader: MiniCssExtractPlugin.loader,
                    },
                    {
                        loader: 'css-loader',
                        options: { importLoaders: 1 }
                    },
                    {
                        loader: 'postcss-loader'
                    }
                ]
            }
        ]
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: './src/index.html' // путь к файлу index.html
        }),
        new MiniCssExtractPlugin(),
    ]
}