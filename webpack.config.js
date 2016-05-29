var Webpack = require('webpack');

module.exports = {
  devtool: 'cheap-module-eval-source-map',
  entry: [
    'webpack/hot/dev-server',
    'webpack-dev-server/client?http://localhost:8080',
    'babel-polyfill',
    './src',
  ],
  output: {
    path: __dirname + '/public/dist',
    filename: 'bundle.js',
  },
  plugins: [
    new Webpack.optimize.OccurenceOrderPlugin(),
    new Webpack.NoErrorsPlugin(),
    new Webpack.ProvidePlugin({
      fetch: 'imports?this=>global!exports?global.fetch!whatwg-fetch',
    }),
  ],
  module: {
    loaders: [
      {
        test: /\.js?$/,
        exclude: /node_modules/,
        loader: 'react-hot',
      },
      {
        test: /\.js?$/,
        exclude: /node_modules/,
        loader: 'babel-loader',
        query: {
          presets: ['stage-0', 'react', 'es2015'],
        },
      },
      {
        test: /\.scss$/,
        loaders: [
          'style?sourceMap',
          'css?modules&importLoaders=1&localIdentName=[path]___[name]__[local]___[hash:base64:5]',
          'resolve-url',
          'sass?sourceMap',
        ],
      },
      {
        test: /\.json?$/,
        exclude: /node_modules/,
        loader: 'json-loader',
      },
    ],
    plugins: [new Webpack.HotModuleReplacementPlugin()],
  },
};
