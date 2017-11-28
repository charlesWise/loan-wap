var path = require('path')
var config = require('../config')
var utils = require('./utils')
var projectRoot = path.resolve(__dirname, '../')
var precss = require('precss')
var autoprefixer = require('autoprefixer')
var px2rem = require('postcss-px2rem')
var postcssFor = require('postcss-for')
var BASE_DPR = 2;
var REM_UNIT = 100;

var outPutPublicPath;
if (process.env.NODE_ENV === 'production') {
  outPutPublicPath = config.build.assetsPublicPath;
} else if (process.env.NODE_ENV === 'test') {
  outPutPublicPath = config.test.assetsPublicPath;
} else {
  outPutPublicPath = config.dev.assetsPublicPath;
}

var outPutpath;

if (process.env.NODE_ENV === 'test') {
  outPutpath = config.test.assetsRoot;
} else {
  outPutpath = config.build.assetsRoot;
}

module.exports = {
  entry: {
    app: './src/main.js'
  },
  output: {
    path: outPutpath,
    publicPath: outPutPublicPath,
    filename: '[name].js'
  },
  resolve: {
    extensions: ['', '.js', '.json', '.vue'],
    fallback: [path.join(__dirname, '../node_modules')],
    alias: {
      'src': path.resolve(__dirname, '../src'),
      'assets': path.resolve(__dirname, '../src/assets'),
      'components': path.resolve(__dirname, '../src/components')
    }
  },
  resolveLoader: {
    fallback: [path.join(__dirname, '../node_modules')]
  },
  module: {
    loaders: [
      {
        test: /\.vue$/,
        loader: 'vue'
      },
      {
        test: /\.json$/,
        loader: 'json'
      },
      {
        test: /\.html$/,
        loader: 'vue-html'
      },
      {
        test: /\.(png|jpe?g|gif|svg)(\?.*)?$/,
        loader: 'url',
        query: {
          limit: 10000,
          name: utils.assetsPath('img/[name].[hash:7].[ext]')
        }
      },
      {
        test: /\.(woff2?|eot|ttf|otf)(\?.*)?$/,
        loader: 'url',
        query: {
          limit: 10000,
          name: utils.assetsPath('fonts/[name].[hash:7].[ext]')
        }
      }
    ]
  },
  vue: {
    loaders: utils.cssLoaders(),
    postcss: function() {
      var ret = [precss, autoprefixer, postcssFor, px2rem({remUnit: REM_UNIT, baseDpr: BASE_DPR})];
      return ret;
    }
  }
}
