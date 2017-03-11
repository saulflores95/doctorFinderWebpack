const { resolve } = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')

const srcDir = resolve(__dirname, '../src')

module.exports = {
  entry: `${srcDir}/index.js`,
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
      react: 'preact-compat',
      'react-dom': 'preact-compat',
      'react-addons-shallow-compare': 'shallow-compare',
      'react-tap-event-plugin':'preact-tap-event-plugin',
      leaflet_css: __dirname + "/node_modules/leaflet/dist/leaflet.css",

    }
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: `${srcDir}/index.html`
    })
  ]
}
