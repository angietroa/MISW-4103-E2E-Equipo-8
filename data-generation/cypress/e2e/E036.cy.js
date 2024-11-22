import LoginPage from "../pages/login";
import PageObj from "../pages/page";
const PAGE_DATAPOOL_APRIORI = require("../data-a-priori/page.json");

describe("E036 - Crear página con markdown valido a-priori", () => {
  const data = PAGE_DATAPOOL_APRIORI[6];
  it("E036 - Crear página con markdown valido", () => {
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

    // When: I enter the page, I want to add an element to page, in this case bookmark
    cy.log({
      displayName: "When",
      message:
        "I enter the page, I want to add an element to page, in this case bookmark",
    });
    page.addPageElement("Markdown");

    cy.log({
      displayName: "When",
      message:
        "I enter the page, I want to add an element to page, in this case bookmark",
    });
    page.setContentToMarkdown(data.markdown);

    // When: I set the content on bookmark, I set a title
    cy.log({
      displayName: "When",
      message: "I set the content on bookmark, I set a title",
    });
    page.pageTitle(data.title);

    // Then: I save all changes
    cy.log({
      displayName: "Then",
      message: "I save all changes",
    });
    page.publishPage();
    page.closePublishPopup();
  });
});
