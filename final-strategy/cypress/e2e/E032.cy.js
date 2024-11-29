import LoginPage from "../pages/login";
import PageObj from "../pages/page";
const PAGE_DATAPOOL_APRIORI = require("../data-a-priori/page.json");

describe("E032 - Crear página embebiendo link de Twitter con link valido a-priori", () => {
  const data = PAGE_DATAPOOL_APRIORI[14];
  it("E032 - Crear página embebiendo link de Twitter con link valido a-priori", async () => {
    const loginPage = new LoginPage(cy);
    const page = new PageObj(cy);
    // Visitar página e iniciar sesión
    loginPage.visitPage();
    loginPage.signInPage();
    // Ir a página y crear
    page.goToPageAndCreate();
    // Agregar título
    page.pageTitle(data.title);
    // Agregar elemento twitter
    page.addPageElement("X (formerly Twitter)");
    // Agregar contenido a link
    page.setContentToLink(data.x_link);
    // Publicar página
    page.publishPage();
    page.closePublishPopup();
  });
});
