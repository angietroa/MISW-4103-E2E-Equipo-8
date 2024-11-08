const { Given, When, Then } = require('@cucumber/cucumber');
const TagPage = require('../../../pages/tag');

When('I click on tags menu', async function () {
  const tagPage = new TagPage(this.driver);
  return await tagPage.clickOnTagMenu();
});

When('I click on new tag', async function () {
  const tagPage = new TagPage(this.driver);
  return await tagPage.clickOnNewTag();
});

When('I enter a tag name {kraken-string}', async function (tagName) {
  const tagPage = new TagPage(this.driver);
  const element = await tagPage.getTagNameElement();
  return await tagPage.setTagNameElement(element, tagName);
});

When('I click on save a tag', async function () {
  const tagPage = new TagPage(this.driver);
  return await tagPage.clickOnSaveTag();
});

Then('I see a tag named {kraken-string}', async function (tagName) {
  const tagPage = new TagPage(this.driver);
  return await tagPage.findTagNameCreated(tagName);
});
