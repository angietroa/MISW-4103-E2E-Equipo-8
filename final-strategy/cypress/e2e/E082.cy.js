const LoginPage = require("../pages/login");
const AuthenticationPage = require("../pages/authentication");
const AUTH_DATA_POOL_A_PRIORI = require('../data-a-priori/authentication.json');

describe("E082 - Cargar correo invalido y contraseña invalida (a priori)", () => {
  const loginPage = new LoginPage(cy);
  const authenticationPage = new AuthenticationPage(cy);

  it("Cargar correo invalido y contraseña invalida (a priori)", async () => {
    //Ingresar a la página
    loginPage.visitPage();

    //Obtener data a priori
    const data = AUTH_DATA_POOL_A_PRIORI[5];

    //Ingresar correo
    authenticationPage.setEmail(data.email);

    //Ingresar contraseña
    authenticationPage.setPassword(data.password);

    //Dar click en sign-in
    authenticationPage.clickOnSignIn();

    //Encontrar error en botón de autenticación
    authenticationPage.findAuthenticationButtonError();
  });
});
