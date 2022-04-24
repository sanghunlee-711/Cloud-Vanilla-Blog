const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const path = require('path');
// const webpack = require('webpack');
const Dotenv = require('dotenv-webpack');
const CopyPlugin = require('copy-webpack-plugin');

//ref: https://stackoverflow.com/questions/43209666/react-router-v4-cannot-get-url
module.exports = (env) => {
  console.log('@@@@env', env);
  return {
    mode: env.development ? 'development' : 'production',
    entry: './src/index.js',
    output: {
      filename: 'index.js',
      path: path.resolve(__dirname, 'dist'),
      publicPath: '/',
    },
    plugins: [
      new Dotenv({
        systemvars: true,
        path: `./.env.${env.development ? 'development' : 'production'}`,
      }),
      new CopyPlugin({
        patterns: [
          {
            from: path.resolve(__dirname, 'src/static/images'),
            to: path.resolve(__dirname, 'dist/static/images'),
          },
        ],
      }),
      new HtmlWebpackPlugin({
        hash: true,
        template: './src/index.html', //적용될 html 경로
        // filename:
      }),
      new MiniCssExtractPlugin({ filename: 'app.css' }),
      new CleanWebpackPlugin({
        cleanAfterEveryBuildPatterns: ['dist'],
      }),
    ],
    module: {
      rules: [
        {
          test: /\.css$/,
          use: [MiniCssExtractPlugin.loader, 'css-loader'],
        },
        {
          test: /\.(eot|md|svg|ttf|woff|woff2)$/,
          use: {
            loader: 'file-loader',
            options: {
              name: '[name].[ext]',
            },
          },
        },
      ],
    },
    devServer: {
      static: {
        directory: path.join(__dirname, 'src'),
      },
      historyApiFallback: true,
      compress: true,
      allowedHosts: 'all',
      host: 'localhost',
      port: 8800,
    },
    resolve: {
      fallback: {
        buffer: require.resolve('buffer'),
      },
    },
  };
};
