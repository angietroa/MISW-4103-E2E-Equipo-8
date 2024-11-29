const LoginPage = require("../pages/login");
const AdminProfilePage = require("../pages/administratorProfile");
const ADMIN_PROFILE_DATA_POOL_A_PRIORI = require('../data-a-priori/admin_profile.json');

describe("E085 - Editar correo de administrador valido", () => {
  const loginPage = new LoginPage(cy);
  const adminProfilePage = new AdminProfilePage();

  it("Editar correo de administrador valido", () => {
    //Ingresar a la página
    loginPage.visitPage();

    //Hacer login
    loginPage.signInPage();

    //Ir a perfil de administrador
    adminProfilePage.navigateToAdminProfile();

    //Obtener data a prori
    const data = ADMIN_PROFILE_DATA_POOL_A_PRIORI[14];

    //Cambiar email
    adminProfilePage.getAndWrite("Email", data.email);

    //Dar click en guardar
    adminProfilePage.clickButton("Save");

    //Dar click en cerrar
    adminProfilePage.clickButton("Close");

    //Cerrar configuraciones generales
    adminProfilePage.clickOnDoneButton();

    //Validar correo de admin
    adminProfilePage.validateAdminMail(data.email);

    //Restaurar email anterior
    cy.fixture("properties").then(props => {
      //Ir a perfil de administrador
     adminProfilePage.restoreMail(props.username);
    });
  });
});
