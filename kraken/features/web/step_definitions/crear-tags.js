const { Given, When, Then } = require('@cucumber/cucumber');
const path = require('path');

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
  return await tagPage.setTagName(tagName);
});

When('I enter a tag color {string}', async function (tagColor) {
  const tagPage = new TagPage(this.driver);
  return await tagPage.setTagColor(tagColor);
});

When('I enter a tag description {kraken-string}', async function (tagDescription) {
  const tagPage = new TagPage(this.driver);
  return await tagPage.setTagDescription(tagDescription);
});

When('I upload a tag file', async function () {
  const tagPage = new TagPage(this.driver);
  const fullPath = path.join(__dirname, '../../../../assets/rocket-icon.png');
  return await tagPage.setTagImage(fullPath);
});

When('I click on save a tag', async function () {
  const tagPage = new TagPage(this.driver);
  return await tagPage.clickOnSaveTag();
});

Then('I see a tag named {kraken-string}', async function (tagName) {
  const tagPage = new TagPage(this.driver);
  return await tagPage.findTagNameCreated(tagName);
});
