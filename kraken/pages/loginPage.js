class LoginPage {
  constructor(driver) {
    this.driver = driver;
    this.usernameField = 'input[name="identification"]';
    this.passwordField = 'input[name="password"]';
    this.submitButton = 'button[type="submit"]';
  }

  async login(username, password) {
    await this.driver.$(this.usernameField).setValue(username);
    await this.driver.$(this.passwordField).setValue(password);
    await this.driver.$(this.submitButton).click();
  }
}

module.exports = LoginPage;
