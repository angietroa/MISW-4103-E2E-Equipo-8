import LoginPage from "../pages/login";
import PageObj from "../pages/page";
const PAGE_DATAPOOL_APRIORI = require("../data-a-priori/page.json");

describe("E044 - Crear página embebiendo link de Twitter con link valido a-priori", () => {
  const data = PAGE_DATAPOOL_APRIORI[14];
  it("E044 - Crear página embebiendo link de Twitter con link valido a-priori", () => {
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
    page.pageTitle(data.title);

    // When: I enter the title, I want to add an element to page, in this case file
    cy.log({
      displayName: "When",
      message:
        "I enter the title, I want to add an element to page, in this case Spotify",
    });
    page.addPageElement("X (formerly Twitter)");

    // When: I enter the title, I want to add an element to page, in this case file
    cy.log({
      displayName: "When",
      message: "I add the element, I want to add a song",
    });
    page.setContentToLink(data.x_link);

    // Then: I save all changes
    cy.log({
      displayName: "Then",
      message: "I save all changes",
    });
    page.publishPage();
    page.closePublishPopup();
  });
});
