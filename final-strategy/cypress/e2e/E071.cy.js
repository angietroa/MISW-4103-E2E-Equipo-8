const LoginPage = require("../pages/login");
const MembersPage = require("../pages/membersPage");

describe("E071 - Crear miembro con email de cero caracteres (a-priori)", () => {
  const loginPage = new LoginPage(cy);
  const membersPage = new MembersPage(cy);
  
  it("Debe iniciar sesión y crear un miembro", async () => {
    const data = membersPage.getAPrioriData("E071");
    
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
    membersPage.clickOnMembersMenu();
    membersPage.clickOnLeaveButton();
    membersPage.checkIfMemberNotCreated(data.name);
  });
});
