const path = require('path')
const TerserPlugin = require('terser-webpack-plugin')

module.exports = {
  entry: './background-dev.js',
  mode: 'production',
  optimization: {
    minimize: true,
    minimizer: [new TerserPlugin()],
  },
  output: {
    filename: 'background.js',
    path: path.resolve(__dirname, '.'),
  },
}
