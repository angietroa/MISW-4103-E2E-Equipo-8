const { faker } = require("@faker-js/faker");

const LoginPage = require("../pages/login");
const TagPage = require("../pages/tag");

describe("E066 - Crear un tag con descripción de \"X card\" de 126 caracteres (a-priori)", () => {
  const loginPage = new LoginPage(cy);
  const tagPage = new TagPage(cy);
  
  it("Debe iniciar sesión y crear un tag", async () => {
    const data = tagPage.getAPrioriData("E066");

    loginPage.visitPage();
    loginPage.signInPage();

    tagPage.clickOnTagMenu();
    tagPage.clickOnNewTag();
    tagPage.setTagName(data.name);
    tagPage.setTagColor(data.color);
    tagPage.setTagDescription(data.description);
    tagPage.clickOnExpandXForm();
    tagPage.setXCardValues(data.x_title,data.x_description);
    tagPage.clickOnSaveTag();
    tagPage.clickOnTagMenu();
    tagPage.findTagNameCreated(data.name);
  });

});
