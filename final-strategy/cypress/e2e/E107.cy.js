const LoginPage = require("../pages/login");
const ConfigPage = require("../pages/config");
const PAGE_DATAPOOL_APRIORI = require("../data-a-priori/page.json");

describe("E107 - Editar un lenguaje valido a-priori", () => {
  const data = PAGE_DATAPOOL_APRIORI[2];
  it("E107 - Editar un lenguaje valido a-priori", async () => {
    const loginPage = new LoginPage(cy);
    const configPage = new ConfigPage(cy);

    // Visitar página e iniciar sesión
    loginPage.visitPage();
    // Iniciar sesión
    loginPage.signInPage();
    // Ir a configuración
    configPage.goToSettings();
    // Configurar idioma
    configPage.SetLanguage("es");
    // Guardar
    configPage.save();
  });
});
