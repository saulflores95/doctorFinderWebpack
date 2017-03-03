const { resolve } = require('path')
const CleanWebpackPlugin = require('clean-webpack-plugin')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const ExtractTextPlugin = require('extract-text-webpack-plugin')
const OfflinePlugin = require('offline-plugin');
const webpack = require('webpack')

module.exports = {
  context: resolve(__dirname, '../src'),
  entry: {
    app: `./index.js`,
    vendor: ['react', 'react-dom', 'react-router']
  },
  output: {
    path: resolve(__dirname, '../dist'),
    filename: '[name].[chunkhash:6].js',
    publicPath: '/',
  },
  module: {
    rules: [{
      test: /\.js$/,
      loader: 'babel-loader',
      exclude: /node_modules/
    },{
      test: /manifest.json$/,
      loader: 'file-loader?name=manifest.json!web-app-manifest-loader'
    },{
        test: /\.(jpe?g|png|gif|svg)$/i,
        loaders: [
            'file-loader?hash=sha512&digest=hex&name=[hash].[ext]',
            'image-webpack-loader?bypassOnDebug'
        ]
    },{
      test: /\.css$/,
      use: ExtractTextPlugin.extract(['css-loader?modules,localIdentName="[name]-[local]-[hash:base64:6]",camelCase'])
    }]
  },
  devtool: 'source-map',
  performance: {
  },
  resolve: {
    alias: {
      react: 'preact-compat',
      'react-dom': 'preact-compat',
      'react-addons-shallow-compare': 'shallow-compare',
      'react-tap-event-plugin':'preact-tap-event-plugin',
    }
  },
  plugins: [
    new CleanWebpackPlugin(['dist'], {
      root: resolve(__dirname, '..')
    }),
    new ExtractTextPlugin('styles.[chunkhash:6].css'),
    new HtmlWebpackPlugin({
      filename: 'index.html',
      template: `./index.html`
    }),
    new OfflinePlugin(),
    new webpack.optimize.CommonsChunkPlugin({
      name: 'vendor'
    })
  ]
}
