const merge = require('webpack-merge');
const baseConfig = require('config/webpack');
const {resolve, join} = require('path');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');

const appDirectory = resolve(__dirname, '../');

module.exports = (env, argv) => {
  const isProduction =
    argv.mode === 'production' || process.env.NODE_ENV === 'production';

  let minify = false;
  if (isProduction) {
    minify = {
      collapseWhitespace: true,
      removeComments: true,
      removeRedundantAttributes: true,
      removeScriptTypeAttributes: true,
      removeStyleLinkTypeAttributes: true,
      useShortDoctype: true,
    };
  }

  const webpackConfig = baseConfig(env, argv);

  return merge.smart(webpackConfig, {
    entry: resolve(__dirname, 'index.js'),
    output: {
      publicPath: '.',
      path: resolve(__dirname, 'dist/'),
      filename: 'app.js',
    },
    plugins: [
      new CopyWebpackPlugin([
        {from: resolve(appDirectory, 'assets/favicons'), to: 'favicons'},
      ]),
      new HtmlWebpackPlugin({
        template: resolve(__dirname, 'index.html'),
        minify,
      }),
    ],
    resolve: {
      extensions: ['.web.js', '.js'],
    },
    devServer: {
      contentBase: join(__dirname, 'dist'),
      publicPath: 'http://localhost:8081/',
      inline: true,
    },
  });
};
