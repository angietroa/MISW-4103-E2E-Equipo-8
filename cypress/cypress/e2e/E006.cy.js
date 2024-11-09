describe("Funcionalidad de crear página asociando un Bookmark", () => {
  // Configuración global para manejar excepciones
  before(() => {
    Cypress.on("uncaught:exception", (err, runnable) => {
      if (err.message.includes("The play() request was interrupted")) {
        return false;
      }
      return true;
    });
  });

  it("Crear página con bookmarks (asociando posts)", () => {
    cy.visit("http://localhost:2368/ghost/");
    cy.get("#identification").type("e.herediar@uniandes.edu.co");

    cy.get("#password").type("1015456264");

    cy.get('[data-test-button="sign-in"]').click();

    cy.get('a[href="#/posts/"]').click();

    cy.contains("New post").click();

    cy.get(".gh-editor-title")
      .should("be.visible")
      .type("Escenario post - bookmark");

    cy.get('div[data-koenig-dnd-container="true"]').first().type("Hola mundo");

    cy.contains("button", "Publish").click();

    cy.contains("button", "Continue, final review").click();

    cy.contains("button", "Publish post, right now").click();

    cy.get('[data-test-button="close-publish-flow"]').click();

    cy.get('a[href="#/pages/"]').click();

    cy.contains("New page").click();

    cy.get(".gh-editor-title")
      .should("be.visible")
      .type("Escenario página - Bookmark");

    cy.get('div[data-koenig-dnd-container="true"]').first().click();

    cy.get('button[aria-label="Add a card"]').click();

    cy.contains("Bookmark").click();

    cy.get('[data-testid="bookmark-url-dropdown"]').should("be.visible");

    cy.contains("Escenario post - bookmark").click();

    cy.get('[data-testid="bookmark-url-error-message"]').should("be.visible");

    cy.contains("button", "Publish").click();

    cy.contains("button", "Continue, final review").click();

    cy.contains("button", "Publish page, right now").click();
  });
});
