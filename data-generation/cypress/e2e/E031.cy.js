const LoginPage = require("../pages/login");
const PageObj = require("../pages/page");
const PAGE_DATAPOOL_APRIORI = require("../data-a-priori/page.json");

describe("E031 - Crear página con texto alfanumerico a-priori", () => {
  const data = PAGE_DATAPOOL_APRIORI[0];
  it("E031 - Crear página con texto alfanumerico a-priori", async () => {
    const loginPage = new LoginPage(cy);
    const page = new PageObj(cy);

    // Visitar página e iniciar sesión
    loginPage.visitPage();

    loginPage.signInPage();

    // Ir a la página de crear nueva página y agregar título
    page.goToPageAndCreate();
    page.pageTitle(data.title);
    // Agregar texto a página
    page.addTextToPage(data.text);
    // Realizar la publicación
    page.publishPage();
    page.closePublishPopup();
  });
});
