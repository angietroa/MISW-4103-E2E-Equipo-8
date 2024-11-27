import LoginPage from "../pages/login";
import PageObj from "../pages/page";
const PAGE_DATAPOOL_APRIORI = require("../data-a-priori/page.json");

describe("E026 - Crear página con markdown invalido a-priori", () => {
  const data = PAGE_DATAPOOL_APRIORI[6];
  it("E026 - Crear página con markdown invalido", async () => {
    const loginPage = new LoginPage(cy);
    const page = new PageObj(cy);
    // Visitar página e iniciar sesión
    loginPage.visitPage();
    loginPage.signInPage();
    // ir a página y crear
    page.goToPageAndCreate();
    // Agregar elemento Markdown
    page.addPageElement("Markdown");
    // Agregar contenido a Markdown
    page.setContentToMarkdown(data.markdown);
    // Agregar titulo
    page.pageTitle(data.title);
    // Publicar página
    page.publishPage();
    page.closePublishPopup();
  });
});
