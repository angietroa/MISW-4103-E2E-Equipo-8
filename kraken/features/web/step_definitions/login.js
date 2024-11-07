const { Given, When, Then } = require('@cucumber/cucumber');
const LoginPage = require('../../../pages/login');


When('I enter email {kraken-string}', async function (email) {
  const loginPage = new LoginPage(this.driver);
  let element = await loginPage.getEmailElement();
  return await loginPage.setEmailElement(element, email);
});

When('I enter password {kraken-string}', async function (password) {
  const loginPage = new LoginPage(this.driver);
  let element = await loginPage.getPasswordElement();
  return await loginPage.setPasswordElement(element, password);
});

When('I click on sign-in', async function () {
  const loginPage = new LoginPage(this.driver);
  return await loginPage.clickOnSignInElement();
});
