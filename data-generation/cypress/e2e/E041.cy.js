import LoginPage from "../pages/login";
import PageObj from "../pages/page";
const PAGE_DATAPOOL_APRIORI = require("../data-a-priori/page.json");

describe("E041 - Crear página embebiendo link de Spotify con link valido a-priori", () => {
  const data = PAGE_DATAPOOL_APRIORI[11];
  it("E041 - Crear página embebiendo link en Spotify con link valido a-priori", () => {
    const loginPage = new LoginPage(cy);
    const page = new PageObj(cy);

    loginPage.visitPage();
    loginPage.signInPage();

    page.goToPageAndCreate();

    page.pageTitle(data.title);

    page.addPageElement("Spotify");

    page.setContentToLink(data.spotify_link);

    page.publishPage();
    page.closePublishPopup();
  });
});
