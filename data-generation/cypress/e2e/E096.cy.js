const { faker } = require("@faker-js/faker");

const LoginPage = require("../pages/login");
const MembersPage = require("../pages/membersPage");
const TagPage = require("../pages/tag");

describe("E096 - Crear un tag con descripción de 'X card' de 126 caracteres (aleatorio)", () => {
  const loginPage = new LoginPage(cy);
  const tagPage = new TagPage(cy);
  
  it("Debe iniciar sesión y crear un tag", async () => {
    loginPage.visitPage();
    loginPage.signInPage();

    const name = faker.string.alpha(7);

    tagPage.clickOnTagMenu();
    tagPage.clickOnNewTag();
    tagPage.setTagName(name);
    tagPage.setTagColor(faker.color.rgb({ prefix: '' }).replace('#', ''));
    tagPage.setTagDescription(faker.string.alpha(50));
    tagPage.clickOnExpandXForm()
    tagPage.setXCardValues("x card e096",faker.string.alpha(126));
    tagPage.clickOnSaveTag();
    tagPage.clickOnTagMenu();
    tagPage.findTagNameCreated(name);
  });

});
