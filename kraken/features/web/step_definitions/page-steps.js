const { Given, When, Then } = require("@cucumber/cucumber");
const path = require("path");
const PageObj = require("../../../pages/page");

When("I enter title {kraken-string}", async function (title) {
  const page = new PageObj(this.driver);
  let element = await page.getPageTitle();
  return await page.setTitle(element, title);
});

When("I click on page", async function () {
  const page = new PageObj(this.driver);
  return await page.clickOnPage();
});

When("I click on new page", async function () {
  const page = new PageObj(this.driver);
  return await page.clickOnNewPage();
});

When("I click on text area of page", async function () {
  const page = new PageObj(this.driver);
  return await page.clickOnTextAreaPage();
});

When("I click on the add tool menu", async function () {
  const page = new PageObj(this.driver);
  return await page.clickOnAddToolMenu();
});

When("I click on the tool {kraken-string}", async function (tool) {
  const page = new PageObj(this.driver);
  return await page.clickOnElementTool(tool);
});

When("I select a bookmark", async function () {
  const page = new PageObj(this.driver);
  return await page.selectBookmarkToElement();
});

When("I edit the markdown with text {kraken-string}", async function (text) {
  const page = new PageObj(this.driver);
  let element = await page.getMarkdownElement();
  return await page.setMarkdownText(element, text);
});

When("I upload images to gallery", async function () {
  const page = new PageObj(this.driver);
  const paths = [
    "./assets/gallery_1.jpg",
    "./assets/gallery_2.jpeg",
    "./assets/gallery_3.webp",
  ];
  return await page.uploadImagesToGallery(paths);
});

When("I upload a file to the element", async function () {
  const page = new PageObj(this.driver);
  const filePath = "./assets/image_page.png";
  return await page.uploadFileToElement(filePath);
});

When(
  "I want to upload a song to the page {kraken-string}",
  async function (link) {
    const page = new PageObj(this.driver);
    return await page.uploadEmbedSpotifyToElement(link);
  }
);

Then("I want to publish the changes", async function () {
  const page = new PageObj(this.driver);
  return await page.performPublishFlow();
});
