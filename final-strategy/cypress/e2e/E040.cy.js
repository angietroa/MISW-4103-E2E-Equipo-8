import LoginPage from "../pages/login";
import PageObj from "../pages/page";

const PAGE_DATA_POOL_PSEUDO_RANDOM_ENDPOINT =
  "https://my.api.mockaroo.com/pseudo_page.json?key=7237c4c0";

describe("E040 - Crear página con embebido pseudo-aleatorio", () => {
  beforeEach(() => {
    cy.request(PAGE_DATA_POOL_PSEUDO_RANDOM_ENDPOINT).as("page_data");
  });

  it("E040 - Crear página con embebido pseudo-aleatorio", async () => {
    const loginPage = new LoginPage(cy);
    const page = new PageObj(cy);
    // Visitar página e iniciar sesión
    loginPage.visitPage();
    loginPage.signInPage();
    // Ir a página y crear
    page.goToPageAndCreate();
    // Crear título, agregar elemento y cargar contenido
    cy.get("@page_data").then((res) => {
      page.pageTitle(res.body[29].title);

      page.addPageElement("Other...");

      page.setContentToInvalidLink(res.body[29].embed);
    });
  });
});
