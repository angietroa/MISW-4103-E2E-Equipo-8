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
    this.cy.get('a[href="#/pages/"]').click();
    this.cy.contains("New page").click();
  }

  async pageTitle(titulo) {
    this.cy.get(".gh-editor-title").should("be.visible").type(titulo);
  }

  async addPageElement(elemento) {
    this.cy
      .get('.koenig-react-editor .kg-prose[contenteditable="true"]')
      .should("be.visible")
      .first()
      .click();

    this.cy.get('button[aria-label="Add a card"]').click();

    this.cy.contains(elemento).click();
  }

  async addBookmarkContent(bookmark) {
    this.cy.get('[data-testid="bookmark-url-dropdown"]').type(bookmark);
    // The admin triggers an error but is controlled
    this.cy.wait(5000);
    this.cy
      .get('[data-testid="bookmark-url-error-message"]')
      .should("be.visible");
  }

  async setContentToMarkdown(contenido) {
    this.cy.get(".CodeMirror").type(contenido);
  }

  async setContentToGallery(archivos) {
    this.cy.contains("Click to select up to 9 images").click();

    this.cy
      .get('input[name="image-input"]')
      .selectFile(archivos, { force: true });
  }

  async setContentToFile(archivo) {
    this.cy.contains("Click to upload a file").click();

    this.cy
      .get('input[name="file-input"]')
      .selectFile(archivo, { force: true });

    this.cy
      .get('[data-kg-file-card="fileTitle"]')
      .should("have.value", "image_page")
      .and("be.visible");
  }

  async setContentToSpotify(enlace) {
    this.cy
      .get('input[data-testid="embed-url"]')
      .clear()
      .type(enlace)
      .type("{enter}");
    //Validación
    this.cy.get("div.absolute.inset-0.z-50.mt-0").should("be.visible");
  }
}

module.exports = PageObj;
