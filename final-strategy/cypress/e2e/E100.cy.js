import LoginPage from "../pages/login";
import AdminProfile from "../pages/administratorProfile";

describe("E100 - Funcionalidad de editar perfil de administrador con la contraseña actual", async () => {
  const loginPage = new LoginPage(cy);
  const adminProfile = new AdminProfile();

  it("Debe iniciar sesión y editar perfil de administrador con la contraseña actual", () => {
    loginPage.visitPage();
    loginPage.signInPage();

    adminProfile.navigateToAdminProfile();
    adminProfile.clickButton("Change password");

    adminProfile.getCurrentPassword().then((currentPassword) => {
      adminProfile.getAndWrite("Old password", currentPassword);
      adminProfile.getAndWrite("New password", currentPassword);
      adminProfile.getAndWrite("Verify password", currentPassword);
    });

    adminProfile.clickButton("Change password");
    cy.wait(3000);

    adminProfile.thereIsAButton("Change password");
  });
});
