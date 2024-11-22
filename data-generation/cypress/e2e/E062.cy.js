const LoginPage = require("../pages/login");
const TagPage = require("../pages/tag");
const TAG_DATA_POOL_A_PRIORI = require('../data-a-priori/tag.json');

describe("E062 - Crear tag con nombre con 0 caracteres (a priori)", () => {
  const loginPage = new LoginPage(cy);
  const tagPage = new TagPage(cy);

  it("Crear tag con nombre con solo espacio en blanco (a priori)", async () => {
    //Ingresar a la página
    loginPage.visitPage();
    loginPage.signInPage();

    //Ir al modulo de tags
    tagPage.clickOnTagMenu();

    //Dar click en nuevo tag
    tagPage.clickOnNewTag();

    //Obtener los datos a priori
    const data = TAG_DATA_POOL_A_PRIORI[1];

    //Ingresar el nombre del tag
    tagPage.setTagName(data.name);

    //Guardar tag
    tagPage.clickOnSaveTag();

    //Encontrar error en input
    tagPage.findInputError();
  });
});
