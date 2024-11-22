const LoginPage = require("../pages/login");
const PageObj = require("../pages/page");
const PAGE_DATAPOOL_APRIORI = require("../data-a-priori/page.json");

describe("E056 - Crear página con botón y texto de 500 caracteres a-priori", () => {
  const data = PAGE_DATAPOOL_APRIORI[24];
  it("E056 - Crear página con botón y texto de 500 caracteres a-priori", () => {
    const loginPage = new LoginPage(cy);
    const page = new PageObj(cy);

    loginPage.visitPage();
    loginPage.signInPage();

    page.goToPageAndCreate();

    page.pageTitle(data.title);

    page.addPageElement("Button");

    page.setContentToButton(data.big_text);

    page.publishPage();
    page.closePublishPopup();
  });
});
