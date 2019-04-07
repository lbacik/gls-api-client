module.exports = {
  mode: 'none',
  entry: './src/api/client.js',
  output: {
    filename: 'gls-api-client.js',
    libraryTarget: 'umd',
    library: 'gls-api-client',
  },
}
