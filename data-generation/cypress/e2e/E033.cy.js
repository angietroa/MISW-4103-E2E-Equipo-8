const LoginPage = require("../pages/login");
const PageObj = require("../pages/page");
const PAGE_DATAPOOL_APRIORI = require("../data-a-priori/page.json");

describe("E033 - Crear página con cero caracteres en título y contenido a-priori", () => {
  const data = PAGE_DATAPOOL_APRIORI[3];
  it("E033 - Crear página con cero caracteres en título y contenido a-priori", () => {
    const loginPage = new LoginPage(cy);
    const page = new PageObj(cy);

    loginPage.visitPage();
    loginPage.signInPage();

    page.goToPageAndCreate();

    page.pageTitle(data.empty_strings);

    page.addTextToPage(data.empty_strings);

    page.publishPage();
    page.closePublishPopup();
  });
});
