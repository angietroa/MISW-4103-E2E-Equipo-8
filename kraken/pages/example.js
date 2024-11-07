// LoginPage.js (Page Object)

class LoginPage {
  constructor(driver) {
      this.driver = driver;
      this.usernameField = driver.findElement(By.id("username"));
      this.passwordField = driver.findElement(By.id("password"));
      this.loginButton = driver.findElement(By.id("login"));
  }

  async enterUsername(username) {
      await this.usernameField.sendKeys(username);
  }

  async enterPassword(password) {
      await this.passwordField.sendKeys(password);
  }

  async clickLogin() {
      await this.loginButton.click();
  }

  async login(username, password) {
      await this.enterUsername(username);
      await this.enterPassword(password);
      await this.clickLogin();
  }
}

module.exports = LoginPage;
