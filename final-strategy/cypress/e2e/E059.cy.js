const { faker } = require("@faker-js/faker");

const LoginPage = require("../pages/login");
const TagPage = require("../pages/tag");

describe("E059 - Crear un tag con descripción de \"Facebook card\" de 1 caracter (a-priori)", () => {
  const loginPage = new LoginPage(cy);
  const tagPage = new TagPage(cy);
  
  it("Debe iniciar sesión y crear un tag", async () => {
    const data = tagPage.getAPrioriData("E059");

    loginPage.visitPage();
    loginPage.signInPage();

    tagPage.clickOnTagMenu();
    tagPage.clickOnNewTag();
    tagPage.setTagName(data.name);
    tagPage.setTagColor(data.color);
    tagPage.setTagDescription(data.description);
    tagPage.clickOnExpandFacebookCardForm();
    tagPage.setFacebookCardValues(data.facebook_title,data.facebook_description);
    tagPage.clickOnSaveTag();
    tagPage.clickOnTagMenu();
    tagPage.findTagNameCreated(data.name);
  });

});
