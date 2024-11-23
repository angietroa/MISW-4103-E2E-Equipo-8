import LoginPage from "../pages/login";
import PageObj from "../pages/page";
const { faker } = require("@faker-js/faker");

describe("E043 - Crear página embebiendo link de Spotify con link valido aleatorio", () => {
  it("E043 - Crear página embebiendo link de Spotify con link valido aleatorio", () => {
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
    page.addPageElement("Spotify");
    // Cargar contenido invalido
    page.setContentToInvalidLink(faker.internet.url());
  });
});
