const { defineConfig } = require('cypress');

module.exports = defineConfig({
  projectId: "GHOST",
  supportFolder: './cypress/support',
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
}); 
