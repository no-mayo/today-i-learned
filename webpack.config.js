const ExtractTextPlugin = require('extract-text-webpack-plugin');
// const extractSass = new ExtractTextPlugin({
//   allChunks: true,
//   disable: false,
//   filename: './css/style.css'
// });

module.exports = {
  entry: {
    main: './js/index.js'
  },
  output: {
    filename: './js/bundle/all.js'
  },
  resolve: {
    extensions: ['.js', '.jsx']
  },
  devtool: 'source-map', 
  module: {
    loaders: [
      {
        test: /\.js$/,
        exclude: /(node_modules|bower_components)/,
        loader: 'babel-loader',
        query: {
          presets: ['es2015']
        }
      },
      {
        test: /\.scss$/,
        loader: ExtractTextPlugin.extract({
          fallback: 'style-loader', // backup loader when not building .css file
          use: 'css-loader!sass-loader' // loaders to preprocess CSS
        })
      }
    ]
  },
  plugins: [
    new ExtractTextPlugin('./css/style.css')
  ]
}