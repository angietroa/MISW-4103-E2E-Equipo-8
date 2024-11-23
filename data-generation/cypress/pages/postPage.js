const { faker } = require("@faker-js/faker");

class PostPage {
  constructor() {
    this.textarea = "textarea";
    this.addCardButton = '[aria-label="Add a card"]';
  }

  navigateToPosts() {
    cy.wait(100);
    cy.contains("a", "Posts").click();
  }

  createNewPost() {
    cy.wait(1000);
    cy.get('a:contains("New post")').should("be.visible").click();
  }

  generateTitlePost(baseText) {
    return `${baseText} ${Math.floor(Math.random() * 1000)}`;
  }

  createTitlePost(title) {
    cy.get(this.textarea).first().type(title);
    cy.get(this.textarea).type("{enter}");
  }

  addParagraph(text) {
    cy.get(this.textarea).type(`{enter}${text}`);
  }

  publishPost() {
    cy.contains("button", "Publish").click();
    cy.contains("button", "Continue, final review →").click();
    cy.contains("button", "Publish post, right now").click();
    cy.get('button[data-test-button="close-publish-flow"]').click();
  }

  verifyPostExists(title) {
    cy.contains("a", title).should("exist");
  }

  openPost(title) {
    cy.contains("a", title).click();
  }

  addHTML(htmlContent) {
    cy.get(this.addCardButton).click();
    cy.get('button:contains("HTML")').click();
    cy.get('div[data-language="html"]').type(htmlContent);
  }

  addMarkdown(markdownContent) {
    cy.get(this.addCardButton).click();
    cy.get('button:contains("Markdown")').click();
    cy.get('div[class="markdown-editor"]').type(markdownContent);

    cy.wait(1000);

    cy.window().then((win) => {
      const x = 50;
      const y = win.document.documentElement.scrollHeight - 50;
      cy.wrap(win.document).trigger("click", { clientX: x, clientY: y });
    });
  }

  embedContent(type, url) {
    cy.get(this.addCardButton).click();
    cy.get(type).click();
    cy.get('[data-testid="embed-url"]').type(url);
    cy.get('[data-testid="embed-url"]').type("{enter}");
  }

  addButton(buttonText) {
    cy.get('[aria-label="Add a card"]').click();
    cy.contains("button", "Button").click();
    cy.get('[data-testid="button-input-text"]').type(buttonText);
  }

  verifyTextExists(text) {
    const paragraphs = text.split("\n").filter(Boolean);
    paragraphs.forEach((paragraph) => {
      cy.contains(paragraph).should("exist");
    });
  }

  verifyContent(tag, rawContent) {
    const content = rawContent
      .replace(/<\/?[^>]+(>|$)/g, "")
      .replace(/(^[#*]+|[*_~`]+)/g, "")
      .trim();
    cy.get(tag).contains(content).should("exist");
  }

  verifyEmbed() {
    cy.get('iframe[data-testid="embed-iframe"]').should("have.attr", "srcdoc");
  }

  verifyEmbedDoesNotExist() {
    cy.get('iframe[data-testid="embed-iframe"]').should("not.exist");
  }

  verifyErrorMessage() {
    cy.get('[data-testid="embed-url-error-container"]', {
      timeout: 10000,
    }).should("exist");
  }

  verifyButtonExists(buttonText) {
    cy.get("button").contains("span", buttonText).should("exist");
  }

  verifyButtonNoText() {
    cy.get('[data-testid="button-card-btn"]').should("exist");
  }

  generateRandomURL() {
    const protocol = faker.internet.protocol();
    const domain = faker.internet.domainName();
    const path = faker.word.noun();
    return `${protocol}://${domain}/${path}`;
  }

  generateRandomText(minChars = null, maxChars = null) {
    const min = minChars ?? faker.number.int({ min: 50, max: 100 });
    const max = maxChars ?? faker.number.int({ min: min, max: min + 50 });
    let randomText = faker.lorem.paragraphs(1);

    const specialChars = [
      "!",
      "@",
      "#",
      "$",
      "%",
      "^",
      "&",
      "*",
      "(",
      ")",
      "-",
      "=",
      "+",
      "[",
      "]",
      "{",
      "}",
      "\\",
      "|",
      ";",
      ":",
      '"',
      "'",
      "<",
      ">",
      ",",
      ".",
      "/",
      "?",
    ];

    while (randomText.length < min) {
      randomText +=
        " " + faker.lorem.words(faker.number.int({ min: 5, max: 10 }));
    }

    const charCount = faker.number.int({ min: 3, max: 10 });
    const words = randomText.split(" ");

    for (let i = 0; i < charCount; i++) {
      const randomChar =
        specialChars[
          faker.number.int({ min: 0, max: specialChars.length - 1 })
        ];
      const randomNumber = faker.number.int({ min: 0, max: 9999 });
      const insertPos = faker.number.int({ min: 0, max: words.length - 1 });
      words.splice(insertPos, 0, `${randomChar}${randomNumber}`);
    }

    randomText = words.join(" ");

    if (randomText.length > max) {
      randomText = randomText.substring(0, max);
    }

    return randomText;
  }
}

export default PostPage;
