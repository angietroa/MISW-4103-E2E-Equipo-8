import LoginPage from "../pages/login";
import PageObj from "../pages/page";
const { faker } = require("@faker-js/faker");

describe("E052 - Crear página embebiendo link de Soundcloud con link invalido aleatorio", () => {
  it("E052 - Crear página embebiendo link de Soundcloud con link invalido aleatorio", () => {
    const loginPage = new LoginPage(cy);
    const page = new PageObj(cy);
    //Visitar página e iniciar sesión
    loginPage.visitPage();
    loginPage.signInPage();
    // Crear página
    page.goToPageAndCreate();
    // Agregar título
    page.pageTitle(faker.lorem.word());
    // Agregar elemento
    page.addPageElement("SoundCloud");
    // Cargar contenido con url aleatoria
    page.setContentToInvalidLink(faker.internet.url());
  });
});
