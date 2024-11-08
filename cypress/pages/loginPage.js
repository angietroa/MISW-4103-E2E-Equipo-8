class LoginPage {
  constructor() {
    this.usernameField = 'input[name="identification"]';
    this.passwordField = 'input[name="password"]';
    this.submitButton = 'button[type="submit"]';
  }

  login(username, password) {
    cy.get(this.usernameField).type(username);
    cy.get(this.passwordField).type(password);
    cy.get(this.submitButton).click();
  }
}

export default LoginPage;
