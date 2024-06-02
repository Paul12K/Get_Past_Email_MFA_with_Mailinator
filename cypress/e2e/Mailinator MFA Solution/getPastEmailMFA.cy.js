describe('Perform Actions after Login', () => {
  beforeEach(() => {
    cy.session('userSession', () => {

      //Below command defined in support folder commands.js
      cy.login();
    });
  });
});