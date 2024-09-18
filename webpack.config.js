const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const HtmlInlineCssWebpackPlugin = require('html-inline-css-webpack-plugin').default;

module.exports = {
    entry: './instructorScheduleButtonPage/index.js',
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'bundle.js',
        clean: true
    },
    module: {
        rules: [
            {
                test: /\.css$/,
                use: [
                    'css-loader', // Translates CSS into CommonJS modules
                ],
            },
        ],
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: './instructorScheduleButtonPage/index.html',
        }),
        new HtmlInlineCssWebpackPlugin(),
    ],
};