import LoginPage from "../pages/login";
import PageObj from "../pages/page";

const PAGE_DATA_POOL_PSEUDO_RANDOM_ENDPOINT =
  "https://my.api.mockaroo.com/pseudo_page.json?key=7237c4c0";

describe("E054 - Crear página con botón y texto de 10 caracteres pseudo-aleatorio", () => {
  beforeEach(() => {
    cy.request(PAGE_DATA_POOL_PSEUDO_RANDOM_ENDPOINT).as("page_data");
  });

  it("E054 - Crear página con botón y texto de 10 caracteres pseudo-aleatorio", async () => {
    const loginPage = new LoginPage(cy);
    const page = new PageObj(cy);
    // Visitar página e iniciar sesión
    loginPage.visitPage();
    loginPage.signInPage();
    // Crear página
    page.goToPageAndCreate();
    // Cargar título, elemento, cargar contenido y publicar página
    cy.get("@page_data").then((res) => {
      page.pageTitle(res.body[22].title);

      page.addPageElement("Button");

      page.setContentToButton(res.body[22].small_text);

      page.publishPage();
      page.closePublishPopup();
    });
  });
});
