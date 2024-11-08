class TagPage {
  constructor(driver) {
    this.driver = driver;
  }

  async clickOnTagMenu() {
    const element = await this.driver.$('a[href="#/tags/"]');
    return await element.click();
  }

  async clickOnNewTag() {
    const element = await this.driver.$('a[href="#/tags/new/"]');
    return await element.click();
  }

  async getTagNameElement() {
    const element = await this.driver.$('#tag-name');
    return element;
  }

  async setTagNameElement(element, tagName) {
    return await element.setValue(tagName);
  }

  async clickOnSaveTag() {
    const element = await this.driver.$('button[type="button"][data-test-button="save"]');
    return await element.click();
  }

  async findTagNameCreated(tagName) {
    const tagNameExists = (await this.driver.$$('h3[data-test-tag-name]'))
      .some(async (element) => await element.getText() === tagName);

    if(!tagNameExists) throw new Error(`Tag ${tagName} was not found`);
    return tagNameExists;
  }
}

module.exports = TagPage;
