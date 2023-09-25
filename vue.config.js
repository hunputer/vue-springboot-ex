const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  outputDir: "../src/main/resources/static",
  devServer: {
    port: 8082,
    proxy: {
      '/api': {
        target: 'http://localhost:8081',
        changeOrigin: true
      }
    }
  },
  lintOnSave:false
})
