import LoginPage from "../pages/login";
import PageObj from "../pages/page";
const PAGE_DATAPOOL_APRIORI = require("../data-a-priori/page.json");

describe("E034 - Crear página embebiendo link de Vimeo con link invalido a-priori", () => {
  const data = PAGE_DATAPOOL_APRIORI[17];
  it("E034 - Crear página embebiendo link de Vimeo con link invalido a-priori", async () => {
    const loginPage = new LoginPage(cy);
    const page = new PageObj(cy);
    // Visitar página e iniciar sesión
    loginPage.visitPage();
    loginPage.signInPage();
    // Ir a página y crear
    page.goToPageAndCreate();
    // Cargar título
    page.pageTitle(data.title);
    // Agregar elemento
    page.addPageElement("Vimeo");
    // Cargar contenido al link
    page.setContentToLink(data.vimeo_link);
    // Publicar página
    page.publishPage();
    page.closePublishPopup();
  });
});
