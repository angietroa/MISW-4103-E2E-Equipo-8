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

  async setPublishDate(value, folder) {
    this.clickOnSettingsButton();
    this.cy
      .get("input[data-test-date-time-picker-date-input]")
      .should("be.visible")
      .clear()
      .type(value, { force: true });
    this.cy.focused().type("{enter}", { force: true });
    this.takeScreenshot(folder, "set-publish-date");
  }

  async validatePublishDate(value) {
    this.clickOnSettingsButton();
    cy.get("input[data-test-date-time-picker-date-input]").should(
      "have.value",
      value
    );
  }

  async setAccessType(value, folder) {
    this.clickOnSettingsButton();
    this.cy
      .get('select[data-test-select="post-visibility"]')
      .should("be.visible")
      .select(value);
    this.clickOnSettingsButton();
    this.clickOnUpdateButton(folder);
    this.takeScreenshot(folder, "set-access-type");
  }

  async validateAccessType(value, folder) {
    this.clickOnSettingsButton();
    cy.get('select[data-test-select="post-visibility"]').should(
      "have.value",
      value
    );
    this.takeScreenshot(folder, "validate-access-type");
  }

  async setURL(value, folder) {
    this.clickOnSettingsButton();
    this.cy
      .get("#url")
      .should("be.visible")
      .clear()
      .type(value, { force: true });
    this.clickOnUpdateButton(folder);
    this.takeScreenshot(folder, "set-url");
  }

  async validateURL(value, folder) {
    this.clickOnSettingsButton();
    cy.get("#url").should("have.value", value.toLowerCase());
    this.takeScreenshot(folder, "validate-url");
  }

  async visitPagesAndFindPageByTitle(title, click, folder) {
    cy.fixture("properties").then((data) => {
      this.cy.visit(data.url + "#/pages");
      this.cy.wait(3000);
      this.findPageByTitleAndClick(title, click, folder);
    });
    this.takeScreenshot(folder, "visit-pages-and-find-page-by-title");
  }

  async findPageByTitleAndClick(title, click, folder) {
    const element = this.cy.contains("h3", title).should("exist");
    if (click === true) {
      element.click();
    }
    this.takeScreenshot(folder, "find-page-by-title");
  }

  async closePublishPopup(folder) {
    this.cy
      .get('button[data-test-button="close-publish-flow"]')
      .should("be.visible")
      .click();
    this.takeScreenshot(folder, "close-publish-popup");
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

  async setTitleAndTab(title, folder) {
    this.cy.get(".gh-editor-title").should("be.visible").type(title);
    this.cy.get("body").click();
    this.takeScreenshot(folder, "set-title-and-tab");
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

  async addBookmarkContent(folder) {
    cy.get('[data-testid="bookmark-url"]').focus();

    cy.get('[data-testid="bookmark-url"]').type("{downarrow}").type("{enter}");
    this.takeScreenshot(folder, "add-bookmark-content");
    // The admin triggers an error but is controlled
    this.cy.wait(5000);
  }

  async setContentToMarkdown(contenido, saveFolder) {
    this.cy.get(".CodeMirror").type(contenido);
    this.takeScreenshot(saveFolder, "set-content-to-markdown");
  }

  async setContentToGallery(archivos, folder) {
    this.cy.contains("Click to select up to 9 images").click();

    this.cy
      .get('input[name="image-input"]')
      .selectFile(archivos, { force: true });
    this.takeScreenshot(folder, "set-content-to-gallery");
  }

  async setContentToFile(archivo, folder) {
    this.cy.contains("Click to upload a file").click();

    this.cy
      .get('input[name="file-input"]')
      .selectFile(archivo, { force: true });

    this.cy
      .get('[data-kg-file-card="fileTitle"]')
      .should("have.value", "image_page")
      .and("be.visible");
    this.takeScreenshot(folder, "set-content-to-file");
  }

  async setContentToSpotify(enlace, folder) {
    this.cy
      .get('input[data-testid="embed-url"]')
      .clear()
      .type(enlace)
      .type("{enter}");
    //Validación
    this.cy.get("div.absolute.inset-0.z-50.mt-0").should("be.visible");
    this.takeScreenshot(folder, "set-content-to-spotify");
  }

  async clickOnUpdateButton(folder) {
    this.cy
      .get('button[data-test-button="publish-save"]')
      .click({ multiple: true, force: true });
    this.takeScreenshot(folder, "click-on-update-button");
  }

  async takeScreenshot(folderName, screenshotName) {
    cy.screenshot(`${folderName}/${screenshotName}`, {
      capture: "fullPage",
    });
  }
}

module.exports = PageObj;
