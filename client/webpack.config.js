const path = require('path');
module.exports = {
  mode: 'development',
  entry: './src/entry.tsx',
  devServer: {
    contentBase: './public',
    historyApiFallback: true,
    port: 6001,
    hot: true
  },
  output: {
    path: path.resolve(__dirname, 'public'),
    filename: 'bundle.js'
  },
  resolve: {
    extensions:  ['.js', '.jsx', '.json', '.ts', '.tsx']
  },
  module: {
    rules: [{
      test: /\.tsx?$/,
      loader: 'ts-loader'
    }]
  }
}
