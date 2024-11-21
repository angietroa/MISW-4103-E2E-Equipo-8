const { faker } = require("@faker-js/faker");

const LoginPage = require("../pages/login");
const TagPage = require("../pages/tag");

describe("E062 - Crear tag con nombre entre 1 caracter y 191 caracteres (aleatorio)", () => {
  const loginPage = new LoginPage(cy);
  const tagPage = new TagPage(cy);

  it("Crear tag con nombre entre 1 caracter y 191 caracteres (aleatorio)", async () => {
    //Ingresar a la página
    loginPage.visitPage();
    loginPage.signInPage();

    //Ir al modulo de tags
    tagPage.clickOnTagMenu();

    //Dar click en nuevo tag
    tagPage.clickOnNewTag();

    //Obtener los datos aleatorio
    const options = { length: { min: 1, max: 191 } };
    const tagName = faker.helpers.arrayElement([
      faker.string.alphanumeric(options),
      faker.string.alpha(options),
      faker.string.numeric(options),
    ]);

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
