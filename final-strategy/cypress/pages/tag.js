const tagsDataAPriori = require("../data-a-priori/tag.json");

class TagPage {
  constructor(cy) {
    this.cy = cy;
  }

  async clickOnTagMenu() {
    this.cy.get('a[href="#/tags/"][data-test-nav="tags"]').click();
  }

  async clickOnNewTag() {
    this.cy.get('a[href="#/tags/new/"].gh-btn-primary').click();
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
    this.cy.get('input[data-test-input="accentColor"]').type(tagColor.replace("#",""));
    this.cy.wait(500);
  }

  async setTagDescription(tagDescription) {
    if (tagDescription !== null && tagDescription.trim() !== "") {
      this.cy.get("#tag-description").type(tagDescription);
      this.cy.wait(500);
    }
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

  async setXCardValues(title, description) {
    this.cy.get(".gh-twitter-settings").within(() => {
      if (title !== null && title.trim() !== "") {
        this.cy.get("#twitter-title").type(title);
        this.cy.wait(500);
      }

      if (description !== null && description.trim() !== "") {
        this.cy.get("#twitter-description").type(description);
        this.cy.wait(500);
      }
    });
  }

  async setFacebookCardValues(title, description) {
    this.cy.get("#og-title").type(title);
    this.cy.wait(500);

    this.cy.get("#og-description").type(description);
    this.cy.wait(500);
  }

  async findTagNameCreated(tagName) {
    this.cy.get(".gh-main ").scrollTo('bottom',{ensureScrollable: false});
    this.cy.wait(500);
    this.cy.get("h3[data-test-tag-name]").contains(tagName);
    this.cy.wait(500);
  }

  async findInputError() {
    this.cy.get("span.error").should('exist');
    this.cy.wait(500);
  }

  async findButtonError() {
    this.cy.get('span[data-test-task-button-state="failure"]').should('exist');
    this.cy.wait(500);
  }

  getAPrioriData(scenarioId) {
    const result = tagsDataAPriori.filter(d => d.id === scenarioId);
    if (result.length > 0) {
      return result[0];
    }
    throw new Error("Scenario not found.");
  }

  getPseudoRandomData(scenarioId) {
    return this.cy.request({
      method: 'GET',
      url: `https://my.api.mockaroo.com/${scenarioId.toLowerCase()}.json?key=c2b603b0`,
      headers: {
        'Content-Type': 'application/json'
      },
    }).then((response) => {
      expect(response.status).to.eq(200);
      return response.body;
    });
  }
}

module.exports = TagPage;
