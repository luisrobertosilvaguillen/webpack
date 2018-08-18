const path = require('path');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const webpack = require('webpack');
module.exports = {
  entry: {
    vendor: [
      'react',
      'react-dom',
    ],
    home: path.resolve(__dirname, 'src/js/index.js'),
    contact: path.resolve(__dirname, 'src/js/contact.js')
  },
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'js/[name].js',
    publicPath: "./dist/",
  },
  module: {
    rules: [
      {
        test: /\.css$/,
        use: ExtractTextPlugin.extract({
          use: [
          {
            loader: 'css-loader',
            options: {
              modules: true,
              importLoaders: 1
            }
          },
          'postcss-loader'
        ]
        })
      },
      {
        test: /\.scss$/,
        use: ExtractTextPlugin.extract({
          use: ["css-loader", "sass-loader"]
        })
      },
      {
        test: /\.styl$/,
        use: ExtractTextPlugin.extract({
          use: ["css-loader", 
          {
            loader: 'stylus-loader',
            options: {
              use: [
                require('nib'),
                require('rupture')
              ],
              import: [
                '~nib/lib/nib/index.styl',
                '~rupture/rupture/index.styl'
              ]
            }
          }]
        })
      },
      {
        test: /\.less$/,
        use: ExtractTextPlugin.extract({
          use: ["css-loader", {
            loader: "less-loader",
            options: {
              notIeCompat: true
            }
          }]
        })
      },
      {
        test: /\.js$/,
        exclude: /(node_modules)/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['es2015', 'react']
          }
        }
      },
      {
        test: /\.json$/,
        use: 'json-loader'
      },
      {
        test: /\.(png|jpg|gif|eot|svg|ttf|woff)$/,
        use: [
          {
            loader: 'url-loader',
            options: {
              limit: 100000
            }
          }
        ]
      }
    ]
  },
  plugins: [
    new ExtractTextPlugin("css/[name].css"),
    new webpack.optimize.CommonsChunkPlugin({
      name: 'vendor',
      minChuncks: Infinity
    })
  ]
}
