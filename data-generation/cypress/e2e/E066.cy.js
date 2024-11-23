const { faker } = require("@faker-js/faker");
const LoginPage = require("../pages/login");
const TagPage = require("../pages/tag");

describe("E066 - Crear un tag con nombre con solo caracteres especiales (aleatorio)", () => {
  const loginPage = new LoginPage(cy);
  const tagPage = new TagPage(cy);

  it("Crear un tag con nombre con solo caracteres especiales (aleatorio)", async () => {
    //Ingresar a la página
    loginPage.visitPage();
    loginPage.signInPage();

    //Ir al modulo de tags
    tagPage.clickOnTagMenu();

    //Dar click en nuevo tag
    tagPage.clickOnNewTag();

    //Obtener los datos a priori
    const tagName = faker.string.symbol({ min: 1, max: 191 });

    //Ingresar el nombre del tag
    tagPage.setTagName(tagName);

    //Guardar tag
    tagPage.clickOnSaveTag();

    //Ir al modulo de tags
    tagPage.clickOnTagMenu();

    //Encontrar tag creado
    tagPage.findTagNameCreated(tagName);
  });
});
