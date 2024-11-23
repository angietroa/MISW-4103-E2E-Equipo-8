import LoginPage from "../pages/login";
import PageObj from "../pages/page";
const { faker } = require("@faker-js/faker");

describe("E040 - Crear página embebiendo link en YouTube con link valido aleatorio", () => {
  it("E040 - Crear página embebiendo link en YouTube con link valido aleatorio", () => {
    const loginPage = new LoginPage(cy);
    const page = new PageObj(cy);
    // Visitar página e iniciar sesión
    loginPage.visitPage();
    loginPage.signInPage();
    // Ir a página y crear
    page.goToPageAndCreate();
    // cargar título aleatorio
    page.pageTitle(faker.lorem.word());
    // Cargar elemento youtube
    page.addPageElement("YouTube");
    // Cargar enlace aleatorio
    page.setContentToInvalidLink(faker.internet.url());
  });
});
