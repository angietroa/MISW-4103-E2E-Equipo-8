const { faker } = require("@faker-js/faker");

const LoginPage = require("../../pages/login");
const TagPage = require("../../pages/tag");

describe("E012 - Crear tag", () => {
  const loginPage = new LoginPage(cy);
  const tagPage = new TagPage(cy);

  let saveFolder;

  beforeEach(function () {
    const scenarioTitle = Cypress.mocha.getRunner().suite.title;

    saveFolder = scenarioTitle.split(" ")[0];

    cy.task("clearScreenshots", saveFolder);
  });

  it("E012 - Crear tag con nombre y demas atributos", () => {
    // Given: I navigate to page
    cy.log({ displayName: "Given", message: "I navigate to page" });
    loginPage.visitPage(saveFolder);

    // When: I enter email, password and I do click on Sign-in
    cy.log({
      displayName: "When",
      message: "I enter email, password and I do click on Sign-in",
    });
    loginPage.signInPage(saveFolder);

    // When: I click on tags menu
    cy.log({ displayName: "When", message: "I click on tags menu" });
    tagPage.clickOnTagMenu(saveFolder);

    // When: I click on new menu
    cy.log({ displayName: "When", message: "I click on new menu" });
    tagPage.clickOnNewTag(saveFolder);

    // When: I enter a tag name
    const tagName = faker.lorem.word();
    cy.log({ displayName: "When", message: `I enter a tag name "${tagName}"` });
    tagPage.setTagName(tagName, saveFolder);

    // When: I enter a tag color
    const tagColor = faker.color.rgb({ casing: "upper", prefix: "" });
    cy.log({
      displayName: "When",
      message: `I enter a tag color "${tagName}"`,
    });
    tagPage.setTagColor(tagColor, saveFolder);

    // When: I enter a tag description
    const tagDescription = faker.lorem.sentence();
    cy.log({
      displayName: "When",
      message: `I enter a tag description "${tagDescription}"`,
    });
    tagPage.setTagDescription(tagDescription, saveFolder);

    // When: I upload a tag file
    cy.log({ displayName: "When", message: "I upload a image" });
    tagPage.setTagImage("rocket-icon.png", saveFolder);

    // When: I click on save tag
    cy.log({ displayName: "When", message: "I click on save tag" });
    tagPage.clickOnSaveTag(saveFolder);

    // When: I click on tags menu
    cy.log({ displayName: "When", message: "I click on tags menu" });
    tagPage.clickOnTagMenu(saveFolder);

    // Then: I see tag name on list
    cy.log({
      displayName: "Then",
      message: `I see tag name "${tagName}" on list`,
    });
    tagPage.findTagNameCreated(tagName, saveFolder);
  });
});
