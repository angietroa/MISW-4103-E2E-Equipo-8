class TagPage {
  constructor(cy) {
    this.cy = cy;
  }

  async clickOnTagMenu() {
    this.cy.get('a[href="#/tags/"][data-test-nav="tags"]').click();
    this.cy.wait(2000);
  }

  async clickOnNewTag() {
    this.cy.get('a[href="#/tags/new/"]').click();
    this.cy.wait(2000);
  }

  async clickOnSaveTag() {
    this.cy.get('button[type="button"][data-test-button="save"]').click();
    this.cy.wait(4000);
  }

  async setTagName(tagName) {
    this.cy.get('#tag-name').type(tagName);
    this.cy.wait(2000);
  }

  async findTagNameCreated(tagName) {
    this.cy.get('h3[data-test-tag-name]').contains(tagName);
    this.cy.wait(3000);
  }
}

module.exports = TagPage;
