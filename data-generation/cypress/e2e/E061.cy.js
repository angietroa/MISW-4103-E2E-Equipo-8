const LoginPage = require("../pages/login");
const TagPage = require("../pages/tag");

describe("E061 - Crear tag con nombre entre 1 caracter y 191 caracteres (a priori)", () => {
  const loginPage = new LoginPage(cy);
  const tagPage = new TagPage(cy);

  it("Crear tag con nombre entre 1 caracter y 191 caracteres (a priori)", async () => {
    //Ingresar a la página
    loginPage.visitPage();
    loginPage.signInPage();

    //Ir al modulo de tags
    tagPage.clickOnTagMenu();

    //Dar click en nuevo tag
    tagPage.clickOnNewTag();

    //Obtener los datos a priori
    cy.fixture("data-priori").then(data => {
      //Ingresar el nombre del tag
      tagPage.setTagName(data.tagName);

      //Guardar tag
      tagPage.clickOnSaveTag();

      //Ir al modulo de tags
      tagPage.clickOnTagMenu();

      //Encontrar tag creado
      tagPage.findTagNameCreated(data.tagName);
    });
  });
});
