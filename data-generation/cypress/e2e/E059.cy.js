const LoginPage = require("../pages/login");
const PageObj = require("../pages/page");
const PAGE_DATAPOOL_APRIORI = require("../data-a-priori/page.json");

describe("E059 - Crear página con botón con caracter vacio a-priori", () => {
  const data = PAGE_DATAPOOL_APRIORI[28];
  it("E059 - Crear página con botón con caracter vacio a-priori", () => {
    const loginPage = new LoginPage(cy);
    const page = new PageObj(cy);

    loginPage.visitPage();
    loginPage.signInPage();

    page.goToPageAndCreate();

    page.pageTitle(data.title);

    page.addPageElement("Button");

    page.setContentToButton(data.empty_strings);

    page.publishPage();
    page.closePublishPopup();
  });
});
