const { faker } = require("@faker-js/faker");

const LoginPage = require("../pages/login");
const MembersPage = require("../pages/membersPage");

describe("E104 - Crear miembro con email válido (válido) (pseudo-aleatorio)", () => {
  const loginPage = new LoginPage(cy);
  const membersPage = new MembersPage(cy);
  
  it("Debe iniciar sesión y crear un miembro", async () => {
    membersPage.getPseudoRandomData("E104").then((data) => {
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
});
