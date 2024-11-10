class AddPostContent {
  constructor(driver) {
    this.driver = driver;
    this.addCardButton = '//button[@aria-label="Add a card"]';
    this.imageButton = '//button[@data-kg-card-menu-item="Image"]';
    this.htmlButton = '//button[@data-kg-card-menu-item="HTML"]';
    this.youtubeButton = '//button[@data-kg-card-menu-item="YouTube"]';
    this.addButton = '//button[@data-kg-card-menu-item="Button"]';
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
