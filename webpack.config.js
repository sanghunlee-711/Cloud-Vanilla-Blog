const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const path = require('path');

//ref: https://stackoverflow.com/questions/43209666/react-router-v4-cannot-get-url
module.exports = {
  mode: 'development',
  entry: './src/index.js',
  output: {
    filename: 'index.js',
    path: path.resolve(__dirname, 'dist'),
    publicPath: '/',
  },
  plugins: [
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
    allowedHosts: 'all',
    compress: true,
    hot: true,
    host: 'localhost',
    port: 8800,
    open: true,
  },
  resolve: {
    fallback: {
      // fs: false,
      // path: false,
      // process: false,
      buffer: require.resolve('buffer'),
    },
  },
};
