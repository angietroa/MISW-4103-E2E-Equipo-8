import LoginPage from "../pages/login";
import AdminProfile from "../pages/administratorProfile";
import dataAPriori from "../data-a-priori/admin_profile.json";

describe("E099 - Funcionalidad de editar perfil de administrador con biografia de 201 caracteres", async () => {
  const loginPage = new LoginPage(cy);
  const adminProfile = new AdminProfile();

  it("Debe iniciar sesión y editar perfil de administrador con biografia de 201 caracteres", () => {
    loginPage.visitPage();
    loginPage.signInPage();

    adminProfile.navigateToAdminProfile();
    adminProfile.getAndWrite(
      "Bio",
      dataAPriori[8].twoHundredAndOneCharacters,
      "textarea"
    );
    adminProfile.clickButton("Save");

    adminProfile.thereIsAButton("Retry");
    adminProfile.validateHelperText("Bio is too long");
  });
});
