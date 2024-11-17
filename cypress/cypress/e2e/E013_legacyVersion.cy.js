const { faker } = require("@faker-js/faker");

const LoginPage = require("../../pages/login");
const TagPage = require("../../pages/tag");

describe("E013 - Crear tag", () => {
  const loginPage = new LoginPage(cy);
  const tagPage = new TagPage(cy);

  let saveFolder;

  beforeEach(function () {
    const scenarioTitle = Cypress.mocha.getRunner().suite.title;

    saveFolder = scenarioTitle.split(" ")[0];

    cy.task("clearScreenshots", saveFolder);
  });

  it("E013 - Crear tag con metadata", () => {
    // Given: I navigate to page
    cy.log({ displayName: "Given", message: "I navigate to page" });
    loginPage.visitPage(saveFolder, true, "legacy");

    // When: I enter email, password and I do click on Sign-in
    cy.log({
      displayName: "When",
      message: "I enter email, password and I do click on Sign-in",
    });
    loginPage.signInPage(saveFolder);

    // Alert
    cy.window().then((win) => {
      const observer = new win.MutationObserver(() => {
        const alertElement = win.document.querySelector("article.gh-alert");
        if (alertElement) {
          alertElement.querySelector(".gh-alert-close").click();
          observer.disconnect();
        }
      });

      observer.observe(win.document.body, {
        childList: true,
        subtree: true,
      });
    });

    // When: I click on tags menu
    cy.log({ displayName: "When", message: "I click on tags menu" });
    tagPage.clickOnTagMenu(saveFolder, true);

    // When: I click on new menu
    cy.log({ displayName: "When", message: "I click on new menu" });
    tagPage.clickOnNewTag(saveFolder, true);

    // When: I enter a tag name
    const tagName = faker.lorem.word();
    cy.log({ displayName: "When", message: `I enter a tag name "${tagName}"` });
    tagPage.setTagName(tagName, saveFolder);

    //When: I click on expand metadata form
    cy.log({ displayName: "When", message: "I click on expand metadata form" });
    tagPage.clickOnExpandMetadataForm(saveFolder);

    // When: I enter tag medatata title, description and url
    cy.log({
      displayName: "When",
      message: "I enter tag medatata title, description and url",
    });
    tagPage.setTagMetadataValues(
      faker.lorem.word(),
      faker.lorem.sentence(),
      faker.image.url(),
      saveFolder
    );

    // When: I click on save tag
    cy.log({ displayName: "When", message: "I click on save tag" });
    tagPage.clickOnSaveTag(saveFolder, true);

    // // When: I click on tags menu
    cy.log({ displayName: "When", message: "I click on tags menu" });
    tagPage.clickOnTagMenu(saveFolder, true);

    // // Then: I see tag name on list
    cy.log({
      displayName: "Then",
      message: `I see tag name "${tagName}" on list`,
    });
    tagPage.findTagNameCreated(tagName, saveFolder);
  });
});