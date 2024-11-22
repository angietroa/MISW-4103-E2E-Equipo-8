const { faker } = require("@faker-js/faker");
const LoginPage = require("../pages/login");
const TagPage = require("../pages/tag");

describe("E090 - Crear un tag con descripción de 'Facebook card' de 66 caracteres (aleatorio)", () => {
  const loginPage = new LoginPage(cy);
  const tagPage = new TagPage(cy);

  it("Crear un tag con descripción de 'Facebook card' de 66 caracteres (aleatorio)", async () => {
    //Ingresar a la página
    loginPage.visitPage();
    loginPage.signInPage();

    //Ir al modulo de tags
    tagPage.clickOnTagMenu();

    //Dar click en nuevo tag
    tagPage.clickOnNewTag();

    //Obtener los datos aleatorios
    const tagName = faker.lorem.word({ length: { min: 1, max: 191 } });
    const tagFacebookTitle = faker.lorem.word(2);
    const tagFacebookDescr = faker.string.alpha(66);

    //Ingresar el nombre del tag
    tagPage.setTagName(tagName);

    //Dar click en boton de facebook card
    tagPage.clickOnExpandFacebookCardForm();

    //Ingresar la información de facebook card
    tagPage.setFacebookCardValues(tagFacebookTitle, tagFacebookDescr);

    //Guardar tag
    tagPage.clickOnSaveTag();

    //Ir al modulo de tags
    tagPage.clickOnTagMenu();

    //Encontrar tag creado
    tagPage.findTagNameCreated(tagName);
  });
});
