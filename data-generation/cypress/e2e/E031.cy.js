const LoginPage = require("../pages/login");
const PageObj = require("../pages/page");
const PAGE_DATAPOOL_APRIORI = require("../data-a-priori/page.json");

describe("E031 - Crear página con texto alfanumerico a-priori", () => {
  const data = PAGE_DATAPOOL_APRIORI[0];
  it("E031 - Crear página con texto alfanumerico a-priori", () => {
    const loginPage = new LoginPage(cy);
    const page = new PageObj(cy);

    // navigate to page
    loginPage.visitPage();

    loginPage.signInPage();
    //Create element
    page.goToPageAndCreate();
    page.pageTitle(data.title);

    page.addTextToPage(data.text);

    page.publishPage();
    page.closePublishPopup();
  });
});
