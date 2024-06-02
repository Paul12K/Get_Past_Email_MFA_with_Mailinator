const {defineConfig} = require('cypress');

module.exports = defineConfig({
  e2e: {
    // Configure your E2E tests here
    specPattern: "cypress/e2e/**/*.{cy,spec}.{js,ts}",
    baseUrl: "YOUR_BASE_URL",
    env: {

      //EXMAPLE DATA BELOW <<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<
      email: "test7@taxteam.testinator.com",
      password: "Adamstaxtest123!",
      mailinatorDomain: "taxtestteam.testinator.com",
      mailinatorInbox: "test7",
      mailinatorApiToken: "YOUR_API_TOKEN",
    },
  }
});
