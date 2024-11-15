class TagPage {
  constructor(cy) {
    this.cy = cy;
  }

  async clickOnTagMenu(folderName) {
    this.cy.get('a[href="#/tags/"][data-test-nav="tags"]').click();
    this.takeScreenshot(folderName, "click-on-tag-menu");
    this.cy.wait(2000);
  }

  async clickOnNewTag(folderName) {
    this.cy.get('a[href="#/tags/new/"].gh-btn-primary').click();
    this.takeScreenshot(folderName, "click-on-new-tag");
    this.cy.wait(2000);
  }

  async clickOnSaveTag(folderName) {
    this.cy
      .get('button[type="button"][data-test-button="save"].gh-btn-primary')
      .click();
    this.takeScreenshot(folderName, "click-on-save-tag-1");
    this.cy.wait(4000);

    this.cy.get("body").then((body) => {
      if (
        body.find('button[type="button"][data-test-leave-button]').length > 0
      ) {
        cy.get('button[type="button"][data-test-leave-button]').click();
        this.cy.wait(2000);
      }
      this.takeScreenshot(folderName, "click-on-save-tag-2");
    });
  }

  async clickOnExpandMetadataForm(folderName) {
    this.cy.get(".gh-btn-expand").eq(0).click();
    this.cy.wait(2000);
    this.takeScreenshot(folderName, "click-on-expand-metadata-form");
  }

  async clickOnExpandXForm(folderName) {
    this.cy.get(".gh-btn-expand").eq(1).click();
    this.cy.wait(2000);
    this.takeScreenshot(folderName, "click-on-expand-x-form");
  }

  async clickOnExpandFacebookCardForm(folderName) {
    this.cy.get(".gh-btn-expand").eq(2).click();
    this.takeScreenshot(folderName, "click-on-expand-facebook-card-form");
    this.cy.wait(2000);
  }

  async setTagName(tagName, folderName) {
    this.cy.get("#tag-name").type(tagName);
    this.takeScreenshot(folderName, "set-tag-name");
    this.cy.wait(2000);
  }

  async setTagColor(tagColor, folderName) {
    this.cy.get('input[data-test-input="accentColor"]').type(tagColor);
    this.takeScreenshot(folderName, "set-tag-color");
    this.cy.wait(2000);
  }

  async setTagDescription(tagDescription, folderName) {
    this.cy.get("#tag-description").type(tagDescription);
    this.takeScreenshot(folderName, "set-tag-description");
    this.cy.wait(2000);
  }

  async setTagImage(path, folderName) {
    this.cy.get('input[type="file"]').attachFile({ filePath: path });
    this.takeScreenshot(folderName, "set-tag-image");
    this.cy.wait(2000);
  }

  async setTagMetadataValues(title, description, url, folderName) {
    this.cy.get("#meta-title").type(title);
    this.cy.wait(2000);

    this.cy.get("#meta-description").type(description);
    this.cy.wait(2000);

    this.cy.get("#canonical-url").type(url);
    this.takeScreenshot(folderName, "set-tag-metadata-values");
    this.cy.wait(2000);
  }

  async setXCardValues(pathImg, title, description, folderName) {
    this.cy.get(".gh-twitter-settings").within(() => {
      this.cy.get('input[type="file"]').attachFile({ filePath: pathImg });
      this.cy.wait(2000);

      this.cy.get("#twitter-title").type(title);
      this.cy.wait(2000);

      this.cy.get("#twitter-description").type(description);
      this.takeScreenshot(folderName, "set-x-card-values");
      this.cy.wait(2000);
    });
  }

  async setFacebookCardValues(pathImg, title, description, folderName) {
    this.cy.get(".gh-og-settings").within(() => {
      this.cy.get('input[type="file"]').attachFile({ filePath: pathImg });
      this.cy.wait(2000);

      this.cy.get("#og-title").type(title);
      this.cy.wait(2000);

      this.cy.get("#og-description").type(description);
      this.takeScreenshot(folderName, "set-facebook-card-values");
      this.cy.wait(2000);
    });
  }

  async findTagNameCreated(tagName, folderName) {
    this.cy.get("h3[data-test-tag-name]").contains(tagName);
    this.takeScreenshot(folderName, "find-tag-name-created");
    this.cy.wait(3000);
  }

  async takeScreenshot(folderName, screenshotName) {
    cy.screenshot(`${folderName}/${screenshotName}`, {
      capture: "fullPage",
    });
  }
}

module.exports = TagPage;
