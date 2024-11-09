import "cypress-file-upload";
describe("template spec", () => {
  // Configuración global para manejar excepciones
  before(() => {
    Cypress.on("uncaught:exception", (err, runnable) => {
      if (err.message.includes("The play() request was interrupted")) {
        return false;
      }
      return true;
    });
  });

  it("Crear pagina adjuntando un archivo", () => {
    cy.visit("http://localhost:2368/ghost/");
    cy.get("#identification").type("e.herediar@uniandes.edu.co");

    cy.get("#password").type("1015456264");

    cy.get('[data-test-button="sign-in"]').click();

    cy.get('a[href="#/pages/"]').click();

    cy.contains("New page").click();

    cy.get(".gh-editor-title-container")
      .should("be.visible")
      .type("Escenario página - galeria");

    cy.get('.koenig-react-editor .kg-prose[contenteditable="true"]')
      .should("be.visible")
      .first()
      .click();

    cy.get('button[aria-label="Add a card"]').click();

    cy.contains("Gallery").click();

    const imagePaths = [
      "cypress/fixtures/gallery_1.jpg",
      "cypress/fixtures/gallery_2.jpeg",
      "cypress/fixtures/gallery_3.webp",
    ];

    cy.contains("Click to select up to 9 images").click();

    cy.get('input[name="image-input"]').selectFile(imagePaths, { force: true });

    cy.contains("button", "Publish").click();

    cy.contains("button", "Continue, final review").click();

    cy.contains("button", "Publish page, right now").click();

    cy.get('[data-test-button="close-publish-flow"]').click();
  });
});
