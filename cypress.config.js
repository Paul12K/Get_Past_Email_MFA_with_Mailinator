const { defineConfig } = require('cypress');

module.exports = defineConfig({
  e2e: {
    specPattern: "cypress/e2e/**/*.{cy,spec}.{js,ts}",
    baseUrl: "https://dev.helper.adamstaxforms.com",
    env: {
      email: process.env.CYPRESS_EMAIL,
      password: process.env.CYPRESS_PASSWORD,
      mailinatorDomain: process.env.CYPRESS_MAILINATOR_DOMAIN,
      mailinatorInbox: process.env.CYPRESS_MAILINATOR_INBOX,
      mailinatorApiToken: process.env.CYPRESS_MAILINATOR_API_TOKEN
    },
  }
});
