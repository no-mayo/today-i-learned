const ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports = {
    entry: {
        main: './index.jsx'
    },
    output: {
        filename: './dist/js/bundle.js'
    },
    resolve: {
      extensions: ['.js', '.jsx']
    },
    devtool: 'source-map', 
    module: {
        loaders: [
            {
                test: /\.jsx$/,
                exclude: /(node_modules|bower_components)/,
                loader: 'babel-loader',
                query: {
                    presets: ['react', 'es2015']
                }
            },
            {
              test: /\.scss$/,
              loader: ExtractTextPlugin.extract('css-loader!sass-loader')
            }
        ]
    },
    plugins: [
      new ExtractTextPlugin({
        allChunks: true,
        disable: false,
        filename: 'dist/css/style.css'
      })
    ]
}