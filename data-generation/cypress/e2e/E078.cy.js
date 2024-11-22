const { faker, fa } = require("@faker-js/faker");
const LoginPage = require("../pages/login");
const TagPage = require("../pages/tag");

describe("E075 - Crear un tag con descripcion de 501 caracteres (aleatorio)", () => {
  const loginPage = new LoginPage(cy);
  const tagPage = new TagPage(cy);

  it("Crear un tag con descripcion de 501 caracteres (aleatorio)", async () => {
    //Ingresar a la página
    loginPage.visitPage();
    loginPage.signInPage();

    //Ir al modulo de tags
    tagPage.clickOnTagMenu();

    //Dar click en nuevo tag
    tagPage.clickOnNewTag();

    //Obtener los datos a priori
    const tagName = faker.lorem.word({ length: { min: 1, max: 191 } });
    const tagDescription = faker.string.alpha(501);

    //Ingresar el nombre del tag
    tagPage.setTagName(tagName);

    //Ingresar la descripción del tag
    tagPage.setTagDescription(tagDescription);

    //Guardar tag
    tagPage.clickOnSaveTag();

    //Guardar tag
    tagPage.clickOnSaveTag();

    //Encontrar boton de error
    tagPage.findButtonError();
  });
});
