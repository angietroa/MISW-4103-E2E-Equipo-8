const LoginPage = require("../pages/login");
const SettingsPage = require("../pages/settingsPage");

describe("E119 - Editar titulo de Facebook Card (a-priori)", () => {
  const loginPage = new LoginPage(cy);
  const settingsPage = new SettingsPage(cy);
  
  it("Debe iniciar sesión y crear un miembro", async () => {
    const data = settingsPage.getAPrioriData("E119");
    
    loginPage.visitPage();
    loginPage.signInPage();

    settingsPage.visit();
    settingsPage.clickOnMenu("Facebook card");
    settingsPage.clickOnEdit("facebook");
    settingsPage.setFacebookTitle(data.facebook_card_title);
    settingsPage.clickOnSave("facebook");
  });

});
