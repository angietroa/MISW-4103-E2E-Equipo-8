import LoginPage from "../pages/login";
import AdminProfile from "../pages/administratorProfile";
import dataAPriori from "../data-a-priori/admin_profile.json";

describe("E101 - Funcionalidad de editar perfil de administrador con contraseña de 9 caracteres", async () => {
  const loginPage = new LoginPage(cy);
  const adminProfile = new AdminProfile();

  it("Debe iniciar sesión y editar perfil de administrador con la contraseña de 9 caracteres", () => {
    loginPage.visitPage();
    loginPage.signInPage();

    adminProfile.navigateToAdminProfile();
    adminProfile.clickButton("Change password");

    adminProfile.getCurrentPassword().then((currentPassword) => {
      adminProfile.getAndWrite("Old password", currentPassword);
      adminProfile.getAndWrite("New password", dataAPriori[11].nineCharacters);
      adminProfile.getAndWrite(
        "Verify password",
        dataAPriori[11].nineCharacters
      );
    });

    adminProfile.clickButton("Change password");
    adminProfile.validateHelperText(
      "Password must be at least 10 characters long."
    );
  });
});
