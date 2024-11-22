import LoginPage from "../pages/login";
import PageObj from "../pages/page";
const PAGE_DATAPOOL_APRIORI = require("../data-a-priori/page.json");

describe("E038 - Crear página embebiendo link en YouTube con link valido a-priori", () => {
  const data = PAGE_DATAPOOL_APRIORI[8];
  it("E038 - Crear página embebiendo link en YouTube con link valido a-priori", () => {
    const loginPage = new LoginPage(cy);
    const page = new PageObj(cy);

    loginPage.visitPage();
    loginPage.signInPage();

    page.goToPageAndCreate();

    page.pageTitle(data.title);

    page.addPageElement("YouTube");

    page.setContentToLink(data.youtube_link);

    page.publishPage();
    page.closePublishPopup();
  });
});
