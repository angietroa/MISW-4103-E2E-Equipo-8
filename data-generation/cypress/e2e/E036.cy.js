import LoginPage from "../pages/login";
import PageObj from "../pages/page";
const PAGE_DATAPOOL_APRIORI = require("../data-a-priori/page.json");

describe("E036 - Crear página con markdown valido a-priori", () => {
  const data = PAGE_DATAPOOL_APRIORI[6];
  it("E036 - Crear página con markdown valido", () => {
    const loginPage = new LoginPage(cy);
    const page = new PageObj(cy);

    loginPage.visitPage();
    loginPage.signInPage();

    page.goToPageAndCreate();

    page.addPageElement("Markdown");

    page.setContentToMarkdown(data.markdown);

    page.pageTitle(data.title);

    page.publishPage();
    page.closePublishPopup();
  });
});
