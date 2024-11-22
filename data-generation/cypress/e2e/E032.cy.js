const LoginPage = require("../pages/login");
const PageObj = require("../pages/page");

const PAGE_DATA_POOL_PSEUDO_RANDOM_ENDPOINT =
  "https://my.api.mockaroo.com/pseudo_page.json?key=7237c4c0";

describe("E032 - Crear página con texto alfanumerico pseudo-aleatorio", () => {
  // Configuración global para manejar excepciones
  beforeEach(() => {
    cy.request(PAGE_DATA_POOL_PSEUDO_RANDOM_ENDPOINT).as("page_data");
  });

  it("E032 - Crear página con texto alfanumerico pseudoaleatorio", () => {
    const loginPage = new LoginPage(cy);
    const page = new PageObj(cy);

    // Given: I navigate to page
    cy.log({ displayName: "Given", message: "I navigate to page" });
    loginPage.visitPage();

    // When: I enter email, password and I do click on Sign-in
    cy.log({
      displayName: "When",
      message: "I enter email, password and I do click on Sign-in",
    });
    loginPage.signInPage();

    // And: I enter admin, I go to page and create a new one
    cy.log({
      displayName: "And",
      message: "I enter admin, I go to page and create a new one",
    });
    page.goToPageAndCreate();

    cy.get("@page_data").then((res) => {
      // And: I enter page, I set a title
      cy.log({
        displayName: "And",
        message: res,
      });
      page.pageTitle(res.body[1].title);

      // And: I enter the title, I want to add an element to page, in this case file
      cy.log({
        displayName: "And",
        message:
          "I enter the title, I want to write a-priori data in text field",
      });
      page.addTextToPage(res.body[1].text);
    });

    // Then: I save all changes
    cy.log({
      displayName: "And",
      message: "I save all changes",
    });
    page.publishPage();
    page.closePublishPopup();
  });
});
