import LoginPage from "../pages/login";
import PageObj from "../pages/page";
const PAGE_DATAPOOL_APRIORI = require("../data-a-priori/page.json");

describe("E028 - Crear página embebiendo link en YouTube con link invalido a-priori", () => {
  const data = PAGE_DATAPOOL_APRIORI[8];
  it("E028 - Crear página embebiendo link en YouTube con link invalido a-priori", async () => {
    const loginPage = new LoginPage(cy);
    const page = new PageObj(cy);
    // Visitar página e iniciar sesión
    loginPage.visitPage();
    loginPage.signInPage();
    // Ir a página y crear
    page.goToPageAndCreate();
    // Crear título
    page.pageTitle(data.title);
    // Cargar elemento Youtube
    page.addPageElement("YouTube");
    // Cargar datos a elemento
    page.setContentToLink(data.youtube_link);
    // Publicar página
    page.publishPage();
    page.closePublishPopup();
  });
});
