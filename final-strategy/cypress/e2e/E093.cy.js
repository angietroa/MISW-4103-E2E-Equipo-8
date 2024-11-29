import LoginPage from "../pages/login";
import AdminProfile from "../pages/administratorProfile";
import dataAPriori from "../data-a-priori/admin_profile.json";

describe("E093 - Funcionalidad de editar perfil de administrador con facebook valido", async () => {
  const loginPage = new LoginPage(cy);
  const adminProfile = new AdminProfile();

  it("Debe iniciar sesión y editar perfil de administrador con facebook valido", () => {
    loginPage.visitPage();
    loginPage.signInPage();

    adminProfile.navigateToAdminProfile();
    adminProfile.getAndWrite("Facebook profile", dataAPriori[3].facebook);
    adminProfile.clickButton("Save");

    adminProfile.validateInputValue(
      "Facebook profile",
      dataAPriori[3].facebook
    );

    adminProfile.validateHelperText("URL of your personal Facebook Profile");
  });
});
