import LoginPage from "../pages/login";
import AdminProfile from "../pages/administratorProfile";
import dataAPriori from "../data-a-priori/admin_profile.json";

describe("E090 - Funcionalidad de editar perfil de administrador con ubicación invalida", async () => {
  const loginPage = new LoginPage(cy);
  const adminProfile = new AdminProfile();

  it("Debe iniciar sesión y editar perfil de administrador con ubicación invalidad", () => {
    loginPage.visitPage();
    loginPage.signInPage();

    adminProfile.navigateToAdminProfile();
    adminProfile.getAndWrite("Location", dataAPriori[0].paragraph);
    adminProfile.clickButton("Save");

    adminProfile.thereIsAButton("Retry");
    adminProfile.validateHelperText("Location is too long");
  });
});
