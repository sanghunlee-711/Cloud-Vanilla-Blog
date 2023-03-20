const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const path = require('path');
const webpack = require('webpack');
const CopyPlugin = require('copy-webpack-plugin');
const Dotenv = require('dotenv-webpack');

const mode = process.env.NODE_ENV;
const isDevelopment = mode === 'development';
const target = isDevelopment ? 'web' : 'browserslist';

const plugins = [
  new webpack.EnvironmentPlugin({
    NODE_ENV: 'development',
  }),
  new Dotenv({
    path: `./.env.${process.env.NODE_ENV}`,
    safe: true,
  }),
  new HtmlWebpackPlugin({
    inject: false, //기본으로 두면 JS가 html에 인젝트 되어서 js가 두번불리게 됨..
    hash: true,
    template: './src/index.html', //적용될 html 경로
  }),
  new webpack.ProvidePlugin({
    process: 'process/browser',
  }),
  new CleanWebpackPlugin({
    cleanOnceBeforeBuildPatterns: ['dist'],
    // cleanAfterEveryBuildPatterns: ['dist'],
  }),
  new CopyPlugin({
    patterns: [
      {
        from: path.resolve(__dirname, 'static/images'),
        to: path.resolve(__dirname, 'dist/static/images'),
      },
      {
        from: path.resolve(__dirname, 'src/styles'),
        to: path.resolve(__dirname, 'dist/styles'),
      },
    ],
  }),
];

module.exports = (env, options) => {
  return {
    mode,
    entry: './src/index.js',
    target,
    performance: {
      hints: false,
      maxEntrypointSize: 512000,
      maxAssetSize: 512000,
    },
    output: {
      path: path.resolve(__dirname, 'dist'),
      filename: 'index.js',
      publicPath: '',
    },
    module: {
      rules: [
        {
          test: /\.js$/,
          include: path.resolve(__dirname, 'src'),
          exclude: /node_modules/,
          loader: 'babel-loader', // 바벨 로더를 추가한다
        },
        {
          test: /\.(s[ac]|c)ss$/i,
          use: ['style-loader', 'css-loader', 'sass-loader'],
        },
      ],
    },
    plugins,
    devServer: {
      static: {
        directory: path.join(__dirname, 'src'),
      },
      open: true,
      hot: true,
      host: 'localhost',
      port: 8800,
      historyApiFallback: isDevelopment,
    },
    resolve: {
      extensions: ['.js'],
    },
  };
};
