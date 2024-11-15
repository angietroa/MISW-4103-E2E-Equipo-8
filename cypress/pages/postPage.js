class PostPage {
  constructor() {
    this.newPostButton = 'a:contains("New post")';
    this.textarea = "textarea";
    this.publishButton = 'button:contains("Publish")';
    this.continueButton = 'button:contains("Continue, final review →")';
    this.finalPublishButton = 'button:contains("Publish post, right now")';
    this.closeButton = 'button[data-test-button="close-publish-flow"]';
    this.postsLink = 'a:contains("Posts")';
    this.paragraphSelector = 'p[dir="ltr"]';
    this.imageSelector = 'img[data-testid="image-card-populated"]';
    this.iframeSelector = 'iframe[data-testid="embed-iframe"]';
  }

  navigateToPosts(folderName) {
    cy.wait(2000);
    cy.contains("a", "Posts").click();
    this.takeScreenshot(folderName, "navigate-to-posts");
  }

  createNewPost(folderName) {
    cy.wait(2000);
    cy.get(this.newPostButton).should("be.visible").click();
    this.takeScreenshot(folderName, "create-new-post");
  }

  generateTitlePost(baseText) {
    return `${baseText} ${Math.floor(Math.random() * 1000)}`;
  }

  createTitlePost(title, folderName) {
    cy.get(this.textarea).first().type(title);
    cy.get(this.textarea).type("{enter}");
    this.takeScreenshot(folderName, "create-title-post");
  }

  addRandomParagraphs() {
    const randomParagraph = () => Math.random().toString(36).substring(2, 50);
    const times = Math.floor(Math.random() * 6) + 1;
    let paragraphCount = 0;

    for (let i = 0; i < times; i++) {
      cy.get(this.textarea).type(`{enter}${randomParagraph()}`);
      paragraphCount++;
    }

    return paragraphCount;
  }

  publishPost(folderName) {
    cy.contains("button", "Publish").click();
    cy.wait(1500);
    this.takeScreenshot(folderName, "publish");
    cy.contains("button", "Continue, final review →").click();
    cy.wait(1500);
    this.takeScreenshot(folderName, "final-review");
    cy.contains("button", "Publish post, right now").click();
    cy.wait(1500);
    this.takeScreenshot(folderName, "publish-post-now");
    cy.get(this.closeButton).click();
  }

  verifyPostExists(title, folderName) {
    cy.contains("a", title).should("exist");
    this.takeScreenshot(folderName, "verify-post-exists");
  }

  openPost(title, folderName) {
    this.takeScreenshot(folderName, "open-post");
    cy.contains("a", title).click();
  }

  verifyParagraphCount(expectedCount, folderName) {
    this.takeScreenshot(folderName, "verify-paragraph-count");
    cy.get(this.paragraphSelector).then(($paragraphs) => {
      const totalParagraphs = $paragraphs.length / 2;
      expect(totalParagraphs).to.equal(expectedCount);
    });
  }

  verifyImageCount(expectedCount, folderName) {
    cy.get(this.imageSelector).then(($images) => {
      const totalImages = $images.length / 2;
      expect(totalImages).to.equal(expectedCount);
    });
    this.takeScreenshot(folderName, "verify-image-count");
  }

  verifyHTMLContent(content, folderName) {
    cy.contains("p", content).should("exist");
    this.takeScreenshot(folderName, "verify-html-content");
  }

  verifyYouTubeEmbed(url, folderName) {
    cy.get(this.iframeSelector)
      .should("have.attr", "srcdoc")
      .and("include", url);
    this.takeScreenshot(folderName, "verify-youtube-embed");
  }

  verifyButtonExists(buttonText, folderName) {
    cy.get("button").contains("span", buttonText).should("exist");
    this.takeScreenshot(folderName, "verify-button-exists");
  }

  takeScreenshot(folderName, screenshotName) {
    cy.screenshot(`${folderName}/${screenshotName}`, {
      capture: "fullPage",
    });
  }
}

export default PostPage;
