const { faker } = require("@faker-js/faker");

const LoginPage = require("../pages/login");
const MembersPage = require("../pages/membersPage");

describe("E108 - Crear miembro con email inválido (inválido) (aleatorio)", () => {
  const loginPage = new LoginPage(cy);
  const membersPage = new MembersPage(cy);
  
  it("Debe iniciar sesión y crear un miembro", async () => {
    loginPage.visitPage();
    loginPage.signInPage();

    const name = faker.person.fullName();

    membersPage.clickOnMembersMenu();
    membersPage.clickOnNewMemberButton();
    membersPage.enterMemberName(name);
    membersPage.enterMemberEmail(faker.string.alpha(15));
    membersPage.enterMemberLabels([]);
    membersPage.enterMemberNote("");
    membersPage.setNewsletters(true);
    membersPage.clickOnSaveButton();
    membersPage.clickOnMembersMenu();
    membersPage.clickOnLeaveButton();
    membersPage.checkIfMemberNotCreated(name);
  });
});
