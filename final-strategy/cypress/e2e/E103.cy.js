const LoginPage = require("../pages/login");
const AdminPage = require("../pages/administratorProfile");
const PAGE_DATAPOOL_APRIORI = require("../data-a-priori/page.json");

describe("E103 - Editar la contraseña por una insegura a-priori", () => {
  const data = PAGE_DATAPOOL_APRIORI[0];
  it("E103 - Editar la contraseña por una insegura a-priori", async () => {
    const loginPage = new LoginPage(cy);
    const adminPage = new AdminPage();

    // Visitar página e iniciar sesión
    loginPage.visitPage();
    //Iniciar sesión
    loginPage.signInPage();
    // Ir a perfil
    adminPage.navigateToAdminProfile();
    // Agregar contrasñeña
    adminPage.AddNewPassword(data.password);
    //Validar comportamiento
    adminPage.validatePassword();
  });
});
