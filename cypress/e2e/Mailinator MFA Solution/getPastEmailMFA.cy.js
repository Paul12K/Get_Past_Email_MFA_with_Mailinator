describe('Perform Actions after Login', () => {
  beforeEach(() => {
    cy.session('userSession', () => {
      cy.login();
    });
  });

  it('Get Past Email MFA', () => {
    // Static wait to ensure email is received
    cy.visit('/');
    cy.wait(5000);
  });

});