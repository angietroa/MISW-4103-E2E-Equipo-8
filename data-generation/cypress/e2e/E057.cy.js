import LoginPage from "../pages/login";
import PageObj from "../pages/page";

const PAGE_DATA_POOL_PSEUDO_RANDOM_ENDPOINT =
  "https://my.api.mockaroo.com/pseudo_page.json?key=7237c4c0";

describe("E057 - Crear página con botón y texto de 500 caracteres pseudo-aleatorio", () => {
  beforeEach(() => {
    cy.request(PAGE_DATA_POOL_PSEUDO_RANDOM_ENDPOINT).as("page_data");
  });

  it("E057 - Crear página con botón y texto de 500 caracteres pseudo-aleatorio", () => {
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

    // When: I enter admin, I go to page and create a new one
    cy.log({
      displayName: "When",
      message: "I enter admin, I go to page and create a new one",
    });
    page.goToPageAndCreate();

    cy.get("@page_data").then((res) => {
      // When: I enter page, I set a title
      cy.log({
        displayName: "When",
        message: "I enter page, I set a title",
      });
      page.pageTitle(res.body[26].title);

      // When: I enter the title, I want to add an element to page, in this case file
      cy.log({
        displayName: "When",
        message:
          "I enter the title, I want to add an element to page, in this case Spotify",
      });
      page.addPageElement("Button");

      page.setContentToButton(res.body[26].big_text);

      page.publishPage();
      page.closePublishPopup();
    });
  });
});