import LoginPage from "../pages/login";
import PageObj from "../pages/page";
const { faker } = require("@faker-js/faker");

describe("E039 - Crear página embebiendo link en YouTube con link valido aleatorio", () => {
  it("E039 - Crear página embebiendo link en YouTube con link valido aleatorio", () => {
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

    // When: I enter admin, I go to page and create a new one
    cy.log({
      displayName: "When",
      message: "I enter admin, I go to page and create a new one",
    });
    page.goToPageAndCreate();

    // When: I enter page, I set a title
    cy.log({
      displayName: "When",
      message: "I enter page, I set a title",
    });
    page.pageTitle(faker.lorem.word());

    // When: I enter the title, I want to add an element to page, in this case file
    cy.log({
      displayName: "When",
      message:
        "I enter the title, I want to add an element to page, in this case Spotify",
    });
    page.addPageElement("YouTube");

    // Then: I add the link and validate the message
    cy.log({
      displayName: "When",
      message: "I add the element, I want to add a song",
    });
    page.setContentToInvalidLink(faker.internet.url());
  });
});
