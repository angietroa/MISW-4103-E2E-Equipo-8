import LoginPage from "../pages/login";
import AdminProfile from "../pages/administratorProfile";
import dataAPriori from "../data-a-priori/admin_profile.json";

describe("E095 - Funcionalidad de editar perfil de administrador con twitter (x) valido", async () => {
  const loginPage = new LoginPage(cy);
  const adminProfile = new AdminProfile();

  it("Debe iniciar sesión y editar perfil de administrador con twitter (x) valido", () => {
    loginPage.visitPage();
    loginPage.signInPage();

    adminProfile.navigateToAdminProfile();
    adminProfile.getAndWrite(
      "X (formerly Twitter) profile",
      dataAPriori[5].twitter
    );
    adminProfile.clickButton("Save");

    adminProfile.validateInputValue(
      "X (formerly Twitter) profile",
      dataAPriori[5].twitter
    );

    adminProfile.validateHelperText("URL of your X profile");
  });
});
