class PostPage {
  constructor(driver) {
    this.driver = driver;
    this.newPostButton = 'a[href="#/editor/post/"]';
    this.postsLink = 'a[href="#/posts/"]';
    this.textarea = "textarea";
    this.publishButton = '//button[@data-test-button="publish-flow"]';
    this.continueButton = '//button[@data-test-button="continue"]';
    this.finalPublishButton = '//button[@data-test-button="confirm-publish"]';
    this.closeButton = '//button[@data-test-button="close-publish-flow"]';
    this.paragraphSelector = '//p[dir="ltr"]';
    this.imageSelector = 'img[data-testid="image-card-populated"]';
    this.iframeSelector = 'iframe[data-testid="embed-iframe"]';
    this.title = "";
    this.randomParagraph = 0;
  }

  async navigateToPosts() {
    const element = await this.driver.$(this.postsLink);
    await element.waitForDisplayed({ timeout: 5000 });
    await element.click();
  }

  async createNewPost() {
    const element = await this.driver.$(this.newPostButton);
    await element.waitForDisplayed({ timeout: 5000 });
    await element.click();
  }

  async generateTitlePost(baseText) {
    return `${baseText} ${Math.floor(Math.random() * 1000)}`;
  }

  async createTitlePost(title) {
    const element = await this.driver.$(this.textarea);

    await element.waitForExist({ timeout: 5000 });
    await element.waitForEnabled({ timeout: 5000 });

    await element.setValue(title);
    this.title = title;
  }

  async addRandomParagraphs() {
    this.randomParagraph = () => Math.random().toString(36).substring(2, 50);
    const times = Math.floor(Math.random() * 6) + 1;

    for (let i = 0; i < times; i++) {
      const element = await this.driver.$(this.textarea);
      await element.setValue(`\n${this.randomParagraph()}`);
    }
  }

  async publishPost() {
    const publish = await this.driver.$(this.publishButton);
    await publish.waitForDisplayed({ timeout: 5000 });
    await publish.click();

    const continueBtn = await this.driver.$(this.continueButton);
    await continueBtn.waitForDisplayed({ timeout: 5000 });
    await continueBtn.click();

    const finalPublish = await this.driver.$(this.finalPublishButton);
    await finalPublish.waitForDisplayed({ timeout: 5000 });
    await finalPublish.click();

    const closeBtn = await this.driver.$(this.closeButton);
    await closeBtn.waitForDisplayed({ timeout: 5000 });
    await closeBtn.click();
  }

  async verifyPostExists(title) {
    const elements = await this.driver.$$("a");
    for (let element of elements) {
      const text = (await element.getText()).trim();
      if (text === title.trim()) {
        await element.waitForDisplayed({ timeout: 5000 });
        await element.scrollIntoView();
        await this.driver.pause(500);
        await element.click();
        return;
      }
    }
    throw new Error(`No se encontró el enlace con el título: ${title}`);
  }

  getPostTitle() {
    return this.title;
  }

  async findPostNameCreated(postName) {
    const postNameExists = (await this.driver.$$("h3")).some(
      async (element) => (await element.getText()) === postName
    );

    if (!postNameExists) throw new Error(`Post ${postName} was not found`);
    return postNameExists;
  }
}

module.exports = PostPage;
