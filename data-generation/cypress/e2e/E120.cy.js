const { faker } = require("@faker-js/faker");

const LoginPage = require("../pages/login");
const PageObj = require("../pages/page");

describe("E120 - Editar pagina con descripcion de metadata de 145 caracteres (valido) (aleatorio)", () => {
  const loginPage = new LoginPage(cy);
  const pageObj = new PageObj(cy);
  
  it("Debe iniciar sesión y crear un miembro", async () => {
    loginPage.visitPage();
    loginPage.signInPage();

    const title = faker.string.alpha(15);
    const content = faker.lorem.words(15);
    const metaTitle = faker.string.alpha(5);
    const metaDescription = faker.string.alpha(145);

    pageObj.goToPageAndCreate();
    pageObj.pageTitle(title);
    pageObj.addTextToPage(content);
    pageObj.publishPage();
    pageObj.closePublishPopup();
    pageObj.visitPagesAndFindPageByTitle(title,true);
    pageObj.pageTitle(" Edit");
    pageObj.clickOnSettingsButton();
    pageObj.expandMetaDataMenu();
    pageObj.setMetaTitle(metaTitle);
    pageObj.setMetaDescription(metaDescription);
    pageObj.clickOnUpdateButton();
    pageObj.visitPagesAndFindPageByTitle(title,false);
  });
});
