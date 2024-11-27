import LoginPage from "../pages/login";
import AdminProfile from "../pages/administratorProfile";
import dataAPriori from "../data-a-priori/admin_profile.json";

describe("E101 - Funcionalidad de editar perfil de administrador con contraseña de 10 caracteres", async () => {
  const loginPage = new LoginPage(cy);
  const adminProfile = new AdminProfile();

  it("Debe iniciar sesión y editar perfil de administrador con la contraseña de 10 caracteres", () => {
    loginPage.visitPage();
    loginPage.signInPage();

    adminProfile.navigateToAdminProfile();
    adminProfile.clickButton("Change password");

    adminProfile.getCurrentPassword().then((currentPassword) => {
      adminProfile.getAndWrite("Old password", currentPassword);
      adminProfile.getAndWrite("New password", dataAPriori[12].tenCharacters);
      adminProfile.getAndWrite(
        "Verify password",
        dataAPriori[12].tenCharacters
      );
    });

    adminProfile.clickButton("Change password");
    cy.wait(3000);

    adminProfile.thereIsAButton("Change password");

    adminProfile.returnOriginalPassword(dataAPriori[12].tenCharacters);
  });
});
