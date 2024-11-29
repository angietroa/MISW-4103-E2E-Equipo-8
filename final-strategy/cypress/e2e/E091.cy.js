import LoginPage from "../pages/login";
import AdminProfile from "../pages/administratorProfile";
import dataAPriori from "../data-a-priori/admin_profile.json";

describe("E091 - Funcionalidad de editar perfil de administrador con website valido", async () => {
  const loginPage = new LoginPage(cy);
  const adminProfile = new AdminProfile();

  it("Debe iniciar sesión y editar perfil de administrador con website valido", () => {
    loginPage.visitPage();
    loginPage.signInPage();

    adminProfile.navigateToAdminProfile();
    adminProfile.getAndWrite("Website", dataAPriori[1].website);
    adminProfile.clickButton("Save");

    adminProfile.validateInputValue("Website", dataAPriori[1].website);
    adminProfile.validateHelperText(
      "Have a website or blog other than this one? Link it!"
    );
  });
});
