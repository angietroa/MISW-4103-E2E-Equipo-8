const LoginPage = require("../pages/login");
const TagPage = require("../pages/tag");
const TAG_DATA_POOL_A_PRIORI = require('../data-a-priori/tag.json');

describe("E076 - Crear un tag con descripcion de 501 caracteres (a priori)", () => {
  const loginPage = new LoginPage(cy);
  const tagPage = new TagPage(cy);

  it("Crear un tag con descripcion de 501 caracteres (a priori)", async () => {
    //Ingresar a la página
    loginPage.visitPage();
    loginPage.signInPage();

    //Ir al modulo de tags
    tagPage.clickOnTagMenu();

    //Dar click en nuevo tag
    tagPage.clickOnNewTag();

    //Obtener los datos a priori
    const data = TAG_DATA_POOL_A_PRIORI[7];

    //Ingresar el nombre del tag
    tagPage.setTagName(data.name);

    //Ingresar la descripción del tag
    tagPage.setTagDescription(data.description);

    //Guardar tag
    tagPage.clickOnSaveTag();

    //Encontrar boton de error
    tagPage.findButtonError();
  });
});
