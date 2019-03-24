module.exports = {
  resolve: {
    extensions: ['.ts', '.tsx']
  },
  module: {
    rules: [{
      test: /\.tsx?$/,
      loader: 'ts-loader'
    }]
  }
};
