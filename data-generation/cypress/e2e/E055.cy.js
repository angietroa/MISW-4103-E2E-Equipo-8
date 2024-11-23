const LoginPage = require("../pages/login");
const PageObj = require("../pages/page");
const { faker } = require("@faker-js/faker");

describe("E055 - Crear página con botón y texto de 10 caracteres aleatorio", () => {
  it("E055 - Crear página con botón y texto de 10 caracteres aleatorio", () => {
    const loginPage = new LoginPage(cy);
    const page = new PageObj(cy);
    // Visitar página e iniciar sesión
    loginPage.visitPage();
    loginPage.signInPage();
    // Ir a página y crear
    page.goToPageAndCreate();
    // Cargar título
    page.pageTitle(faker.lorem.word());
    // Agregar elemento
    page.addPageElement("Button");
    // Cargar contenido a botón
    page.setContentToButton(faker.string.alpha(10));
    // Publicar página
    page.publishPage();
    page.closePublishPopup();
  });
});
