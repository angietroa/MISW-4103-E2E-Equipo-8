const { faker } = require("@faker-js/faker");

const LoginPage = require("../pages/login");
const SettingsPage = require("../pages/settingsPage");

describe("E116 - Editar descripción de metadata con 10 palabras sin espacio entre ellas (a-priori)", () => {
  const loginPage = new LoginPage(cy);
  const settingsPage = new SettingsPage(cy);
  
  it("Debe iniciar sesión y crear un miembro", async () => {
    const data = settingsPage.getAPrioriData("E116");
    
    loginPage.visitPage();
    loginPage.signInPage();

    settingsPage.visit();
    settingsPage.clickOnMenu("Meta data");
    settingsPage.clickOnEdit("metadata");
    settingsPage.setMetadataDescription(data.metadata_description);
    settingsPage.clickOnSave("metadata");
  });

});
