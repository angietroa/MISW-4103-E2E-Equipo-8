class LoginPage {
  constructor(driver) {
    this.driver = driver;
  }

  async getEmailElement() {
    const element = await this.driver.$('#identification');
    return element;
  }

  async setEmailElement(element, email) {
    return await element.setValue(email);
  }

  async getPasswordElement() {
    const element = await this.driver.$('#password');
    return element;
  }

  async setPasswordElement(element, password) {
    return await element.setValue(password);
  }

  async clickOnSignInElement() {
    let element = await this.driver.$('button[type=submit]');
    return await element.click();
  }
}

module.exports = LoginPage;
