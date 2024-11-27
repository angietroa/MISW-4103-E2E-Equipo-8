const LoginPage = require("../pages/login");
const PageObj = require("../pages/page");
const PAGE_DATAPOOL_APRIORI = require("../data-a-priori/page.json");

describe("E038 - Crear página con botón y texto de 500 caracteres a-priori", () => {
  const data = PAGE_DATAPOOL_APRIORI[24];
  it("E038 - Crear página con botón y texto de 500 caracteres a-priori", async () => {
    const loginPage = new LoginPage(cy);
    const page = new PageObj(cy);
    // Visitar página e iniciar sesión
    loginPage.visitPage();
    loginPage.signInPage();
    // Crear página
    page.goToPageAndCreate();
    // Cargar título
    page.pageTitle(data.title);
    // Cargar elemento
    page.addPageElement("Button");
    // Cargar contenido a botón
    page.setContentToButton(data.big_text);
    // Publicar página
    page.publishPage();
    page.closePublishPopup();
  });
});
