const LoginPage = require("../pages/login");
const ConfigPage = require("../pages/config");
const PAGE_DATAPOOL_APRIORI = require("../data-a-priori/page.json");

describe("E113 - Editar descripción de metadata con 10 palabras con espacio a-priori", () => {
  const data = PAGE_DATAPOOL_APRIORI[15];
  it("E113 - Editar descripción de metadata con 10 palabras con espacio a-priori", async () => {
    const loginPage = new LoginPage(cy);
    const configPage = new ConfigPage(cy);

    // Visitar página e iniciar sesión
    loginPage.visitPage();

    loginPage.signInPage();

    configPage.goToSettings();

    configPage.setMetadataDescription(data.title);

    configPage.save();
  });
});
