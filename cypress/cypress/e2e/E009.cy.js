import "cypress-file-upload";
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

  it("Crear página insertando File", () => {
    cy.visit("http://localhost:2368/ghost/");
    cy.get("#identification").type("e.herediar@uniandes.edu.co");

    cy.get("#password").type("1015456264");

    cy.get('[data-test-button="sign-in"]').click();

    cy.get('a[href="#/pages/"]').click();

    cy.contains("New page").click();

    cy.get(".gh-editor-title-container")
      .should("be.visible")
      .type("Escenario página - File");

    cy.get('.koenig-react-editor .kg-prose[contenteditable="true"]')
      .should("be.visible")
      .first()
      .click();

    cy.get('button[aria-label="Add a card"]').click();

    cy.contains("File").click();

    cy.contains("Click to upload a file").click();

    cy.get('input[name="file-input"]').selectFile(
      "cypress/fixtures/image.png",
      { force: true }
    );

    cy.get('[data-kg-file-card="fileTitle"]')
      .should("have.value", "image") // Verificar el título del archivo (puedes cambiar esto dependiendo de tu archivo)
      .and("be.visible");

    cy.contains("button", "Publish").click();

    cy.contains("button", "Continue, final review").click();

    cy.contains("button", "Publish page, right now").click();

    cy.get('[data-test-button="close-publish-flow"]').click();
  });
});
