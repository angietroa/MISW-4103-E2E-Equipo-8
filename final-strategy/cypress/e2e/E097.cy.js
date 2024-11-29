import LoginPage from "../pages/login";
import AdminProfile from "../pages/administratorProfile";
import dataAPriori from "../data-a-priori/admin_profile.json";

describe("E097 - Funcionalidad de editar perfil de administrador con biografia de 1 caracter", async () => {
  const loginPage = new LoginPage(cy);
  const adminProfile = new AdminProfile();

  it("Debe iniciar sesión y editar perfil de administrador con biografia de 1 caracter", () => {
    loginPage.visitPage();
    loginPage.signInPage();

    adminProfile.navigateToAdminProfile();
    adminProfile.getAndWrite("Bio", dataAPriori[7].aCharacter, "textarea");
    adminProfile.clickButton("Save");

    adminProfile.validateInputValue(
      "Bio",
      dataAPriori[7].aCharacter,
      "textarea"
    );

    adminProfile.validateHelperText(
      "Recommended: 200 characters. You‘ve used 1"
    );
  });
});
