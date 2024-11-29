const LoginPage = require("../pages/login");
const AdminProfilePage = require("../pages/administratorProfile");
const ADMIN_PROFILE_DATA_POOL_A_PRIORI = require('../data-a-priori/admin_profile.json');

describe("E084 - Editar nombre de administrador", () => {
  const loginPage = new LoginPage(cy);
  const adminProfilePage = new AdminProfilePage();

  it("Editar nombre de administrador", () => {
    //Ingresar a la página
    loginPage.visitPage();

    //Hacer login
    loginPage.signInPage();

    //Ir a perfil de administrador
    adminProfilePage.navigateToAdminProfile();

    //Obtener data a prori
    const data = ADMIN_PROFILE_DATA_POOL_A_PRIORI[13];

    //Cambiar nombre
    adminProfilePage.getAndWrite("Full name", data.name);

    //Dar click en guardar
    adminProfilePage.clickButton("Save");

    //Dar click en cerrar
    adminProfilePage.clickButton("Close");

    //Cerrar configuraciones generales
    adminProfilePage.clickOnDoneButton();

    //Validar nombre de admin
    adminProfilePage.validateAdminName(data.name);
  });
});
