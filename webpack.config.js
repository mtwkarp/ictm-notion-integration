const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const HtmlInlineCssWebpackPlugin = require('html-inline-css-webpack-plugin').default;
const ScriptExtHtmlWebpackPlugin = require('script-ext-html-webpack-plugin');

module.exports = {
    entry: './instructorScheduleButtonPage/index.js',
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'bundle.js',
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
            inject: 'body', // Inject all assets into the body
        }),
        new HtmlInlineCssWebpackPlugin(),
        new ScriptExtHtmlWebpackPlugin({
            inline: 'bundle.js', // Inline the JavaScript bundle
        }),
    ],
};