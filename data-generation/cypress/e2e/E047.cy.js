import LoginPage from "../pages/login";
import PageObj from "../pages/page";
const PAGE_DATAPOOL_APRIORI = require("../data-a-priori/page.json");

describe("E047 - Crear página embebiendo link de Vimeo con link valido a-priori", () => {
  const data = PAGE_DATAPOOL_APRIORI[17];
  it("E047 - Crear página embebiendo link de Vimeo con link valido a-priori", () => {
    const loginPage = new LoginPage(cy);
    const page = new PageObj(cy);

    loginPage.visitPage();
    loginPage.signInPage();

    page.goToPageAndCreate();

    page.pageTitle(data.title);

    page.addPageElement("Vimeo");

    page.setContentToLink(data.vimeo_link);

    page.publishPage();
    page.closePublishPopup();
  });
});
