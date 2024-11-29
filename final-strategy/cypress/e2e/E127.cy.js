const { faker } = require("@faker-js/faker");

const LoginPage = require("../pages/login");
const MembersPage = require("../pages/membersPage");

describe("E127 - Agregar dos labels de 200 caracteres cada uno (a-priori)", () => {
  const loginPage = new LoginPage(cy);
  const membersPage = new MembersPage(cy);
  
  it("Debe iniciar sesión y crear un miembro", async () => {
    const data = membersPage.getAPrioriData("E127");
    
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
    membersPage.enterMemberLabels(data.new_labels);
    membersPage.clickOnSaveButton();
    membersPage.checkIfMemberCreated(data.name);
    membersPage.deleteMemberByEmail(data.email);
  });
});
