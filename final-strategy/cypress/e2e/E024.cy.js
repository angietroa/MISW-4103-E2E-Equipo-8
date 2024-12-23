const LoginPage = require("../pages/login");
const PageObj = require("../pages/page");
const PAGE_DATAPOOL_APRIORI = require("../data-a-priori/page.json");

describe("E024 - Crear página con HTML a-priori invalido", () => {
  const data = PAGE_DATAPOOL_APRIORI[4];
  it("E024 - Crear página con HTML a-priori invalido", async () => {
    const loginPage = new LoginPage(cy);
    const page = new PageObj(cy);
    // Visitar página e iniciar sesión
    loginPage.visitPage();
    loginPage.signInPage();
    // Ir a página y crear titulo
    page.goToPageAndCreate();
    page.pageTitle(data.title);
    // Agregar elemento HTML
    page.addPageElement("HTML");
    // Agregar contenido HTML
    page.setContentToHTML(data.html);
    // Publicar página
    page.publishPage();
    page.closePublishPopup();
  });
});
