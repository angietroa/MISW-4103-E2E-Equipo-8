class LoginPage {
  async visitPage() {
    cy.fixture("properties").then((data) => {
      cy.visit(data.url);
    });
  }

  async signInPage() {
    cy.fixture("properties").then((data) => {
      cy.get("#identification").type(data.username);
      cy.get("#password").type(data.password);
      cy.get('button[type="submit"]').click();
    });
  }
}

module.exports = LoginPage;
