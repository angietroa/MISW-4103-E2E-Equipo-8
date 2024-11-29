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
}
