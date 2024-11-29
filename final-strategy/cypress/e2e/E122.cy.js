const { faker } = require("@faker-js/faker");

const LoginPage = require("../pages/login");
const SettingsPage = require("../pages/settingsPage");

describe("E122 - Editar facebook profile invalido (a-priori)", () => {
  const loginPage = new LoginPage(cy);
  const settingsPage = new SettingsPage(cy);
  
  it("Debe iniciar sesión y crear un miembro", async () => {
    const data = settingsPage.getAPrioriData("E122");
    
    loginPage.visitPage();
    loginPage.signInPage();

    settingsPage.visit();
    settingsPage.clickOnMenu("Social accounts");
    settingsPage.clickOnEdit("social-accounts");
    settingsPage.setFacebookProfile(data.facebook_profile);
    settingsPage.clickOnSave("social-accounts");
  });

});
