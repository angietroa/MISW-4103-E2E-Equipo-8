const LoginPage = require("../pages/login");
const PageObj = require("../pages/page");
const { faker } = require("@faker-js/faker");

describe("E035 - Crear página con HTML aleatorio", () => {
  it("E035 - Crear página con HTML aleatorio", () => {
    const loginPage = new LoginPage(cy);
    const page = new PageObj(cy);
    // Visitar página e iniciar sesión
    loginPage.visitPage();
    loginPage.signInPage();
    // Ir a página y crear
    page.goToPageAndCreate();
    // Agregar título
    page.pageTitle(faker.lorem.word());
    // Agregar elemento HTML
    page.addPageElement("HTML");
    // Agregar etiquetas HTML
    page.setContentToHTML(faker.string.alphanumeric());
    // Publicar página
    page.publishPage();
    page.closePublishPopup();
  });
});
