const { faker, fa } = require("@faker-js/faker");
const LoginPage = require("../pages/login");
const TagPage = require("../pages/tag");

describe("E075 - Crear un tag con una descripción entre 1 y 500 caracteres (aleatorio)", () => {
  const loginPage = new LoginPage(cy);
  const tagPage = new TagPage(cy);

  it("Crear un tag con una descripción entre 1 y 500 caracteres (aleatorio)", async () => {
    //Ingresar a la página
    loginPage.visitPage();
    loginPage.signInPage();

    //Ir al modulo de tags
    tagPage.clickOnTagMenu();

    //Dar click en nuevo tag
    tagPage.clickOnNewTag();

    //Obtener los datos a priori
    const tagName = faker.lorem.word({ length: { min: 1, max: 191 } });
    const tagDescription = faker.string.alpha({ length: { min: 1, max: 500 } });

    //Ingresar el nombre del tag
    tagPage.setTagName(tagName);

    //Ingresar la descripción del tag
    tagPage.setTagDescription(tagDescription);

    //Guardar tag
    tagPage.clickOnSaveTag();

    //Ir al modulo de tags
    tagPage.clickOnTagMenu();

    //Encontrar tag creado
    tagPage.findTagNameCreated(tagName);
  });
});
