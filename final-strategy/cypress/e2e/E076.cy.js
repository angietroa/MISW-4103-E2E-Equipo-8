const { faker } = require("@faker-js/faker");

const LoginPage = require("../pages/login");
const PageObj = require("../pages/page");

describe("E076 - Editar pagina con descripcion de metadata de 145 caracteres (a-priori)", () => {
  const loginPage = new LoginPage(cy);
  const pageObj = new PageObj(cy);
  
  it("Debe iniciar sesión y crear un miembro", async () => {
    const data = pageObj.getAPrioriData("E076");

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
