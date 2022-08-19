const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
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
  }),

  new webpack.ProvidePlugin({
    process: 'process/browser',
  }),
  new CleanWebpackPlugin({
    cleanAfterEveryBuildPatterns: ['dist'],
  }),
];
if (!isDevelopment) {
  mode = 'production';
  target = 'browserslist';
  plugins.push(
    // new Dotenv({
    //   systemvars: true,
    //   path: `./.env.${isDevelopment ? 'development' : 'production'}`,
    // }),
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
    // devServer: {
    //   static: {
    //     directory: path.join(__dirname, 'src'),
    //   },
    //   // historyApiFallback: true,
    //   hot: true,
    //   // compress: true,
    //   allowedHosts: 'all',
    //   host: 'localhost',
    //   port: 8800,
    // },
    resolve: {
      extensions: ['.js'],
      // fallback: {
      //   buffer: require.resolve('buffer'),
      //   process: require.resolve('process'),
      // },
      // alias: {
      //   process: 'process',
      // },
    },
  };
};
