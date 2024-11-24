import LoginPage from "../pages/login";
import PageObj from "../pages/page";

const PAGE_DATA_POOL_PSEUDO_RANDOM_ENDPOINT =
  "https://my.api.mockaroo.com/pseudo_page.json?key=7237c4c0";

describe("E048 - Crear página embebiendo link de Vimeo con link invalido pseudo-aleatorio", () => {
  beforeEach(() => {
    cy.request(PAGE_DATA_POOL_PSEUDO_RANDOM_ENDPOINT).as("page_data");
  });

  it("E048 - Crear página embebiendo link de Vimeo con link invalido pseudo-aleatorio", async () => {
    const loginPage = new LoginPage(cy);
    const page = new PageObj(cy);
    // Visitar página e iniciar sesión
    loginPage.visitPage();
    loginPage.signInPage();
    // ir a página y crear
    page.goToPageAndCreate();
    // cargar título, agregar elemento y validar error
    cy.get("@page_data").then((res) => {
      page.pageTitle(res.body[18].title);

      page.addPageElement("Vimeo");

      page.setContentToInvalidLink(res.body[18].vimeo_link);
    });
  });
});
