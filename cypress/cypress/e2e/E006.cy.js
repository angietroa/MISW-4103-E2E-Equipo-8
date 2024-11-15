import LoginPage from "../../pages/login";
import PageObj from "../../pages/page";

describe("E006 - Funcionalidad de crear página asociando un Bookmark", () => {
  // Configuración global para manejar excepciones
  before(() => {
    Cypress.on("uncaught:exception", (err, runnable) => {
      if (err.message.includes("The play() request was interrupted")) {
        return false;
      }
      return true;
    });
  });

  let saveFolder;

  beforeEach(function () {
    const scenarioTitle = Cypress.mocha.getRunner().suite.title;

    saveFolder = scenarioTitle.split(" ")[0];

    cy.task("clearScreenshots", saveFolder);
  });

  it("E006 - Crear página con bookmarks (asociando posts)", () => {
    const loginPage = new LoginPage(cy);
    const page = new PageObj(cy);

    // Given: I navigate to page
    cy.log({ displayName: "Given", message: "I navigate to page" });
    loginPage.visitPage(saveFolder);

    // When: I enter email, password and I do click on Sign-in
    cy.log({
      displayName: "When",
      message: "I enter email, password and I do click on Sign-in",
    });
    loginPage.signInPage(saveFolder);

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
    page.pageTitle("Escenario página - Bookmark");

    // When: I enter the title, I want to add an element to page, in this case bookmark
    cy.log({
      displayName: "When",
      message:
        "I enter the title, I want to add an element to page, in this case bookmark",
    });
    page.addPageElement("Bookmark");

    // When: I add an element, I want to select a bookmark
    cy.log({
      displayName: "When",
      message: "I add an element, I want to select a bookmark",
    });
    page.addBookmarkContent();

    // Then: I save all changes
    cy.log({
      displayName: "Then",
      message: "I save all changes",
    });
    page.publishPage();
  });
});
