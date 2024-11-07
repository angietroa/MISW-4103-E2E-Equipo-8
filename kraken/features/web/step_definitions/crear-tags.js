const { Given, When, Then } = require('@cucumber/cucumber');

When('I click on tags option', async function () {
  let element = await this.driver.$('a[href="#/tags/"]');
  return await element.click();
});
