const { defineConfig } = require("cypress");

module.exports = defineConfig({
  video: false,
  defaultCommandTimeout: 35000,
  pageLoadTimeout: 100000,
  reporter: "mochawesome",
  retries: 0,

  reporterOptions: {
    charts: false,
    overwrite: false,
    html: false,
    json: true,
    reportDir: "cypress/reports/mochawesome-report",
  },

  env: {
    url: "https://demo.casino/user/registration",
    url_login:"https://demo.casino/user/login",
    url_gamePage:"https://demo.casino/cabinet/profile/index",
    username: "paramo000@yopmail.com",
    password: "Latam123$.",
  },

  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
});
