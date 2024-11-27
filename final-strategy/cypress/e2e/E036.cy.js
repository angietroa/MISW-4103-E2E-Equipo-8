import LoginPage from "../pages/login";
import PageObj from "../pages/page";
const PAGE_DATAPOOL_APRIORI = require("../data-a-priori/page.json");

describe("E036 - Crear página embebiendo link de Soundcloud con link invalido a-priori", () => {
  const data = PAGE_DATAPOOL_APRIORI[20];
  it("E036 - Crear página embebiendo link de Soundcloud con link invalido a-priori", async () => {
    const loginPage = new LoginPage(cy);
    const page = new PageObj(cy);
    // Visitar página e iniciar sesión
    loginPage.visitPage();
    loginPage.signInPage();
    // Ir a página y crear
    page.goToPageAndCreate();
    // Agregar título
    page.pageTitle(data.title);
    // Agregar elemento
    page.addPageElement("SoundCloud");
    // Cargar información a elemento
    page.setContentToLink(data.soundcloud_link);
    // Publicar página
    page.publishPage();
    page.closePublishPopup();
  });
});
