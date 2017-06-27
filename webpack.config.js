var webpack = require('webpack');
var ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports = {

  entry: './src/notifies.js',

  output: {
    filename: 'notifier.js',
    library: 'notifier'
  },

  module : {

    rules: [
      {
        test: /\.js$/,
        exclude: /(node_modules)/,
        use : [{
            loader: 'babel-loader',
            options: {
              presets: ['es2015']
            }
          }]
      },
      {
        test: /\.css$/,
        use: ExtractTextPlugin.extract([
          {
            loader: 'css-loader',
            options: {
              minimize: 1,
              importLoaders: 1
            }
          },
          'postcss-loader'
        ])
      },
    ]

  },

  plugins : [
    new ExtractTextPlugin('notifier.css'),
    new webpack.optimize.UglifyJsPlugin({
      compress: {
        warnings: false
      }
    })
  ],

  devtool: "source-map",

  watch: true,

  watchOptions: {
    aggragateTimeout: 50
  }

};