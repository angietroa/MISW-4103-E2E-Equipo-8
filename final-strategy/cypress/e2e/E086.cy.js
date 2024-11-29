const LoginPage = require("../pages/login");
const AdminProfilePage = require("../pages/administratorProfile");
const ADMIN_PROFILE_DATA_POOL_A_PRIORI = require('../data-a-priori/admin_profile.json');

describe("E086 - Editar correo de administrador invalido", () => {
  const loginPage = new LoginPage(cy);
  const adminProfilePage = new AdminProfilePage();

  it("Editar correo de administrador invalido", () => {
    //Ingresar a la página
    loginPage.visitPage();

    //Hacer login
    loginPage.signInPage();

    //Ir a perfil de administrador
    adminProfilePage.navigateToAdminProfile();

    //Obtener data a prori
    const data = ADMIN_PROFILE_DATA_POOL_A_PRIORI[15];

    //Cambiar email
    adminProfilePage.getAndWrite("Email", data.email);

    //Dar click en guardar
    adminProfilePage.clickButton("Save");

    //Error en input
    adminProfilePage.validateHelperText("Enter a valid email address");
  });
});
