const LoginPage = require("../pages/login");
const PageObj = require("../pages/page");
const { faker } = require("@faker-js/faker");

describe("E058 - Crear página con botón y texto de 500 caracteres aleatorio", () => {
  it("E058 - Crear página con botón y texto de 500 caracteres aleatorio", async () => {
    const loginPage = new LoginPage(cy);
    const page = new PageObj(cy);
    // Visitar página e iniciar sesión
    loginPage.visitPage();
    loginPage.signInPage();
    // Crear página
    page.goToPageAndCreate();
    // Cargar título
    page.pageTitle(faker.lorem.word());
    // Agregar elemento botón
    page.addPageElement("Button");
    // Cargar contenido a botón
    page.setContentToButton(faker.string.alpha(500));
    // Publicar página
    page.publishPage();
    page.closePublishPopup();
  });
});
