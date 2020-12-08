var path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');


module.exports = {
  mode: 'development',
  entry: './src/index.tsx',
  devtool: 'inline-source-map',
  devServer: {
    contentBase: './dist',
    open: true
  },
  plugins: [
    new CleanWebpackPlugin(),
    new HtmlWebpackPlugin({
      template: 'src/index.html'
    })
  ],
  module: {
    rules: [
      {
        test: /\.tsx$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-react', '@babel/preset-typescript']
          }
        }
      }
    ]
  },
  resolve: {
    modules: [path.resolve(__dirname, 'src'), 'node_modules']
  },
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'main.js'
  },
  resolve: {
    modules: [path.resolve(__dirname, 'src'), 'node_modules']
  }
};