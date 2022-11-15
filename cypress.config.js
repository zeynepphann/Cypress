const { defineConfig } = require('cypress')

module.exports = defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  } , projectId: "15b26z"
  //, projectId: "hs4obu"
})

