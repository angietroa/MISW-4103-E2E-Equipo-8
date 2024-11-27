const LoginPage = require("../pages/login");
const PageObj = require("../pages/page");
const PAGE_DATAPOOL_APRIORI = require("../data-a-priori/page.json");

describe("E037 - Crear página con botón y texto de 10 caracteres a-priori", () => {
  const data = PAGE_DATAPOOL_APRIORI[29];
  it("E037 - Crear página con botón y texto de 10 caracteres a-priori", async () => {
    const loginPage = new LoginPage(cy);
    const page = new PageObj(cy);
    // Visitar página e iniciar sesión
    loginPage.visitPage();
    loginPage.signInPage();
    // Cargar página y crear
    page.goToPageAndCreate();
    // Crear título
    page.pageTitle(data.title);
    // Agregar elemento
    page.addPageElement("Button");
    // Cargar contenido a botón
    page.setContentToButton(data.button);
    // Publicar página
    page.publishPage();
    page.closePublishPopup();
  });
});