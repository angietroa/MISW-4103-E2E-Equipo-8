const { faker } = require("@faker-js/faker");

const LoginPage = require("../../pages/login");
const MembersPage = require("../../pages/membersPage");

describe("Crear miembro", () => {
  const loginPage = new LoginPage(cy);
  const membersPage = new MembersPage(cy);

  it('E016 - Crear miembro con todos sus atributos', () => {
    cy.log("Navegar a la página de autenticación");
    loginPage.visitPage();

    cy.log("Digitar usuario y contraseña");
    loginPage.signInPage();

    cy.log("Hacer clic en el menú 'Members'");
    membersPage.clickOnMembersMenu();

    cy.log("Hacer clic en el botón 'New member'");
    membersPage.clickOnNewMemberButton();

    const memberName = faker.person.fullName();
    const memberEmail = faker.internet.email();
    const memberNote = faker.string.alphanumeric(1,500);

    cy.log("Digitar el nombre del miembro");
    membersPage.enterMemberName(memberName);

    cy.log("Digitar el email del miembro");
    membersPage.enterMemberEmail(memberEmail);

    cy.log("Digitar una nota para el miembro");
    membersPage.enterMemberNote(memberNote);

    cy.log("Hacer clic en el botón 'Save'");
    membersPage.clickOnSaveButton();

    cy.log("Verificar si se agregó el nuevo miembro");
    membersPage.checkIfMemberCreated(memberName);
  });
});
