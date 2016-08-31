var config = require('./webpack.config.js')

config.entry = {
  'VueRatchet': './src/index.js',
}

config.output = {
  path: './dist',
  filename: '[name].js',
  library: 'VueRatchet',
  libraryTarget: 'umd'
}


module.exports = config