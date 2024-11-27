import LoginPage from "../pages/login";
import AdminProfile from "../pages/administratorProfile";
import dataAPriori from "../data-a-priori/admin_profile.json";

describe("E098 - Funcionalidad de editar perfil de administrador con biografia de 200 caracteres", async () => {
  const loginPage = new LoginPage(cy);
  const adminProfile = new AdminProfile();

  it("Debe iniciar sesión y editar perfil de administrador con biografia de 200 caracteres", () => {
    loginPage.visitPage();
    loginPage.signInPage();

    adminProfile.navigateToAdminProfile();
    adminProfile.getAndWrite(
      "Bio",
      dataAPriori[8].twoHundredCharacters,
      "textarea"
    );
    adminProfile.clickButton("Save");

    adminProfile.validateInputValue(
      "Bio",
      dataAPriori[8].twoHundredCharacters,
      "textarea"
    );

    adminProfile.validateHelperText(
      "Recommended: 200 characters. You‘ve used 200"
    );
  });
});
