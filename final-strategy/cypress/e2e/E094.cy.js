import LoginPage from "../pages/login";
import AdminProfile from "../pages/administratorProfile";
import dataAPriori from "../data-a-priori/admin_profile.json";

describe("E094 - Funcionalidad de editar perfil de administrador con facebook invalido", async () => {
  const loginPage = new LoginPage(cy);
  const adminProfile = new AdminProfile();

  it("Debe iniciar sesión y editar perfil de administrador con facebook invalido", () => {
    loginPage.visitPage();
    loginPage.signInPage();

    adminProfile.navigateToAdminProfile();
    adminProfile.getAndWrite(
      "Facebook profile",
      dataAPriori[4].invalidFacebook
    );

    cy.get("body").click();

    adminProfile.validateHelperText(
      "The URL must be in a format like https://www.facebook.com/yourPage"
    );
  });
});
