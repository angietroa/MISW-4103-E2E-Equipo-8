class AuthenticationPage {
  constructor(cy) {
    this.cy = cy;
  }

  setEmail(email) {
    this.cy.get("#identification").type(email);
  }

  setPassword(password) {
    this.cy.get("#password").type(password);
  }

  clickOnSignIn() {
    this.cy.get('button[type="submit"]').click();
  }

  findAuthenticationButtonError() {
    this.cy.get('span[data-test-task-button-state="failure"]').should('exist');
  }

  findSiteTitle() {
    this.cy.get('.gh-nav-menu-details-sitetitle').should('exist');
  }
}

module.exports = AuthenticationPage;
