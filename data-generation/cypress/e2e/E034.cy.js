const LoginPage = require("../pages/login");
const PageObj = require("../pages/page");
const PAGE_DATAPOOL_APRIORI = require("../data-a-priori/page.json");

describe("E034 - Crear página con HTML a-priori", () => {
  const data = PAGE_DATAPOOL_APRIORI[4];
  it("E034 - Crear página con HTML a-priori", () => {
    const loginPage = new LoginPage(cy);
    const page = new PageObj(cy);

    loginPage.visitPage();
    loginPage.signInPage();

    page.goToPageAndCreate();
    page.pageTitle(data.title);

    page.addPageElement("HTML");

    page.setContentToHTML(data.html);

    page.publishPage();
    page.closePublishPopup();
  });
});
