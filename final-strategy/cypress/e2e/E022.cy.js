const LoginPage = require("../pages/login");
const PageObj = require("../pages/page");
const PAGE_DATAPOOL_APRIORI = require("../data-a-priori/page.json");

describe("E022 - Crear página con cero caracteres en título y contenido a-priori", () => {
  const data = PAGE_DATAPOOL_APRIORI[3];
  it("E022 - Crear página con cero caracteres en título y contenido a-priori", async () => {
    const loginPage = new LoginPage(cy);
    const page = new PageObj(cy);
    // Visitar página e iniciar sesión
    loginPage.visitPage();
    loginPage.signInPage();
    // ir a página y crear elemento
    page.goToPageAndCreate();
    // Agregar título
    page.pageTitle(data.empty_strings);
    // Agregar texto
    page.addTextToPage(data.empty_strings);
    // Publicar página
    page.publishPage();
    page.closePublishPopup();
  });
});
