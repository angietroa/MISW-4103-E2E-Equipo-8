class PageObj {
  constructor(cy) {
    this.cy = cy;
  }

  async publishPage() {
    this.cy.contains("button", "Publish").click({force: true});
    this.cy.wait(250);
    this.cy.contains("button", "Continue, final review").click({force: true});
    this.cy.wait(250);
    this.cy.contains("button", "Publish page, right now").click({force: true});
  }

  async clickOnSettingsButton() {
    this.cy.get('button[title="Settings"]').should("be.visible").click();
    this.cy.wait(100);
  }

  async setPublishDate(value) {
    this.clickOnSettingsButton();
    this.cy
      .get("input[data-test-date-time-picker-date-input]")
      .should("be.visible")
      .clear()
      .type(value, { force: true });
    this.cy.focused().type("{enter}", { force: true });
  }

  async validatePublishDate(value) {
    this.clickOnSettingsButton();
    cy.get("input[data-test-date-time-picker-date-input]").should(
      "have.value",
      value
    );
  }

  async setAccessType(value) {
    this.clickOnSettingsButton();
    this.cy
      .get('select[data-test-select="post-visibility"]')
      .should("be.visible")
      .select(value);
    this.clickOnSettingsButton();
    this.clickOnUpdateButton();
  }

  async validateAccessType(value) {
    this.clickOnSettingsButton();
    cy.get('select[data-test-select="post-visibility"]').should(
      "have.value",
      value
    );
  }

  async setURL(value) {
    this.clickOnSettingsButton();
    this.cy
      .get("#url")
      .should("be.visible")
      .clear()
      .type(value, { force: true });
    this.clickOnUpdateButton();
  }

  async validateURL(value) {
    this.clickOnSettingsButton();
    cy.get("#url").should("have.value", value.toLowerCase());
  }

  async visit() {
    cy.fixture("properties").then((data) => {
      this.cy.visit(data.url + "#/pages");
      this.cy.wait(2000);
    });
  }

  async visitPagesAndFindPageByTitle(title, click) {
    cy.fixture("properties").then((data) => {
      this.cy.visit(data.url + "#/pages");
      this.cy.wait(3000);
      this.findPageByTitleAndClick(title, click);
    });
  }

  async findPageByTitleAndClick(title, click) {
    const element = this.cy.contains("h3", title).should("exist");
    if (click === true) {
      element.click({force:true});
    }
  }

  async closePublishPopup() {
    this.cy
      .get('button[data-test-button="close-publish-flow"]')
      .should("be.visible")
      .click();
  }

  async goToPageAndCreate() {
    this.cy.get('a[href="#/pages/"]').click();
    this.cy.contains("New page").click();
  }

  async pageTitle(titulo) {
    this.cy.get(".gh-editor-title").should("be.visible").type(titulo);
  }

  async setTitleAndTab(title) {
    this.cy.get(".gh-editor-title").should("be.visible").type(title);
    this.cy.get("body").click();
  }

  async expandMetaDataMenu() {
    this.cy.get('[data-test-button="meta-data"]').click();
    this.cy.wait(200);
  }

  async setMetaTitle(value) {
    this.cy.get("#meta-title").type(value);
    this.cy.wait(200);
  }

  async setMetaDescription(value) {
    this.cy.get("#meta-description").type(value);
    this.cy.wait(200);
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

  async addTextToPage(texto) {
    cy.get('p[data-koenig-dnd-droppable="true"]')
      .eq(0)
      .type(texto)
      .type("{enter}");
  }

  async addBookmarkContent() {
    cy.get('[data-testid="bookmark-url"]').focus();

    cy.get('[data-testid="bookmark-url"]').type("{downarrow}").type("{enter}");

    // The admin triggers an error but is controlled
    this.cy.wait(5000);
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

  async setContentToHTML(contenido) {
    this.cy.get('div[data-language="html"]').type(contenido);
  }

  async setContentToButton(contenido) {
    cy.get('[data-testid="button-input-text"]').type(contenido);
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

  async setContentToLink(enlace) {
    this.cy
      .get('input[data-testid="embed-url"]')
      .clear()
      .type(enlace)
      .type("{enter}");
    //Validación
    this.cy.get("div.absolute.inset-0.z-50.mt-0").should("be.visible");
  }

  async setContentToInvalidLink(enlace) {
    this.cy
      .get('input[data-testid="embed-url"]')
      .clear()
      .type(enlace)
      .type("{enter}");
    //Validación
    cy.get('[data-testid="embed-url-error-message"]', {
      timeout: 10000,
    }).should("contain", "Oops, that link didn't work.");
  }

  async clickOnUpdateButton() {
    this.cy
      .get('button[data-test-button="publish-save"]')
      .click({ multiple: true, force: true });
  }
}

module.exports = PageObj;
