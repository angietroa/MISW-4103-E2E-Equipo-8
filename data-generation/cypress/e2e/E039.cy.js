import LoginPage from "../pages/login";
import PageObj from "../pages/page";

const PAGE_DATA_POOL_PSEUDO_RANDOM_ENDPOINT =
  "https://my.api.mockaroo.com/pseudo_page.json?key=7237c4c0";

describe("E039 - Crear página embebiendo link en YouTube con link valido pseudo-aleatorio", () => {
  beforeEach(() => {
    cy.request(PAGE_DATA_POOL_PSEUDO_RANDOM_ENDPOINT).as("page_data");
  });

  it("E039 - Crear página embebiendo link en YouTube con link valido pseudo-aleatorio", () => {
    const loginPage = new LoginPage(cy);
    const page = new PageObj(cy);
    // Visitar página e iniciar sesión
    loginPage.visitPage();
    loginPage.signInPage();
    // Ir a página y crear
    page.goToPageAndCreate();
    // Cargar título, elemento de Youtube y validar que el elemento sea invalido
    cy.get("@page_data").then((res) => {
      page.pageTitle(res.body[9].title);

      page.addPageElement("YouTube");

      page.setContentToInvalidLink(res.body[9].youtube_link);
    });
  });
});
