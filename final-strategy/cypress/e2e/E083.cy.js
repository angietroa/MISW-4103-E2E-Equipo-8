const LoginPage = require("../pages/login");
const AuthenticationPage = require("../pages/authentication");

describe("E083 - Cargar correo valido y contraseña valida (a priori)", () => {
  const loginPage = new LoginPage(cy);
  const authenticationPage = new AuthenticationPage(cy);

  it("Cargar correo valido y contraseña valida(a priori)", async () => {
    //Ingresar a la página
    loginPage.visitPage();

    //Obtener data a priori
    cy.fixture("properties").then(props => {
      //Ingresar correo
      authenticationPage.setEmail(props.username);

      //Ingresar contraseña
      authenticationPage.setPassword(props.password);

      //Dar click en sign-in
      authenticationPage.clickOnSignIn();

      //Ver pagina de inicio 
      authenticationPage.findSiteTitle();
    });
  });
});
