class TagPage {
  constructor(cy) {
    this.cy = cy;
  }

  async clickOnTagMenu() {
    this.cy.get('a[href="#/tags/"][data-test-nav="tags"]').click();
    this.cy.wait(500);
  }

  async clickOnNewTag() {
    this.cy.get('a[href="#/tags/new/"].gh-btn-primary').click();
    this.cy.wait(500);
  }

  async clickOnSaveTag() {
    this.cy
      .get('button[type="button"][data-test-button="save"].gh-btn-primary')
      .click();
    this.cy.wait(500);

    this.cy.get("body").then((body) => {
      if (
        body.find('button[type="button"][data-test-leave-button]').length > 0
      ) {
        cy.get('button[type="button"][data-test-leave-button]').click();
        this.cy.wait(500);
      }
    });
  }

  async clickOnExpandMetadataForm() {
    this.cy.get(".gh-btn-expand").eq(0).click();
    this.cy.wait(500);
  }

  async clickOnExpandXForm() {
    this.cy.get(".gh-btn-expand").eq(1).click();
    this.cy.wait(500);
  }

  async clickOnExpandFacebookCardForm() {
    this.cy.get(".gh-btn-expand").eq(2).click();
    this.cy.wait(500);
  }

  async setTagName(tagName) {
    this.cy.get("#tag-name").type(tagName);
    this.cy.wait(500);
  }

  async setTagColor(tagColor) {
    this.cy.get('input[data-test-input="accentColor"]').type(tagColor);
    this.cy.wait(500);
  }

  async setTagDescription(tagDescription) {
    this.cy.get("#tag-description").type(tagDescription);
    this.cy.wait(500);
  }

  async setTagImage(path) {
    this.cy.get('input[type="file"]').attachFile({ filePath: path });
    this.cy.wait(500);
  }

  async setTagMetadataValues(title, description, url) {
    this.cy.get("#meta-title").type(title);
    this.cy.wait(500);

    this.cy.get("#meta-description").type(description);
    this.cy.wait(500);

    this.cy.get("#canonical-url").type(url);
    this.cy.wait(500);
  }

  async setXCardValues(pathImg, title, description) {
    this.cy.get(".gh-twitter-settings").within(() => {
      this.cy.get('input[type="file"]').attachFile({ filePath: pathImg });
      this.cy.wait(500);

      this.cy.get("#twitter-title").type(title);
      this.cy.wait(500);

      this.cy.get("#twitter-description").type(description);
      this.cy.wait(500);
    });
  }

  async setFacebookCardValues(pathImg, title, description) {
    this.cy.get(".gh-og-settings").within(() => {
      this.cy.get('input[type="file"]').attachFile({ filePath: pathImg });
      this.cy.wait(500);

      this.cy.get("#og-title").type(title);
      this.cy.wait(500);

      this.cy.get("#og-description").type(description);
      this.cy.wait(500);
    });
  }

  async findTagNameCreated(tagName) {
    this.cy.get("h3[data-test-tag-name]").contains(tagName);
    this.cy.wait(500);
  }
}

module.exports = TagPage;
