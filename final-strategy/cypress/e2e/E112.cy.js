const LoginPage = require("../pages/login");
const ConfigPage = require("../pages/config");
const PAGE_DATAPOOL_APRIORI = require("../data-a-priori/page.json");

describe("E112 - Editar descripción de sitio con 10 palabras sin espacio a-priori", () => {
  const data = PAGE_DATAPOOL_APRIORI[15];
  it("E112 - Editar descripciónn de sitio con 10 palabras sin espacio a-priori", async () => {
    const loginPage = new LoginPage(cy);
    const configPage = new ConfigPage(cy);

    // Visitar página e iniciar sesión
    loginPage.visitPage();

    loginPage.signInPage();

    configPage.goToSettings();

    configPage.setDescription(data.big_text);

    configPage.save();
  });
});
