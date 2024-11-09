describe("Funcionalidad de crear página, incluyendo un elemento embed(Spotify)", () => {
  before(() => {
    Cypress.on("uncaught:exception", (err, runnable) => {
      if (err.message.includes("The play() request was interrupted")) {
        return false;
      }
      return true;
    });
  });

  it("Crear pagina embebiendo link de Spotify", () => {
    cy.visit("http://localhost:2368/ghost/");
    cy.get("#identification").type("e.herediar@uniandes.edu.co");

    cy.get("#password").type("1015456264");

    cy.get('[data-test-button="sign-in"]').click();

    cy.get('a[href="#/pages/"]').click();

    cy.contains("New page").click();

    cy.get(".gh-editor-title-container")
      .should("be.visible")
      .type("Escenario página - Spotify");

    cy.get('.koenig-react-editor .kg-prose[contenteditable="true"]')
      .should("be.visible")
      .first()
      .click();

    cy.get('button[aria-label="Add a card"]').click();

    cy.contains("Spotify").click();

    cy.get('input[data-testid="embed-url"]')
      .clear()
      .type(
        "https://open.spotify.com/track/71N1Ob14XLnH5JwsmvXhXj?si=d99b678f09b9492b"
      )
      .type("{enter}");

    cy.get("div.absolute.inset-0.z-50.mt-0") // Seleccionamos el div con estas clases
      .should("be.visible");

    cy.contains("button", "Publish").click();

    cy.contains("button", "Continue, final review").click();

    cy.contains("button", "Publish page, right now").click();

    cy.get('[data-test-button="close-publish-flow"]').click();
  });
});
