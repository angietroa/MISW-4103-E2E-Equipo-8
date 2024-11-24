const { faker } = require("@faker-js/faker");

const LoginPage = require("../pages/login");
const MembersPage = require("../pages/membersPage");
const TagPage = require("../pages/tag");

describe("E095 - Crear un tag con descripción de 'X card' de 1 caracter (pseudo-aleatorio)", () => {
  const loginPage = new LoginPage(cy);
  const tagPage = new TagPage(cy);
  
  it("Debe iniciar sesión y crear un tag", async () => {
    tagPage.getPseudoRandomData("E095").then((data) => {
      loginPage.visitPage();
      loginPage.signInPage();

      tagPage.clickOnTagMenu();
      tagPage.clickOnNewTag();
      tagPage.setTagName(data.name);
      tagPage.setTagColor(data.color);
      tagPage.setTagDescription(data.description);
      tagPage.clickOnExpandXForm()
      tagPage.setXCardValues(data.x_title,data.x_description);
      tagPage.clickOnSaveTag();
      tagPage.clickOnTagMenu();
      tagPage.findTagNameCreated(data.name);
    });
  });

});
