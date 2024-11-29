const LoginPage = require("../pages/login");
const ConfigPage = require("../pages/config");
const PAGE_DATAPOOL_APRIORI = require("../data-a-priori/page.json");

describe("E108 - Editar un lenguaje invalido a-priori", () => {
  const data = PAGE_DATAPOOL_APRIORI[2];
  it("E108 - Editar un lenguaje invalido a-priori", async () => {
    const loginPage = new LoginPage(cy);
    const configPage = new ConfigPage(cy);

    // Visitar página e iniciar sesión
    loginPage.visitPage();
    // Iniciar sesión
    loginPage.signInPage();
    // ir a configuración
    configPage.goToSettings();
    // Configurar idioma con texto aleatorio
    configPage.SetLanguage(data.small_text);
    // guardar
    configPage.save();
  });
});
