import LoginPage from "../pages/login";
import PageObj from "../pages/page";
const { faker } = require("@faker-js/faker");

describe("E037 - Crear página con markdown valido", () => {
  it("E037 - Crear página con markdown valido", () => {
    const loginPage = new LoginPage(cy);
    const page = new PageObj(cy);

    loginPage.visitPage();
    loginPage.signInPage();

    page.goToPageAndCreate();

    page.addPageElement("Markdown");
    page.setContentToMarkdown(faker.lorem.paragraphs());

    page.pageTitle(faker.lorem.word());

    page.publishPage();
    page.closePublishPopup();
  });
});
