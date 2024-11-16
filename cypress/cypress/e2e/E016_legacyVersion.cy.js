const { faker } = require("@faker-js/faker");

const LoginPage = require("../../pages/login");
const MembersPage = require("../../pages/membersPage");

describe("E016 - Crear miembro", () => {
  const loginPage = new LoginPage(cy);
  const membersPage = new MembersPage(cy);

  let saveFolder;

  beforeEach(function () {
    const scenarioTitle = Cypress.mocha.getRunner().suite.title;

    saveFolder = scenarioTitle.split(" ")[0];

    cy.task("clearScreenshots", saveFolder);
  });

  it("E016 - Crear miembro con todos sus atributos", () => {
    cy.log("Navegar a la página de autenticación");
    loginPage.visitPage(saveFolder, true, "legacy");

    cy.log("Digitar usuario y contraseña");
    loginPage.signInPage(saveFolder);

    // Alert
    cy.window().then((win) => {
      const observer = new win.MutationObserver(() => {
        const alertElement = win.document.querySelector("article.gh-alert");
        if (alertElement) {
          alertElement.querySelector(".gh-alert-close").click();
          observer.disconnect();
        }
      });

      observer.observe(win.document.body, {
        childList: true,
        subtree: true,
      });
    });

    cy.log("Hacer clic en el menú 'Members'");
    membersPage.clickOnMembersMenu(saveFolder, true);

    cy.log("Hacer clic en el botón 'New member'");
    membersPage.clickOnNewMemberButton(saveFolder, true);

    const memberName = faker.person.fullName();
    const memberEmail = faker.internet.email();
    const memberNote = faker.string.alphanumeric(1, 500);

    cy.log("Digitar el nombre del miembro");
    membersPage.enterMemberName(memberName, saveFolder, true);

    cy.log("Digitar el email del miembro");
    membersPage.enterMemberEmail(memberEmail, saveFolder);

    cy.log("Digitar una nota para el miembro");
    membersPage.enterMemberNote(memberNote, saveFolder);

    cy.log("Hacer clic en el botón 'Save'");
    membersPage.clickOnSaveButton(saveFolder, true);

    cy.log("Verificar si se agregó el nuevo miembro");
    membersPage.checkIfMemberCreated(memberName, saveFolder, true);
  });
});
