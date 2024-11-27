import LoginPage from "../pages/login";
import AdminProfile from "../pages/administratorProfile";
import dataAPriori from "../data-a-priori/admin_profile.json";

describe("E092 - Funcionalidad de editar perfil de administrador con website invalido", async () => {
  const loginPage = new LoginPage(cy);
  const adminProfile = new AdminProfile();

  it("Debe iniciar sesión y editar perfil de administrador con website invalido", () => {
    loginPage.visitPage();
    loginPage.signInPage();

    adminProfile.navigateToAdminProfile();
    adminProfile.getAndWrite("Website", dataAPriori[2].invalidUrl);
    adminProfile.clickButton("Save");

    adminProfile.thereIsAButton("Retry");
    adminProfile.validateHelperText("Enter a valid URL");
  });
});
