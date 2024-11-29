const LoginPage = require("../pages/login");
const ConfigPage = require("../pages/config");
const PAGE_DATAPOOL_APRIORI = require("../data-a-priori/page.json");

describe("E109 - Editar título de sitio con 10 palabras con espacio entre ellas a-priori", () => {
  const data = PAGE_DATAPOOL_APRIORI[13];
  it("E109 - Editar título de sitio con 10 palabras con espacio entre ellas a-priori", async () => {
    const loginPage = new LoginPage(cy);
    const configPage = new ConfigPage(cy);

    // Visitar página e iniciar sesión
    loginPage.visitPage();

    loginPage.signInPage();

    configPage.goToSettings();

    configPage.setTitle(data.title);

    configPage.save();
  });
});
