const { faker } = require("@faker-js/faker");

const LoginPage = require("../pages/login");
const TagPage = require("../pages/tag");

describe("E063 - Crear tag con nombre con 192 caracteres (aleatorio)", () => {
  const loginPage = new LoginPage(cy);
  const tagPage = new TagPage(cy);

  it("Crear tag con nombre con 192 caracteres (aleatorio)", async () => {
    //Ingresar a la página
    loginPage.visitPage();
    loginPage.signInPage();

    //Ir al modulo de tags
    tagPage.clickOnTagMenu();

    //Dar click en nuevo tag
    tagPage.clickOnNewTag();

    //Obtener los datos aleatorio
    const tagName = faker.string.alpha(192);

    //Ingresar el nombre del tag
    tagPage.setTagName(tagName);

    //Guardar tag
    tagPage.clickOnSaveTag();

    //Encontrar error en input
    tagPage.findInputError();
  });
});
