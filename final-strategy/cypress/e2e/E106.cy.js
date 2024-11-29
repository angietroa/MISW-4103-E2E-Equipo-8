const LoginPage = require("../pages/login");
const ConfigPage = require("../pages/config");
const PAGE_DATAPOOL_APRIORI = require("../data-a-priori/page.json");

describe("E106 - Buscar configuración no existente a-priori", () => {
  it("E106 - Buscar configuración no existente a-priori", async () => {
    const loginPage = new LoginPage(cy);
    const configPage = new ConfigPage(cy);

    // Visitar página e iniciar sesión
    loginPage.visitPage();
    // iniciar sesión
    loginPage.signInPage();
    // ir a configuración
    configPage.goToSettings();
    // Probar filtro
    configPage.tryFilter("Timezone");
    // Validar busqueda
    configPage.validateSearch();
  });
});
