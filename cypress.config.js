const { defineConfig } = require('cypress')
module.exports = defineConfig({
  component: {
    devServer: {
      framework: 'react',
      bundler: 'webpack',
    },
  },
  e2e: {
    screenshotOnRunFailure: false,
    video: false,
  },
})
