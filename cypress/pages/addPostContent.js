class AddPostContent {
  constructor() {
    this.addCardButton = '[aria-label="Add a card"]';
    this.imageButton = 'button:contains("Image")';
    this.htmlButton = 'button:contains("HTML")';
    this.youtubeButton = 'button:contains("youtube")';
  }

  addImage(imagePath) {
    cy.get(this.addCardButton).click();
    cy.get(this.imageButton).click();
    cy.get('div[data-kg="editor"]')
      .should("be.visible")
      .find('input[type="file"]')
      .attachFile(imagePath);
    cy.get("textarea").type("{enter}");
  }

  addHTML(htmlContent) {
    cy.get(this.addCardButton).click();
    cy.get(this.htmlButton).click();
    cy.get('div[data-language="html"]').type(htmlContent);
  }

  embedYouTube(url, folderName) {
    cy.get(this.addCardButton).click();
    cy.get(this.youtubeButton).click();
    cy.get('[data-testid="embed-url"]').type(url);
    cy.get('[data-testid="embed-url"]').type("{enter}");
    this.takeScreenshot(folderName, "embed-youtube");
  }

  addButton(buttonText, folderName) {
    cy.get('[aria-label="Add a card"]').click();
    cy.contains("button", "Button").click();
    cy.get('[data-testid="button-input-text"]').type(buttonText);
    this.takeScreenshot(folderName, "add-button");
  }

  takeScreenshot(folderName, screenshotName) {
    cy.task("createFolder", folderName);
    cy.screenshot(`${folderName}/${screenshotName}`, {
      capture: "viewport",
    });
  }
}

export default AddPostContent;
