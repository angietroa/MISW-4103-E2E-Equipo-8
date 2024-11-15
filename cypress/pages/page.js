class PageObj {
  constructor(cy) {
    this.cy = cy;
  }

  async publishPage(folder) {
    this.cy.contains("button", "Publish").click();
    this.cy.wait(1500);
    this.takeScreenshot(folder, "publish-page", true);
    this.cy.wait(1500);
    this.cy.contains("button", "Continue, final review").click();
    this.cy.wait(1500);
    this.takeScreenshot(folder, "final-review", true);
    this.cy.wait(1500);
    this.cy.contains("button", "Publish page, right now").click();
    this.cy.wait(1500);
    this.takeScreenshot(folder, "publish-page-now");
    this.cy.wait(1500);
  }

  async clickOnSettingsButton() {
    this.cy.get('button[title="Settings"]').should("be.visible").click();
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
      element.click();
    }
  }

  async closePublishPopup() {
    this.cy
      .get('button[data-test-button="close-publish-flow"]')
      .should("be.visible")
      .click();
  }

  async goToPageAndCreate(folder) {
    this.cy.get('a[href="#/pages/"]').click();
    this.cy.contains("New page").click();
    this.takeScreenshot(folder, "go-to-page-and-create");
  }

  async pageTitle(titulo, folder) {
    this.cy.get(".gh-editor-title").should("be.visible").type(titulo);
    this.takeScreenshot(folder, "set-title-to-page");
  }

  async setTitleAndTab(title) {
    this.cy.get(".gh-editor-title").should("be.visible").type(title);
    this.cy.get("body").click();
  }

  async addPageElement(elemento, folder) {
    this.cy
      .get('.koenig-react-editor .kg-prose[contenteditable="true"]')
      .should("be.visible")
      .first()
      .click();

    this.takeScreenshot(folder, "select-editable-area");

    this.cy.get('button[aria-label="Add a card"]').click();

    this.takeScreenshot(folder, "select-toolbox");

    this.cy.contains(elemento).click();

    this.takeScreenshot(folder, "select-tool");
  }

  async addBookmarkContent() {
    cy.get('[data-testid="bookmark-url"]').focus();

    cy.get('[data-testid="bookmark-url"]').type("{downarrow}").type("{enter}");

    // The admin triggers an error but is controlled
    this.cy.wait(5000);
  }

  async setContentToMarkdown(contenido, saveFolder) {
    this.cy.get(".CodeMirror").type(contenido);
    this.takeScreenshot(saveFolder, "set-content-to-markdown");
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

  async clickOnUpdateButton() {
    this.cy
      .get('button[data-test-button="publish-save"]')
      .click({ multiple: true, force: true });
  }

  async takeScreenshot(folderName, screenshotName) {
    this.cy.task("createFolder", folderName);
    this.cy.screenshot(`${folderName}/${screenshotName}`, {
      capture: "fullPage",
    });
  }
}

module.exports = PageObj;
