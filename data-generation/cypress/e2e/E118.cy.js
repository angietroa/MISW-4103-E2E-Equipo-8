const { faker } = require("@faker-js/faker");

const LoginPage = require("../pages/login");
const MembersPage = require("../pages/membersPage");

describe("E118 - Crear un miembro con 50 labels (válido) (aleatorio)", () => {
  const loginPage = new LoginPage(cy);
  const membersPage = new MembersPage(cy);
  
  it("Debe iniciar sesión y crear un miembro", async () => {
    loginPage.visitPage();
    loginPage.signInPage();

    const name = faker.person.fullName();
    const email = faker.internet.email();
    let labels = [];
    for (let i=1; i<=50; i++) {
      labels.push(faker.string.alpha(10));
    }

    membersPage.clickOnMembersMenu();
    membersPage.clickOnNewMemberButton();
    membersPage.enterMemberName(name);
    membersPage.enterMemberEmail(email);
    membersPage.enterMemberLabels(labels);
    membersPage.enterMemberNote("");
    membersPage.setNewsletters(true);
    membersPage.clickOnSaveButton();
    membersPage.checkIfMemberCreated(name);
    membersPage.deleteMemberByEmail(email);
  });
});
