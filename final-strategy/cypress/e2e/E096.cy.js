import LoginPage from "../pages/login";
import AdminProfile from "../pages/administratorProfile";
import dataAPriori from "../data-a-priori/admin_profile.json";

describe("E096 - Funcionalidad de editar perfil de administrador con twitter (x) invalido", async () => {
  const loginPage = new LoginPage(cy);
  const adminProfile = new AdminProfile();

  it("Debe iniciar sesión y editar perfil de administrador con twitter (x) invalido", () => {
    loginPage.visitPage();
    loginPage.signInPage();

    adminProfile.navigateToAdminProfile();
    adminProfile.getAndWrite(
      "X (formerly Twitter) profile",
      dataAPriori[6].invalidUrl
    );

    cy.get("body").click();

    adminProfile.validateRedSpan();
  });
});
