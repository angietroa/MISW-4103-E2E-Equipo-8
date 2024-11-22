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

    // Navigate to page
    loginPage.visitPage();
    loginPage.signInPage();

    page.goToPageAndCreate();

    cy.get("@page_data").then((res) => {
      page.pageTitle(res.body[1].title);
      page.addTextToPage(res.body[1].text);
    });

    page.publishPage();
    page.closePublishPopup();
  });
});
