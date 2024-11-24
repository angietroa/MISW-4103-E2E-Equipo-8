import LoginPage from "../pages/login";
import PageObj from "../pages/page";

const PAGE_DATA_POOL_PSEUDO_RANDOM_ENDPOINT =
  "https://my.api.mockaroo.com/pseudo_page.json?key=7237c4c0";

describe("E051 - Crear página embebiendo link de Soundcloud con link invalido pseudo-aleatorio", () => {
  beforeEach(() => {
    cy.request(PAGE_DATA_POOL_PSEUDO_RANDOM_ENDPOINT).as("page_data");
  });

  it("E051 - Crear página embebiendo link de Soundcloud con link invalido pseudo-aleatorio", async () => {
    const loginPage = new LoginPage(cy);
    const page = new PageObj(cy);
    // Visitar página e iniciar sesión
    loginPage.visitPage();
    loginPage.signInPage();
    // Crear página
    page.goToPageAndCreate();
    // Cargar título, elemento y cargar contenido para validar
    cy.get("@page_data").then((res) => {
      page.pageTitle(res.body[21].title);

      page.addPageElement("SoundCloud");

      page.setContentToInvalidLink(res.body[21].soundcloud_link);
    });
  });
});
