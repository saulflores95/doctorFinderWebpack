const { resolve } = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
var webpack = require('webpack');

const srcDir = resolve(__dirname, '../src')

module.exports = {
  entry: [
  'react-hot-loader/patch',
  // activate HMR for React

  'webpack-dev-server/client?http://localhost:8080',
  // bundle the client for webpack-dev-server
  // and connect to the provided endpoint

  'webpack/hot/only-dev-server',
  // bundle the client for hot reloading
  // only- means to only hot reload for successful updates

  `${srcDir}/index.js`,
  // the entry point of our app
  ],
  output: {
    filename: 'bundle.js',
    publicPath: '/'
  },
  devServer: {
    historyApiFallback: true
  },
  module: {
    rules: [{
      enforce: 'pre',
      test: /\.js$/,
      loader: 'standard-loader',
      exclude: /node_modules/
    },{
      test: /\.js$/,
      loader: 'babel-loader',
      exclude: /node_modules/
    }, {
      test: /\.css$/,
      use: [{
        loader: 'style-loader'
      }, {
        loader: 'css-loader',
        options: {
          modules: true,
          localIdentName: '[name]-[local]-[hash:base64:6]',
          camelCase: true
        }
      }]
    }]
  },
  resolve: {
    alias: {
      'react-addons-shallow-compare': 'shallow-compare',
      leaflet_css: __dirname + "/node_modules/leaflet/dist/leaflet.css",

    }
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: `${srcDir}/index.html`
    }),
    new webpack.HotModuleReplacementPlugin(),
    new webpack.DefinePlugin({
      "process.env": {
         BROWSER: JSON.stringify(true)
      }
    }),
  ]
}
