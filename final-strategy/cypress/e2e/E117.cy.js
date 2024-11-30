const LoginPage = require("../pages/login");
const SettingsPage = require("../pages/settingsPage");

describe("E117 - Editar titulo de X Card (a-priori)", () => {
  const loginPage = new LoginPage(cy);
  const settingsPage = new SettingsPage(cy);
  
  it("Debe iniciar sesión y crear un miembro", async () => {
    const data = settingsPage.getAPrioriData("E117");
    
    loginPage.visitPage();
    loginPage.signInPage();

    settingsPage.visit();
    settingsPage.clickOnMenu("X card");
    settingsPage.clickOnEdit("twitter");
    settingsPage.setXCardTitle(data.x_card_title);
    settingsPage.clickOnSave("twitter");
  });

});
