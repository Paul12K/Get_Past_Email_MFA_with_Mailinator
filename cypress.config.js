const {defineConfig} = require('cypress');

module.exports = defineConfig({
  e2e: {
    // Configure your E2E tests here
    specPattern: "cypress/e2e/**/*.{cy,spec}.{js,ts}",
    baseUrl: "https://dev.helper.adamstaxforms.com",
    env: {
      email: "test1@adamstaxtestteam.testinator.com",
      password: "Adamstaxtest123!",
      mailinatorDomain: "adamstaxtestteam.testinator.com",
      mailinatorInbox: "test1",
      mailinatorApiToken: "a47b4d84f9104affafb1f5bb633ee123"
    },
  }
});
