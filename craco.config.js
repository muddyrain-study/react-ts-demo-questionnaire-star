/**
 * @type {import('webpack').Configuration & {devServer: import('webpack-dev-server').Configuration}}
 */
const config = {
  devServer: {
    proxy: {
      '/api': 'http://127.0.0.1:3001',
    },
  },
}

module.exports = config
