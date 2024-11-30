const LoginPage = require("../pages/login");
const MembersPage = require("../pages/membersPage");

describe("E125 - Editar nombre de miembro valido (a-priori)", () => {
  const loginPage = new LoginPage(cy);
  const membersPage = new MembersPage(cy);
  
  it("Debe iniciar sesión y crear un miembro", async () => {
    const data = membersPage.getAPrioriData("E125");
    
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
    membersPage.editMember(data.email);
    membersPage.enterMemberName(data.new_name);
    membersPage.clickOnSaveButton();
    membersPage.checkIfMemberCreated(data.new_name);
    membersPage.deleteMemberByEmail(data.email);
  });
});
