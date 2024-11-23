import LoginPage from "../pages/login";
import PageObj from "../pages/page";
const { faker } = require("@faker-js/faker");

describe("E049 - Crear página embebiendo link de Vimeo con link invalido aleatorio", () => {
  it("E049 - Crear página embebiendo link de Vimeo con link invalido aleatorio", () => {
    const loginPage = new LoginPage(cy);
    const page = new PageObj(cy);
    // Visitar página e iniciar sesión
    loginPage.visitPage();
    loginPage.signInPage();
    // ir a página y crear
    page.goToPageAndCreate();
    // Agregar título
    page.pageTitle(faker.lorem.word());
    // Agregar elemento
    page.addPageElement("Vimeo");
    // Agregar contenido invalido y validar
    page.setContentToInvalidLink(faker.internet.url());
  });
});
