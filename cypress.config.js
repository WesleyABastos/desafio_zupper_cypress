const { defineConfig } = require("cypress");
const allureWriter = require('@shelex/cypress-allure-plugin/writer');

module.exports = defineConfig({
  e2e: {
    baseUrl: 'https://www.zupper.com.br/',
    viewportWidth: 1440,
    viewportHeight: 900,

    setupNodeEvents(on, config) {
      allureWriter(on, config);
      return config;
    },
  },
});
