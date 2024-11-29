const { faker } = require("@faker-js/faker");

const LoginPage = require("../pages/login");
const SettingsPage = require("../pages/settingsPage");

describe("E124 - Editar X profile invalido (a-priori)", () => {
  const loginPage = new LoginPage(cy);
  const settingsPage = new SettingsPage(cy);
  
  it("Debe iniciar sesión y crear un miembro", async () => {
    const data = settingsPage.getAPrioriData("E124");
    
    loginPage.visitPage();
    loginPage.signInPage();

    settingsPage.visit();
    settingsPage.clickOnMenu("Social accounts");
    settingsPage.clickOnEdit("social-accounts");
    settingsPage.setXProfile(data.x_profile);
    settingsPage.clickOnSave("social-accounts");
  });

});
