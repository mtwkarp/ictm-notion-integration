const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const HtmlInlineCssWebpackPlugin = require('html-inline-css-webpack-plugin').default;

const folderName = 'instructorsSchedulePublishButtonPage'

module.exports = {
  entry: `./${folderName}/index.js`,
  output: {
    path: path.resolve(__dirname, `dist/${folderName}`),
    filename: 'bundle.js',
    clean: true,
  },
  module: {
    rules: [
      {
        test: /\.css$/,
        use: [
          "css-loader", // Translates CSS into CommonJS modules
        ],
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: `./${folderName}/index.html`,
    }),
    new HtmlInlineCssWebpackPlugin(),
  ],
};