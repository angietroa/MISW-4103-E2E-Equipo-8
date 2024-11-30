const LoginPage = require("../pages/login");
const PageObj = require("../pages/page");

describe("E075 - Editar pagina con titulo de metadata de 61 caracteres (a-priori)", () => {
  const loginPage = new LoginPage(cy);
  const pageObj = new PageObj(cy);
  
  it("Debe iniciar sesión y crear un miembro", async () => {
    const data = pageObj.getAPrioriData("E075");

    loginPage.visitPage();
    loginPage.signInPage();

    pageObj.goToPageAndCreate();
    pageObj.pageTitle(data.title);
    pageObj.addTextToPage(data.text);
    pageObj.publishPage();
    pageObj.closePublishPopup();
    pageObj.visitPagesAndFindPageByTitle(data.title,true);
    pageObj.clickOnSettingsButton();
    pageObj.expandMetaDataMenu();
    pageObj.setMetaTitle(data.metadata_title);
    pageObj.setMetaDescription(data.metadata_description);
    pageObj.clickOnUpdateButton();
    pageObj.visitPagesAndFindPageByTitle(data.title,false);
  });
});
