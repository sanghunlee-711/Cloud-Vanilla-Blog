const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const path = require('path');
const webpack = require('webpack');

const Dotenv = require('dotenv-webpack');
const CopyPlugin = require('copy-webpack-plugin');
const isDevelopment = process.env.NODE_ENV === 'development';
//ref: https://stackoverflow.com/questions/43209666/react-router-v4-cannot-get-url

let mode = 'development';
let target = 'web';
let plugins = [
  new HtmlWebpackPlugin({
    hash: true,
    template: './src/index.html', //적용될 html 경로
    // filename:
  }),
  // new MiniCssExtractPlugin({ filename: 'app.css' }),
  new CleanWebpackPlugin({
    cleanAfterEveryBuildPatterns: ['dist'],
  }),
  new webpack.ProvidePlugin({
    process: 'process/browser',
  }),
];
if (!isDevelopment) {
  mode = 'production';
  target = 'browserslist';
  plugins.push(
    new Dotenv({
      systemvars: true,
      path: `./.env.${isDevelopment ? 'development' : 'production'}`,
    }),
    new CopyPlugin({
      patterns: [
        {
          from: path.resolve(__dirname, 'src/static/images'),
          to: path.resolve(__dirname, 'dist/static/images'),
        },
      ],
    })
  );
}

module.exports = (env) => {
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
      assetModuleFilename: 'images/[hash][ext][query]',
    },
    module: {
      rules: [
        {
          test: /\.(s[ac]|c)ss$/i,
          use: ['style-loader', 'css-loader', 'sass-loader'],
        },
        {
          test: /\.(png|jpe?g|gif|svg)$/i,
          type: 'asset',
        },
      ],
    },
    plugins,
    devServer: {
      static: {
        directory: path.join(__dirname, 'src'),
      },
      // historyApiFallback: true,
      hot: true,
      // compress: true,
      allowedHosts: 'all',
      host: 'localhost',
      port: 8800,
    },
    resolve: {
      fallback: {
        buffer: require.resolve('buffer'),
        process: require.resolve('process'),
      },
      alias: {
        process: 'process',
      },
    },
  };
};
