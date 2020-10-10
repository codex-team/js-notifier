module.exports = {
  entry: './src/notifier.js',
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: [
          'babel-loader',
           {
              loader: 'eslint-loader',
              options: {
                 formatter: require('eslint/lib/cli-engine/formatters/stylish') /*eslint 6.x+:*/
               /* formatter: require('eslint/lib/formatters/stylish') /*eslint 5.x*/
              },
           }
        ]
      },
      {
        test: /\.css$/,
        exclude: /node_modules/,
        use: [
          "style-loader",
          "css-loader",
          "postcss-loader"
        ]
      }
    ]
  },
  output: {
    path: __dirname + '/dist',
    publicPath: '/',
    filename: 'bundle.js',
    library: "notifier",
    libraryTarget: 'umd'
  }
};
