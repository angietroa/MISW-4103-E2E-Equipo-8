import LoginPage from "../pages/login";
import PageObj from "../pages/page";
const { faker } = require("@faker-js/faker");

describe("E040 - Crear página embebiendo link en YouTube con link valido aleatorio", () => {
  it("E040 - Crear página embebiendo link en YouTube con link valido aleatorio", () => {
    const loginPage = new LoginPage(cy);
    const page = new PageObj(cy);

    loginPage.visitPage();
    loginPage.signInPage();

    page.goToPageAndCreate();

    page.pageTitle(faker.lorem.word());

    page.addPageElement("YouTube");

    page.setContentToInvalidLink(faker.internet.url());
  });
});
