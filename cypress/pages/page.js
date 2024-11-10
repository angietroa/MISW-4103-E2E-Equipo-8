class PageObj {
  constructor(cy) {
    this.cy = cy;
  }

  async publishPage() {
    this.cy.contains("button", "Publish").click();
    this.cy.contains("button", "Continue, final review").click();
    this.cy.contains("button", "Publish page, right now").click();
  }

  async goToPageAndCreate() {
    cy.get('a[href="#/pages/"]').click();
    cy.contains("New page").click();
  }

  async pageTitle(titulo) {
    cy.get(".gh-editor-title").should("be.visible").type(titulo);
  }

  async addPageElement(elemento) {
    cy.get('.koenig-react-editor .kg-prose[contenteditable="true"]')
      .should("be.visible")
      .first()
      .click();

    cy.get('button[aria-label="Add a card"]').click();

    cy.contains(elemento).click();
  }

  async addBookmarkContent(bookmark) {
    cy.get('[data-testid="bookmark-url-dropdown"]').type(bookmark);
    // The admin triggers an error but is controlled
    this.cy.wait(3000);
    cy.get('[data-testid="bookmark-url-error-message"]').should("be.visible");
  }

  async setContentToMarkdown(contenido) {
    cy.get(".CodeMirror").type(contenido);
  }

  async setContentToGallery(archivos) {
    cy.contains("Click to select up to 9 images").click();

    cy.get('input[name="image-input"]').selectFile(archivos, { force: true });
  }

  async setContentToFile(archivo) {
    cy.contains("Click to upload a file").click();

    cy.get('input[name="file-input"]').selectFile(archivo, { force: true });

    cy.get('[data-kg-file-card="fileTitle"]')
      .should("have.value", "image_page")
      .and("be.visible");
  }

  async setContentToSpotify(enlace) {
    cy.get('input[data-testid="embed-url"]')
      .clear()
      .type(enlace)
      .type("{enter}");
    //Validación
    cy.get("div.absolute.inset-0.z-50.mt-0").should("be.visible");
  }
}

module.exports = PageObj;
