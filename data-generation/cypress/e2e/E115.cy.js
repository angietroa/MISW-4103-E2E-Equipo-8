const { faker } = require("@faker-js/faker");

const LoginPage = require("../pages/login");
const MembersPage = require("../pages/membersPage");

describe("E115 - Crear un miembro con un label de 499 caracteres (inválido) (aleatorio)", () => {
  const loginPage = new LoginPage(cy);
  const membersPage = new MembersPage(cy);
  
  it("Debe iniciar sesión y crear un miembro", async () => {
    loginPage.visitPage();
    loginPage.signInPage();

    const name = faker.person.fullName();
    const email = faker.internet.email();
    let labels = [];
    labels.push(faker.string.alpha(499));

    membersPage.clickOnMembersMenu();
    membersPage.clickOnNewMemberButton();
    membersPage.enterMemberName(name);
    membersPage.enterMemberEmail(email);
    membersPage.enterMemberLabels(labels);
    membersPage.enterMemberNote("");
    membersPage.setNewsletters(true);
    membersPage.clickOnSaveButton();
    membersPage.clickOnMembersMenu();
    membersPage.clickOnLeaveButton();
    membersPage.checkIfMemberNotCreated(name);
  });
});
