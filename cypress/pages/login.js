class LoginPage {
  constructor(cy) {
    this.cy = cy;
  }

  async visitPage(page) {
    this.cy.visit(page);
    this.cy.wait(3000);
  }

  async singInPage() {
    this.cy.fixture('properties').then((data) => {
      this.cy.get('#identification').type(data.username);
      this.cy.get('#password').type(data.password);
      this.cy.get('button[type="submit"]').click();
    })

    this.cy.wait(2000);
  }
}

module.exports = LoginPage;
