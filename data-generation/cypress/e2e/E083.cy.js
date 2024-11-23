const LoginPage = require("../pages/login");
const TagPage = require("../pages/tag");
const TAG_DATA_POOL_A_PRIORI = require('../data-a-priori/tag.json');

describe("E083 - Crear un tag con descripción de metadata de 1 caracterer (a priori)", () => {
  const loginPage = new LoginPage(cy);
  const tagPage = new TagPage(cy);

  it("Crear un tag con descripción de metadata de 1 caracterer  (a priori)", async () => {
    //Ingresar a la página
    loginPage.visitPage();
    loginPage.signInPage();

    //Ir al modulo de tags
    tagPage.clickOnTagMenu();

    //Dar click en nuevo tag
    tagPage.clickOnNewTag();

    //Obtener los datos a priori
    const data = TAG_DATA_POOL_A_PRIORI[11];

    //Ingresar el nombre del tag
    tagPage.setTagName(data.name);

    //Dar click en boton de metadata
    tagPage.clickOnExpandMetadataForm();

    //Ingresar la información de metadata
    tagPage.setTagMetadataValues(data.metadata_title, data.metadata_description, data.metadata_url);

    //Guardar tag
    tagPage.clickOnSaveTag();

    //Ir al modulo de tags
    tagPage.clickOnTagMenu();

    //Encontrar tag creado
    tagPage.findTagNameCreated(data.name);
  });
});
