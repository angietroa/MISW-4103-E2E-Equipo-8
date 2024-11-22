import LoginPage from "../pages/login";
import PageObj from "../pages/page";
const { faker } = require("@faker-js/faker");

describe("E046 - Crear página embebiendo link de Twitter con link invalido aleatorio", () => {
  it("E046 - Crear página embebiendo link de Twitter con link invalido aleatorio", () => {
    const loginPage = new LoginPage(cy);
    const page = new PageObj(cy);

    loginPage.visitPage();
    loginPage.signInPage();

    page.goToPageAndCreate();
    page.pageTitle(faker.lorem.word());

    page.addPageElement("X (formerly Twitter)");

    page.setContentToInvalidLink(faker.internet.url());
  });
});
