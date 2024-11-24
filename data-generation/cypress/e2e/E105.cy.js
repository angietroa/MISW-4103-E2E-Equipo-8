const { faker } = require("@faker-js/faker");

const LoginPage = require("../pages/login");
const MembersPage = require("../pages/membersPage");

describe("E105 - Crear miembro con email válido (válido) (aleatorio)", () => {
  const loginPage = new LoginPage(cy);
  const membersPage = new MembersPage(cy);
  
  it("Debe iniciar sesión y crear un miembro", async () => {
    loginPage.visitPage();
    loginPage.signInPage();

    const name = faker.person.fullName();
    const email = faker.internet.email();

    membersPage.clickOnMembersMenu();
    membersPage.clickOnNewMemberButton();
    membersPage.enterMemberName(name);
    membersPage.enterMemberEmail(email);
    membersPage.enterMemberLabels([]);
    membersPage.enterMemberNote("");
    membersPage.setNewsletters(true);
    membersPage.clickOnSaveButton();
    membersPage.checkIfMemberCreated(name);
    membersPage.deleteMemberByEmail(email);
  });
});
