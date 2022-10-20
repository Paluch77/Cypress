const { defineConfig } = require('cypress')

module.exports = defineConfig({
  includeShadowDom: true,
  chromeWebSecurity: true,
  viewportHeight: 1080,
  viewportWifth: 1920,
  e2e: {
    // We've imported your old cypress plugins here.
    // You may want to clean this up later by importing these.
    setupNodeEvents(on, config) {
      return require('./cypress/plugins/index.js')(on, config)
    },
    baseUrl: 'http://automationpractice.com',
  },
})
