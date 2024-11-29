const LoginPage = require("../pages/login");
const ConfigPage = require("../pages/config");
const PAGE_DATAPOOL_APRIORI = require("../data-a-priori/page.json");

describe("E110 - Editar título de sitio con 10 palabras sin espacio a-priori", () => {
  const data = PAGE_DATAPOOL_APRIORI[13];
  it("E110 - Editar título de sitio con 10 palabras sin espacio a-priori", async () => {
    const loginPage = new LoginPage(cy);
    const configPage = new ConfigPage(cy);

    // Visitar página e iniciar sesión
    loginPage.visitPage();
    // iniciar sesión
    loginPage.signInPage();
    // ir a configuración
    configPage.goToSettings();
    // cargar título
    configPage.setTitle(data.big_text);
    // guardar
    configPage.save();
  });
});
