const LoginPage = require("../pages/login");
const AdminProfilePage = require("../pages/administratorProfile");
const ADMIN_PROFILE_DATA_POOL_A_PRIORI = require('../data-a-priori/admin_profile.json');

describe("E087 - Editar 'slug' valido", () => {
  const loginPage = new LoginPage(cy);
  const adminProfilePage = new AdminProfilePage();

  it("Editar 'slug' valido", () => {
    //Ingresar a la página
    loginPage.visitPage();

    //Hacer login
    loginPage.signInPage();

    //Ir a perfil de administrador
    adminProfilePage.navigateToAdminProfile();

    //Obtener data a prori
    const data = ADMIN_PROFILE_DATA_POOL_A_PRIORI[16];

    //Cambiar slug
    adminProfilePage.getAndWrite("Slug", data.slug);

    //Dar click en guardar
    adminProfilePage.clickButton("Save");
  });
});
