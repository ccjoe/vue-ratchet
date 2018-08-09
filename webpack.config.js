module.exports = {
  entry: {
    app: './example/main.js'
  },
  output: {
    path: './build',
    publicPath: '/build/',
    filename: 'bundle.js'
  },
  module: {
    loaders: [
      { test: /\.vue$/, loader: 'vue' },
      // { test: /\.vue$/, loader: vue.withLoaders({sass: "style!css!sass?indentedSyntax"}) },
      { test: /\.js$/, exclude: /node_modules/, loader: 'babel'},
      { test: /\.(png|jpg)$/, loader: 'file' },
      { test: /\.(png|jpg)$/, loader: 'url?limit=10000'},
      { test: /\.(woff|woff2)(\?v=\d+\.\d+\.\d+)?$/, loader: 'url?limit=10000&mimetype=application/font-woff' },
      { test: /\.ttf(\?v=\d+\.\d+\.\d+)?$/, loader: 'url?limit=10000&mimetype=application/octet-stream' },
      { test: /\.eot(\?v=\d+\.\d+\.\d+)?$/, loader: 'file' },
      { test: /\.svg(\?v=\d+\.\d+\.\d+)?$/, loader: 'url?limit=10000&mimetype=image/svg+xml' },
      { test: /\.css$/, loader: 'style!css' },
      { test: /\.less$/, loader: 'style!css!less', exclude: /node_modules/ },
      { test: /\.s[a|c]ss$/, loader: 'style!css!sass', exclude: /node_modules/ }
    ]
  },
  vue: {
      loaders: {
          scss: 'style!css!less!sass?indentedSyntax',
          exclude: /node_modules/
      }
  },
  babel: {
    presets: ['es2015'],
    plugins: ['transform-runtime']
  },
  resolve: {
    alias: {
      vue: 'vue/dist/vue.js'
    }
  },
  devtool: '#source-map'
}
