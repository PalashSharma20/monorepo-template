const {resolve} = require('path');

const appDirectory = resolve(__dirname, '../');

module.exports = (env, argv) => {
  const isProduction =
    argv.mode === 'production' || process.env.NODE_ENV === 'production';

  return {
    devtool: !isProduction ? 'inline-source-map' : false,
    module: {
      rules: [
        {
          test: /\.js$/,
          exclude: /node_modules/,
          use: [
            {
              loader: 'babel-loader',
              options: {
                babelrc: false,
                presets: ['@babel/preset-env', '@babel/preset-react'],
                plugins: [
                  '@babel/plugin-proposal-class-properties',
                  '@babel/plugin-proposal-optional-chaining',
                  [
                    '@babel/plugin-transform-runtime',
                    {
                      regenerator: true,
                    },
                  ],
                ],
              },
            },
          ],
        },
        {
          test: /\.css$/i,
          use: ['style-loader', 'css-loader'],
        },
        {
          test: /\.svg$/,
          use: [
            {
              loader: 'babel-loader',
              options: {
                babelrc: false,
                presets: ['@babel/preset-env', '@babel/preset-react'],
              },
            },
            {
              loader: 'react-svg-loader',
              options: {
                jsx: true,
              },
            },
          ],
        },
      ],
    },
    resolve: {
      alias: {
        'react-native': 'react-native-web',
        assets: resolve(appDirectory, 'assets'),
        components: resolve(appDirectory, 'components'),
        contexts: resolve(appDirectory, 'contexts'),
        utils: resolve(appDirectory, 'utils'),
      },
    },
  };
};
