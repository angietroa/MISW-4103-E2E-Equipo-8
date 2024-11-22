import LoginPage from "../pages/login";
import PageObj from "../pages/page";
const PAGE_DATAPOOL_APRIORI = require("../data-a-priori/page.json");

describe("E044 - Crear página embebiendo link de Twitter con link valido a-priori", () => {
  const data = PAGE_DATAPOOL_APRIORI[14];
  it("E044 - Crear página embebiendo link de Twitter con link valido a-priori", () => {
    const loginPage = new LoginPage(cy);
    const page = new PageObj(cy);

    loginPage.visitPage();
    loginPage.signInPage();

    page.goToPageAndCreate();

    page.pageTitle(data.title);

    page.addPageElement("X (formerly Twitter)");

    page.setContentToLink(data.x_link);

    page.publishPage();
    page.closePublishPopup();
  });
});
