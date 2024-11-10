import "cypress-file-upload";
import LoginPage from "../../pages/login";
import PageObj from "../../pages/page";

describe("Funcionalidad de crear página asociando una galeria", () => {
  // Configuración global para manejar excepciones
  before(() => {
    Cypress.on("uncaught:exception", (err, runnable) => {
      if (err.message.includes("The play() request was interrupted")) {
        return false;
      }
      return true;
    });
  });

  it("E008 - Crear pagina adjuntando galeria", () => {
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
    page.pageTitle("Escenario página - Galeria");

    // When: I enter the title, I want to add an element to page, in this case bookmark
    cy.log({
      displayName: "When",
      message:
        "I enter the title, I want to add an element to page, in this case gallery",
    });
    page.addPageElement("Gallery");

    const imagePaths = [
      "cypress/fixtures/gallery_1.jpg",
      "cypress/fixtures/gallery_2.jpeg",
      "cypress/fixtures/gallery_3.webp",
    ];

    // When: I add the gallery, I want to add some files
    cy.log({
      displayName: "When",
      message: "I add the gallery, I want to add some files",
    });
    page.setContentToGallery(imagePaths);

    // Then: I save all changes
    cy.log({
      displayName: "Then",
      message: "I save all changes",
    });
    page.publishPage();
  });
});