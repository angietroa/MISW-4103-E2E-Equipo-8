import LoginPage from "../pages/login";
import PageObj from "../pages/page";
const { faker } = require("@faker-js/faker");

describe("E046 - Crear página embebiendo link de Twitter con link invalido aleatorio", () => {
  it("E046 - Crear página embebiendo link de Twitter con link invalido aleatorio", async () => {
    const loginPage = new LoginPage(cy);
    const page = new PageObj(cy);
    // Visitar página e iniciar sesión
    loginPage.visitPage();
    loginPage.signInPage();
    // Ir a página y crear título
    page.goToPageAndCreate();
    page.pageTitle(faker.lorem.word());
    // Agregar elemento
    page.addPageElement("X (formerly Twitter)");
    // Cargar contenido a elemento
    page.setContentToInvalidLink(faker.internet.url());
  });
});
