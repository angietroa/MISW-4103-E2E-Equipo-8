import LoginPage from "../../pages/login";
import PageObj from "../../pages/page";

describe("E007 - Funcionalidad de crear página con elemento Markdown", () => {
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

  it("E007 - Crear página con Markdown", () => {
    const loginPage = new LoginPage(cy);
    const page = new PageObj(cy);

    // Given: I navigate to page
    cy.log({ displayName: "Given", message: "I navigate to page" });
    loginPage.visitPage(saveFolder, true, "legacy");

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
    page.goToPageAndCreate(saveFolder);

    // When: I enter the page, I want to add an element to page, in this case bookmark
    cy.log({
      displayName: "When",
      message:
        "I enter the page, I want to add an element to page, in this case bookmark",
    });
    page.addPageElement("Markdown", saveFolder, true);

    cy.log({
      displayName: "When",
      message:
        "I enter the page, I want to add an element to page, in this case bookmark",
    });
    page.setContentToMarkdown(
      "Markdown para pruebas automatizadas de software",
      saveFolder
    );

    // When: I set the content on bookmark, I set a title
    cy.log({
      displayName: "When",
      message: "I set the content on bookmark, I set a title",
    });
    page.pageTitle("Escenario página - Markdown", saveFolder);

    // Then: I save all changes
    cy.log({
      displayName: "Then",
      message: "I save all changes",
    });
    page.publishPage(saveFolder, true);
  });
});
