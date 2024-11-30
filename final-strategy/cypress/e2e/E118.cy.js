const LoginPage = require("../pages/login");
const SettingsPage = require("../pages/settingsPage");

describe("E118 - Editar descripción de X Card (a-priori)", () => {
  const loginPage = new LoginPage(cy);
  const settingsPage = new SettingsPage(cy);
  
  it("Debe iniciar sesión y crear un miembro", async () => {
    const data = settingsPage.getAPrioriData("E118");
    
    loginPage.visitPage();
    loginPage.signInPage();

    settingsPage.visit();
    settingsPage.clickOnMenu("X card");
    settingsPage.clickOnEdit("twitter");
    settingsPage.setXCardDescription(data.x_card_description);
    settingsPage.clickOnSave("twitter");
  });

});
