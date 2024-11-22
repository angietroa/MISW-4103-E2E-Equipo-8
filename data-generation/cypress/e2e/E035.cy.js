const LoginPage = require("../pages/login");
const PageObj = require("../pages/page");
const { faker } = require("@faker-js/faker");

describe("E035 - Crear página con HTML aleatorio", () => {
  it("E035 - Crear página con HTML aleatorio", () => {
    const loginPage = new LoginPage(cy);
    const page = new PageObj(cy);

    loginPage.visitPage();
    loginPage.signInPage();

    page.goToPageAndCreate();

    page.pageTitle(faker.lorem.word());

    page.addPageElement("HTML");

    page.setContentToHTML(faker.string.alphanumeric());

    page.publishPage();
    page.closePublishPopup();
  });
});
