const LoginPage = require("../pages/login");
const PageObj = require("../pages/page");
const PAGE_DATAPOOL_APRIORI = require("../data-a-priori/page.json");

describe("E059 - Crear página con botón con caracter vacio a-priori", () => {
  const data = PAGE_DATAPOOL_APRIORI[28];
  it("E059 - Crear página con botón con caracter vacio a-priori", () => {
    const loginPage = new LoginPage(cy);
    const page = new PageObj(cy);
    // Visitar página e iniciar sesión
    loginPage.visitPage();
    loginPage.signInPage();
    // Crear página
    page.goToPageAndCreate();
    // Cargar título
    page.pageTitle(data.title);
    // Agrear elemento
    page.addPageElement("Button");
    // Cargar contenido a botón
    page.setContentToButton(data.empty_strings);
    // Publicar página
    page.publishPage();
    page.closePublishPopup();
  });
});
