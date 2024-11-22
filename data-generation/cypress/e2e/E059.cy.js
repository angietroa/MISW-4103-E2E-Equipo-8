const LoginPage = require("../pages/login");
const PageObj = require("../pages/page");
const PAGE_DATAPOOL_APRIORI = require("../data-a-priori/page.json");

describe("E059 - Crear página con botón con caracter vacio a-priori", () => {
  const data = PAGE_DATAPOOL_APRIORI[28];
  it("E059 - Crear página con botón con caracter vacio a-priori", () => {
    const loginPage = new LoginPage(cy);
    const page = new PageObj(cy);

    // Given: I navigate to page
    cy.log({ displayName: "Given", message: "I navigate to page" });
    loginPage.visitPage();

    // When: I enter email, password and I do click on Sign-in
    cy.log({
      displayName: "When",
      message: "I enter email, password and I do click on Sign-in",
    });
    loginPage.signInPage();

    // And: I enter admin, I go to page and create a new one
    cy.log({
      displayName: "And",
      message: "I enter admin, I go to page and create a new one",
    });
    page.goToPageAndCreate();

    // And: I enter page, I set a title
    cy.log({
      displayName: "And",
      message: "I enter page, I set a title",
    });
    page.pageTitle(data.title);

    // And: I enter the title, I want to add an element to page, in this case file
    cy.log({
      displayName: "And",
      message: "I enter the title, I want to write a-priori data in text field",
    });
    page.addPageElement("Button");

    // And: I enter the valid HTML
    cy.log({
      displayName: "And",
      message: "I enter the valid HTML",
    });
    page.setContentToButton(data.empty_strings);

    // Then: I save all changes
    cy.log({
      displayName: "Then",
      message: "I save all changes",
    });
    page.publishPage();
    page.closePublishPopup();
  });
});
