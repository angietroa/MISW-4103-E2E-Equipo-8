import LoginPage from "../pages/login";
import PageObj from "../pages/page";

const PAGE_DATA_POOL_PSEUDO_RANDOM_ENDPOINT =
  "https://my.api.mockaroo.com/pseudo_page.json?key=7237c4c0";

describe("E045 - Crear página embebiendo link de Twitter con link invalido pseudo-aleatorio", () => {
  beforeEach(() => {
    cy.request(PAGE_DATA_POOL_PSEUDO_RANDOM_ENDPOINT).as("page_data");
  });

  it("E045 - Crear página embebiendo link de Twitter con link invalido pseudo-aleatorio", async () => {
    const loginPage = new LoginPage(cy);
    const page = new PageObj(cy);
    // Visitar página e iniciar sesión
    loginPage.visitPage();

    loginPage.signInPage();
    // I a página y crear
    page.goToPageAndCreate();
    // Cargar título, agregar elemento y cargar contenido
    cy.get("@page_data").then((res) => {
      page.pageTitle(res.body[15].title);

      page.addPageElement("X (formerly Twitter)");

      page.setContentToInvalidLink(res.body[15].x_link);
    });
  });
});
