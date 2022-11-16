const { defineConfig } = require('cypress')

module.exports = defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  } , projectId: "15b26z",  //, projectId: "hs4obu"


    "reporter": "mochawesome",
    "reporterOptions": {
      "reportDir":"cypress/reports",
      "reportFilename": "report",
      "overwrite": false,
      "html": true,
      "json":true,
      "charts": true
    },
    "video": false,
    "retries":{
      "runMode" : 2,
      "openMode" :0
    }

})

