const LoginPage = require("../pages/login");
const AdminPage = require("../pages/administratorProfile");
const PAGE_DATAPOOL_APRIORI = require("../data-a-priori/page.json");

describe("E104 - Editar la contraseña por una insegura a-priori", () => {
  const data = PAGE_DATAPOOL_APRIORI[1];
  it("E104 - Editar la contraseña por una insegura a-priori", async () => {
    const loginPage = new LoginPage(cy);
    const adminPage = new AdminPage();

    // Visitar página e iniciar sesión
    loginPage.visitPage();

    loginPage.signInPage();

    adminPage.navigateToAdminProfile();

    adminPage.AddNewPassword(data.password);

    adminPage.validatePassword();
  });
});
