const LoginPage = require("../pages/login");
const MembersPage = require("../pages/membersPage");

describe("E074 - Crear un miembro con 50 labels (a-priori)", () => {
  const loginPage = new LoginPage(cy);
  const membersPage = new MembersPage(cy);
  
  it("Debe iniciar sesión y crear un miembro", async () => {
    const data = membersPage.getAPrioriData("E074");
    
    loginPage.visitPage();
    loginPage.signInPage();

    membersPage.clickOnMembersMenu();
    membersPage.clickOnNewMemberButton();
    membersPage.enterMemberName(data.name);
    membersPage.enterMemberEmail(data.email);
    membersPage.enterMemberLabels(data.labels);
    membersPage.enterMemberNote(data.note);
    membersPage.setNewsletters(data.newsletters);
    membersPage.clickOnSaveButton();
    membersPage.checkIfMemberCreated(data.name);
    membersPage.deleteMemberByEmail(data.email);
  });
});
