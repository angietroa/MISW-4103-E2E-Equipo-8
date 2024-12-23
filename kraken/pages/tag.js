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

  async clickOnExpandMetadataForm() {
    const expandButtons = await this.driver.$$('.gh-btn-expand');
    return await expandButtons[0].click();
  }

  async clickOnExpandXCardForm() {
    const expandButtons = await this.driver.$$('.gh-btn-expand');
    return await expandButtons[1].click();
  }

  async clickOnExpandFacebookCardForm() {
    const expandButtons = await this.driver.$$('.gh-btn-expand');
    return await expandButtons[2].click();
  }

  async clickOnSaveTag() {
    const element = await this.driver.$('button[type="button"][data-test-button="save"]');
    if (await element.isExisting()) {
      return await element.click();
    } else {
      return await this.driver.$("button=Save").click();
    }
  }

  async setTagName(tagName) {
    const element = await this.driver.$('#tag-name');
    return await element.setValue(tagName);
  }

  async setTagColor(tagColor) {
    const element = await this.driver.$('input[data-test-input="accentColor"]');
    if (await element.isExisting()) {
      return await element.setValue(tagColor);
    } else {
      return await this.driver.$('input[name="accent-color"]');
    }
  }

  async setTagDescription(tagDescription) {
    const element = await this.driver.$('#tag-description');
    return await element.setValue(tagDescription);
  }

  async setTagImage(path) {
    const element = await this.driver.$('input[type="file"]');
    return await element.setValue(path);
  }

  async setTagMetadataValues(title, description, url) {
    const titleEl = await this.driver.$('#meta-title');
    await titleEl.setValue(title);

    const descriptionEl = await this.driver.$('#meta-description');
    await descriptionEl.setValue(description);

    const urlEl = await this.driver.$('#canonical-url');
    return await urlEl.setValue(url);
  }

  async setXCardValues(pathImg, title, description) {
    const fileEl = await this.driver.$('.gh-twitter-settings').$('input[type="file"]');
    await fileEl.setValue(pathImg);

    const titleEl = await this.driver.$('#twitter-title');
    await titleEl.setValue(title);

    const descriptionEl = await this.driver.$('#twitter-description');
    return await descriptionEl.setValue(description);
  }

  async setFacebookCardValues(pathImg, title, description) {
    const fileEl = await this.driver.$('.gh-og-settings').$('input[type="file"]');
    await fileEl.setValue(pathImg);

    const titleEl = await this.driver.$('#og-title');
    await titleEl.setValue(title);

    const descriptionEl = await this.driver.$('#og-description');
    return await descriptionEl.setValue(description);
  }

  async findTagNameCreated(tagName) {
    const tagNameExists = (await this.driver.$$('h3'))
      .some(async (element) => await element.getText() === tagName);

    if (!tagNameExists) throw new Error(`Tag ${tagName} was not found`);
    return tagNameExists;
  }
}

module.exports = TagPage;
