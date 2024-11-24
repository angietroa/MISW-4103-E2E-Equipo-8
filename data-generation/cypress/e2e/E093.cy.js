const { faker } = require("@faker-js/faker");

const LoginPage = require("../pages/login");
const MembersPage = require("../pages/membersPage");
const TagPage = require("../pages/tag");

describe("E093 - Crear un tag con titulo de 'X card' de 71 caracteres (aleatorio)", () => {
  const loginPage = new LoginPage(cy);
  const tagPage = new TagPage(cy);
  
  it("Debe iniciar sesión y crear un tag", async () => {
    loginPage.visitPage();
    loginPage.signInPage();

    const name = faker.string.alpha(7);
    const color = faker.color.rgb({ prefix: '' }).replace('#', '');

    tagPage.clickOnTagMenu();
    tagPage.clickOnNewTag();
    tagPage.setTagName(name);
    tagPage.setTagColor(color);
    tagPage.setTagDescription(name + " description");
    tagPage.clickOnExpandXForm()
    tagPage.setXCardValues(faker.string.alpha(71),"");
    tagPage.clickOnSaveTag();
    tagPage.clickOnTagMenu();
    tagPage.findTagNameCreated(name);
  });

});
