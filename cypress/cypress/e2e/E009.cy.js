import "cypress-file-upload";
import LoginPage from "../../pages/login";
import PageObj from "../../pages/page";

describe("Funcionalidad de crear página insertando un file", () => {
  // Configuración global para manejar excepciones
  before(() => {
    Cypress.on("uncaught:exception", (err, runnable) => {
      if (err.message.includes("The play() request was interrupted")) {
        return false;
      }
      return true;
    });
  });

  it("E009 - Crear página insertando File", () => {
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
    page.pageTitle("Escenario página - Archivo");

    // When: I enter the title, I want to add an element to page, in this case file
    cy.log({
      displayName: "When",
      message:
        "I enter the title, I want to add an element to page, in this case file",
    });
    page.addPageElement("File");

    const file = "cypress/fixtures/image_page.png";
    // When: I add the element, I want to add a file to the element
    cy.log({
      displayName: "When",
      message: "I add the element, I want to add a file to the element",
    });
    page.setContentToFile(file);

    // Then: I save all changes
    cy.log({
      displayName: "Then",
      message: "I save all changes",
    });
    page.publishPage();
  });
});
