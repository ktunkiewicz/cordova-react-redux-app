var webpack = require('webpack')
var CleanWebpackPlugin = require('clean-webpack-plugin');
var UglifyJSPlugin = require('uglifyjs-webpack-plugin');
// var path = require('path')


var config = {
  entry: process.env.NODE_ENV === 'production' ? './src/main.js' : [
    'webpack-dev-server/client?http://localhost:8080',
    'webpack/hot/only-dev-server',
    './src/main.js',
  ],

  output: {
    path: __dirname + '/www/lib',
    filename: 'bundle.js',
    publicPath: '/lib/'
  },

  module: {
    loaders: [{
      // babel/babel-loader (https://github.com/babel/babel-loader)
      // Troubleshooting: https://github.com/babel/babel-loader#troubleshooting
      test: /\.js(x)?$/,
      exclude: /(node_modules|bower_components)/,
      loader: 'babel-loader',
    }, {
      // jtangelder/sass-loader (https://github.com/jtangelder/sass-loader)
      // Usage: https://github.com/jtangelder/sass-loader#usage
      test: /(\.scss|\.css)$/,
      loaders: ['style-loader', 'css-loader', 'sass-loader'],
      // loaders: ['style-loader', 'css-loader?sourceMap', 'sass-loader?sourceMap'],
    }]
  },

  // resolve: {
  //   extensions: ['', '.js', '.jsx', '.css', '.scss' ],
  // },

  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    // new webpack.NoErrorsPlugin(),
    new CleanWebpackPlugin(['lib'], {
      // root: __dirname,
      // verbose: true,
      // dry: false,
      exclude: ['bundle.js']
    }),
  ],

  devServer: {
    hot: true,
    contentBase: './',
  },
}


if ( process.env.UGLIFY ) {
  config.plugins.push( new webpack.DefinePlugin({
      'process.env': {
        NODE_ENV: JSON.stringify(process.env.NODE_ENV)
      }
    })
  );

  config.plugins.push( new UglifyJSPlugin());
  config.plugins.push( new webpack.optimize.ModuleConcatenationPlugin());
}


module.exports = config;
