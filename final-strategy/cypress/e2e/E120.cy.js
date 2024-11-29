const { faker } = require("@faker-js/faker");

const LoginPage = require("../pages/login");
const SettingsPage = require("../pages/settingsPage");

describe("E120 - Editar descripción de Facebook Card (a-priori)", () => {
  const loginPage = new LoginPage(cy);
  const settingsPage = new SettingsPage(cy);
  
  it("Debe iniciar sesión y crear un miembro", async () => {
    const data = settingsPage.getAPrioriData("E120");
    
    loginPage.visitPage();
    loginPage.signInPage();

    settingsPage.visit();
    settingsPage.clickOnMenu("Facebook card");
    settingsPage.clickOnEdit("facebook");
    settingsPage.setFacebookDescription(data.facebook_card_description);
    settingsPage.clickOnSave("facebook");
  });

});
