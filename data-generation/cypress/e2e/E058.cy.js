const LoginPage = require("../pages/login");
const PageObj = require("../pages/page");
const { faker } = require("@faker-js/faker");

describe("E058 - Crear página con botón y texto de 500 caracteres aleatorio", () => {
  it("E058 - Crear página con botón y texto de 500 caracteres aleatorio", () => {
    const loginPage = new LoginPage(cy);
    const page = new PageObj(cy);

    loginPage.visitPage();
    loginPage.signInPage();

    page.goToPageAndCreate();

    page.pageTitle(faker.lorem.word());

    page.addPageElement("Button");

    page.setContentToButton(faker.string.alpha(500));

    page.publishPage();
    page.closePublishPopup();
  });
});
