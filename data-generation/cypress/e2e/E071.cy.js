const LoginPage = require("../pages/login");
const TagPage = require("../pages/tag");
const TAG_DATA_POOL_PSEUDO_RANDOM_ENDPOINT = "https://my.api.mockaroo.com/tags.json?key=3ef4d1a0";

describe("E071 - Crear un tag con color invalido (pseudo-aleatorio)", () => {
  const loginPage = new LoginPage(cy);
  const tagPage = new TagPage(cy);

  beforeEach(() => {
    cy.request(TAG_DATA_POOL_PSEUDO_RANDOM_ENDPOINT).as('tagData');
  });

  it("Crear un tag con color invalido (pseudo-aleatorio)", async () => {
    //Ingresar a la página
    loginPage.visitPage();
    loginPage.signInPage();

    //Ir al modulo de tags
    tagPage.clickOnTagMenu();

    //Dar click en nuevo tag
    tagPage.clickOnNewTag();

    //Obtener los datos pseudo-aleatorio
    cy.get('@tagData').then(res => {
      //Ingresar el nombre del tag
      tagPage.setTagName(res.body.name);

      //Ingresar el color del tag
      tagPage.setTagColor(res.body.color_invalid);

      //Guardar tag
      tagPage.clickOnSaveTag();

      //Encontrar error en input
      tagPage.findInputError();
    });
  });
});
