const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const path = require('path');
// const webpack = require('webpack');
const Dotenv = require('dotenv-webpack');

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
      // new webpack.EnvironmentPlugin({
      //   'process.env': JSON.stringify(
      //     dotenv.config({ path: `./.env.${mode}` }).parsed
      //   ),
      // }),
      // new webpack.DefinePlugin({
      //   'process.env': JSON.stringify(process.env),
      // }),
      // new webpack.ProvidePlugin({
      //   'process.env': JSON.stringify(
      //     dotenv.config({ path: `./.env.${mode}` }).parsed
      //   ),
      // }),
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
      // hot: true,
      host: 'localhost',
      port: 8800,
      // open: true,
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
};
