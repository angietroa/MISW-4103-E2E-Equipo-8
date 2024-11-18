class AddPostContent {
  constructor(driver) {
    this.driver = driver;
    this.addCardButton = '//button[@aria-label="Add a card"]';
    this.addCardButtonGhost45 = '.koenig-plus-menu-button';
    this.imageButton = '//button[@data-kg-card-menu-item="Image"]';
    this.imageButtonGhost45 = 'div[title="Image"]';
    this.htmlButton = '//button[@data-kg-card-menu-item="HTML"]';
    this.htmlButtonGhost45 = 'div[title="HTML"]';
    this.youtubeButton = '//button[@data-kg-card-menu-item="YouTube"]';
    this.addButton = '//button[@data-kg-card-menu-item="Button"]';
  }

  async addImageGhost45(imagePath) {
    await this.driver.keys("Enter");
    const addCardButton = await this.driver.$(this.addCardButtonGhost45);
    await addCardButton.waitForDisplayed();
    await addCardButton.click({force:true});
    const imageButton = await this.driver.$(this.imageButtonGhost45);
    await imageButton.waitForDisplayed();
    await imageButton.click({force:true});
    const fileInput = await this.driver.$('input[type="file"]');
    await fileInput.waitForExist({timeout:10000});
    await fileInput.setValue(imagePath);
    await this.driver.keys("Enter");
  }

  async addImage(imagePath) {
    await this.driver.keys("Enter");
    const addCardButton = await this.driver.$(this.addCardButton);
    await addCardButton.click();
    const imageButton = await this.driver.$(this.imageButton);
    await imageButton.click();
    const fileInput = await this.driver.$('input[name="image-input"]');
    await fileInput.setValue(imagePath);
    await this.driver.keys("Enter");
  }

  async addHTML(htmlContent) {
    await this.driver.keys("Enter");
    const addCardButton = await this.driver.$(this.addCardButton);
    await addCardButton.click();
    const htmlButton = await this.driver.$(this.htmlButton);
    await htmlButton.click();
    const htmlInput = await this.driver.$('div[data-language="html"]');
    await htmlInput.setValue(htmlContent);
    await this.driver.keys("Enter");
  }

  async addHTMLGhost45(htmlContent) {
    await this.driver.keys("Enter");
    const addCardButton = await this.driver.$(this.addCardButtonGhost45);
    await addCardButton.waitForDisplayed();
    await addCardButton.click({force:true});
    const htmlButton = await this.driver.$(this.htmlButtonGhost45);
    await htmlButton.waitForDisplayed();
    await htmlButton.click({force:true});
    const htmlInput = await this.driver.$('.CodeMirror-scroll');
    await htmlInput.waitForExist();
    await htmlInput.setValue(htmlContent);
    await this.driver.keys("Enter");
  }

  async embedYouTube(url) {
    await this.driver.keys("Enter");
    const addCardButton = await this.driver.$(this.addCardButton);
    await addCardButton.click();
    const youtubeButton = await this.driver.$(this.youtubeButton);
    await youtubeButton.click();
    const youtubeInput = await this.driver.$('[data-testid="embed-url"]');
    await youtubeInput.setValue(url);
    await this.driver.keys("Enter");
  }

  async addCustomButton(buttonText) {
    await this.driver.keys("Enter");
    const addCardButton = await this.driver.$(this.addCardButton);
    await addCardButton.click();
    const addButton = await this.driver.$(this.addButton);
    await addButton.click();
    const buttonInput = await this.driver.$(
      'input[data-testid="button-input-text"]'
    );
    await buttonInput.setValue(buttonText);
    await this.driver.keys("Enter");
  }
}

module.exports = AddPostContent;
