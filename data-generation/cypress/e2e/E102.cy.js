const { faker } = require("@faker-js/faker");

const LoginPage = require("../pages/login");
const MembersPage = require("../pages/membersPage");

describe("E102 - Crear miembro con una nota de 500 caracteres (válido) (aleatorio)", () => {
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
    membersPage.enterMemberNote(faker.string.alpha(500));
    membersPage.setNewsletters(true);
    membersPage.clickOnSaveButton();
    membersPage.checkIfMemberCreated(name);
    membersPage.deleteMemberByEmail(email);
  });
});
