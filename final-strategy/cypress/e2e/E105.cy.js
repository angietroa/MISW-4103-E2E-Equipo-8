const LoginPage = require("../pages/login");
const ConfigPage = require("../pages/config");
const PAGE_DATAPOOL_APRIORI = require("../data-a-priori/page.json");

describe("E105 - Buscar configuración existente a-priori", () => {
  const data = PAGE_DATAPOOL_APRIORI[2];
  it("E105 - Buscar configuración existente a-priori", async () => {
    const loginPage = new LoginPage(cy);
    const configPage = new ConfigPage(cy);

    // Visitar página e iniciar sesión
    loginPage.visitPage();
    // Iniciar sesión
    loginPage.signInPage();
    // Ir a configuraciones
    configPage.goToSettings();
    // Configurar filtros
    configPage.tryFilter(data.small_text);
    // Validar filtro
    configPage.validateFilter();
  });
});
