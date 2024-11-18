class PageObj {
  constructor(driver) {
    this.driver = driver;
  }

  async clickOnPage() {
    const element = await this.driver.$('a[href="#/pages/"]');
    return await element.click();
  }

  async clickOnNewPage() {
    const element = await this.driver.$('a[href="#/editor/page/"]');
    return await element.click();
  }

  async getPageTitle() {
    const element = await this.driver.$(".gh-editor-title");
    return element;
  }

  async setTitle(element, title) {
    return await element.setValue(title);
  }

  async clickOnTextAreaPage() {
    const element = await this.driver.$('div[data-koenig-dnd-container="true"]');
    await element.click();
  }

  async clickOnAddToolMenu() {
    const element = await this.driver.$('button[aria-label="Add a card"]');
    await element.click();
  }

  async clickOnElementTool(menuItem) {
    const button = await this.driver.$(`button[data-kg-card-menu-item="${menuItem}"]`);
    if (await button.isExisting()) {
      await button.click({force:true});
    } else {
      const buttonGhost45 = await this.driver.$(`div[title="${menuItem}"]`);
      await buttonGhost45.click({force:true});
    }
  }

  async getMarkdownElement() {
    const element = await this.driver.$(".CodeMirror");
    return element;
  }

  async setMarkdownText(element, text) {
    return await element.setValue(text);
  }

  async clickToSaveImages() {
    const button = await this.driver.$("button.group");
    await button.click();
  }

  async uploadImageFiles(filePaths) {
    const fileInput = await this.driver.$('input[name="image-input"]');

    for (const filePath of filePaths) {
      await fileInput.setValue(filePath);
    }
  }

  async uploadFiles(filePath) {
    const fileInput = await this.driver.$('input[name="file-input"]');
    await fileInput.waitForExist({timeout:30000});
    await fileInput.setValue(filePath);
  }

  async validateFileIsUploaded() {
    const fileTitleElement = await this.driver.$(
      '[data-kg-file-card="fileTitle"]'
    );
    await fileTitleElement.waitForDisplayed();

    await fileTitleElement.getValue();

    await fileTitleElement.isDisplayed();
  }

  async uploadEmbedSpotify(link) {
    const embedInput = await this.driver.$('input[data-testid="embed-url"]');
    await embedInput.setValue(link);
    await embedInput.keys("Enter");
  }

  async validateEmbed() {
    const embedElement = await this.driver.$("div.absolute.inset-0.z-50.mt-0");
    await embedElement.waitForDisplayed();
    await embedElement.isDisplayed();
  }

  async selectBookmark() {
    const bookmarkSelect = await this.driver.$(
      '[data-testid="bookmark-url-dropdown"]'
    );
    await bookmarkSelect.keys("Enter");
  }

  async validateBookmark() {
    const bookmarkElement = await this.driver.$(
      '[data-testid="bookmark-url-error-message"]'
    );
    await bookmarkElement.isDisplayed();
  }

  async publishPageButton() {
    const button = await this.driver.$('[data-test-button="publish-flow"]');
    await button.click();
  }

  async publishPageButtonGhost45() {
    const buttonMenu = await this.driver.$(".gh-publishmenu");
    await buttonMenu.click();
    const button = await this.driver.$('.gh-publishmenu-button');
    await button.waitForDisplayed();
    await button.click();
    await this.clickOnPage();
  }

  async confirmPageButton() {
    const button = await this.driver.$('[data-test-button="continue"]');
    await button.click();
  }

  async confirmPublishButton() {
    const button = await this.driver.$('[data-test-button="confirm-publish"]');
    await button.click();
  }

  async performPublishFlow() {
    await this.publishPageButton();
    await this.confirmPageButton();
    await this.confirmPublishButton();
  }

  async performPublishFlowGhost45() {
    await this.publishPageButtonGhost45();
  }

  async selectBookmarkToElement() {
    await this.selectBookmark();
    await this.validateBookmark();
  }

  async uploadImagesToGallery(filePaths) {
    await this.clickToSaveImages();
    await this.uploadImageFiles(filePaths);
  }

  async uploadFileToElement(filePath) {
    await this.uploadFiles(filePath);
    await this.validateFileIsUploaded();
  }

  async uploadEmbedSpotifyToElement(link) {
    await this.uploadEmbedSpotify(link);
    await this.validateEmbed();
  }

  async closePopup() {
    const button = await this.driver.$('button[data-test-button="close-publish-flow"]');
    await button.waitForExist();
    await button.click();
  }

  async clickOnPageItem(value) {
    const button = await this.driver.$('h3='+value);
    await button.waitForExist();
    await button.click();
  }

  async clickOnUpdateButton() {
    const button = await this.driver.$('button[data-test-button="publish-save"]');
    await button.waitForClickable({timeout:10000});
    await button.click();
    this.clickOnPage();
  }

  async checkIfPageExists(value) {
    const h3Element = await this.driver.$("//h3[contains(text(), '" + value + "')]");
    return true;
  }

  async setPublishDate(value) {
    const button = await this.driver.$('button[data-test-psm-trigger]');
    if (await button.isExisting()) {
      await button.waitForClickable({timeout:10000});
      await button.click();
      const input = await this.driver.$('input[data-test-date-time-picker-date-input]');
      await input.waitForExist();
      input.setValue(value);
    } else {
      const buttonGhost45 = await this.driver.$('button[title="Settings"]');
      await buttonGhost45.waitForClickable({timeout:10000});
      await buttonGhost45.click();
      const input = await this.driver.$('input[placeholder="YYYY-MM-DD"]');
      await input.waitForExist();
      input.setValue(value);
    }
  }

  async setPageAccess(value) {
    const button = await this.driver.$('button[data-test-psm-trigger]');
    await button.waitForClickable({timeout:10000});
    await button.click();
    const select = await this.driver.$('select[data-test-select="post-visibility"]');
    await select.waitForExist();
    select.setValue(value);
  }

  async setURL(value) {
    const button = await this.driver.$('button[data-test-psm-trigger]');
    if (await button.isExisting()) {
      await button.waitForClickable({timeout:10000});
      await button.click();
      const input = await this.driver.$('#url');
      await input.waitForExist();
      input.setValue(value);
    } else {
      const buttonGhost45 = await this.driver.$('button[title="Settings"]');
      await buttonGhost45.waitForClickable({timeout:10000});
      await buttonGhost45.click();
      const input = await this.driver.$('#url');
      await input.waitForExist();
      input.setValue(value);
    }
  }

}

module.exports = PageObj;
