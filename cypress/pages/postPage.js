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

  navigateToPosts() {
    cy.wait(2000);
    cy.contains("a", "Posts").click();
  }

  createNewPost() {
    cy.wait(2000);
    cy.get(this.newPostButton).should("be.visible").click();
  }

  generateTitlePost(baseText) {
    return `${baseText} ${Math.floor(Math.random() * 1000)}`;
  }

  createTitlePost(title) {
    cy.get(this.textarea).first().type(title);
    cy.get(this.textarea).type("{enter}");
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

  publishPost() {
    cy.contains("button", "Publish").click();
    cy.contains("button", "Continue, final review →").click();
    cy.contains("button", "Publish post, right now").click();
    cy.get(this.closeButton).click();
  }

  verifyPostExists(title) {
    cy.contains("a", title).should("exist");
  }

  openPost(title) {
    cy.contains("a", title).click();
  }

  verifyParagraphCount(expectedCount) {
    cy.get(this.paragraphSelector).then(($paragraphs) => {
      const totalParagraphs = $paragraphs.length / 2;
      expect(totalParagraphs).to.equal(expectedCount);
    });
  }

  verifyImageCount(expectedCount) {
    cy.get(this.imageSelector).then(($images) => {
      const totalImages = $images.length / 2;
      expect(totalImages).to.equal(expectedCount);
    });
  }

  verifyHTMLContent(content) {
    cy.contains("p", content).should("exist");
  }

  verifyYouTubeEmbed(url) {
    cy.get(this.iframeSelector)
      .should("have.attr", "srcdoc")
      .and("include", url);
  }

  verifyButtonExists(buttonText) {
    cy.get("button").contains("span", buttonText).should("exist");
  }
}

export default PostPage;
