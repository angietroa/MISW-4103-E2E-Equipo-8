const { faker } = require("@faker-js/faker");

const LoginPage = require("../pages/login");
const MembersPage = require("../pages/membersPage");

describe("E113 - Crear un miembro con un label de 499 caracteres (inválido) (a-priori)", () => {
  const loginPage = new LoginPage(cy);
  const membersPage = new MembersPage(cy);
  
  it("Debe iniciar sesión y crear un miembro", async () => {
    loginPage.visitPage();
    loginPage.signInPage();

    const data = membersPage.getAPrioriData("E113");

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
