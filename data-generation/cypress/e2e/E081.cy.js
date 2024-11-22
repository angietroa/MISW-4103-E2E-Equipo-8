const { faker, fa } = require("@faker-js/faker");
const LoginPage = require("../pages/login");
const TagPage = require("../pages/tag");

describe("E081 - Crear un tag con titulo de metadata de 71 caracteres (aleatorio)", () => {
  const loginPage = new LoginPage(cy);
  const tagPage = new TagPage(cy);

  it("Crear un tag con titulo de metadata de 71 caracteres (aleatorio)", async () => {
    //Ingresar a la página
    loginPage.visitPage();
    loginPage.signInPage();

    //Ir al modulo de tags
    tagPage.clickOnTagMenu();

    //Dar click en nuevo tag
    tagPage.clickOnNewTag();

    //Obtener los datos aleatorios
    const tagName = faker.lorem.word({ length: { min: 1, max: 191 } });
    const tagMetadataTitle = faker.string.alpha(71);
    const tagMetadataDesc = faker.lorem.paragraph();
    const tagMetadataUrl = faker.image.url();

    //Ingresar el nombre del tag
    tagPage.setTagName(tagName);

    //Dar click en boton de metadata
    tagPage.clickOnExpandMetadataForm();

    //Ingresar la información de metadata
    tagPage.setTagMetadataValues(tagMetadataTitle, tagMetadataDesc, tagMetadataUrl);

    //Guardar tag
    tagPage.clickOnSaveTag();

    //Guardar tag
    tagPage.clickOnSaveTag();

    //Ir al modulo de tags
    tagPage.clickOnTagMenu();

    //Encontrar tag creado
    tagPage.findTagNameCreated(tagName);
  });
});
