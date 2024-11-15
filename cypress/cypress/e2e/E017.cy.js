const { faker } = require("@faker-js/faker");

const LoginPage = require("../../pages/login");
const PageObj = require("../../pages/page");

describe("E017 - Editar página", () => {
  const loginPage = new LoginPage(cy);
  const page = new PageObj(cy);

  let saveFolder;

  beforeEach(function () {
    const scenarioTitle = Cypress.mocha.getRunner().suite.title;

    saveFolder = scenarioTitle.split(" ")[0];

    cy.task("clearScreenshots", saveFolder);
  });

  /* Se crea una nueva página, posteriormente se le cambia el título y se verifica en el listado de páginas */
  it("E017 - Editar título de página", () => {
    cy.log("Navegar a la página de autenticación");
    loginPage.visitPage(saveFolder);

    cy.log("Digitar usuario y contraseña");
    loginPage.signInPage(saveFolder);

    cy.log("Hacer clic en el menú 'Pages' y crear página");
    page.goToPageAndCreate(saveFolder);

    cy.log("Digitar título");
    const title = faker.string.alphanumeric(10);
    page.setTitleAndTab(title);

    cy.log("Publicar página");
    page.publishPage(saveFolder);

    cy.log("Cerrar popup");
    page.closePublishPopup(saveFolder);

    cy.log("Buscar la página creada y hacer clic");
    page.findPageByTitleAndClick(title, true, saveFolder);

    cy.log("Agregar el texto 'edit' al título");
    page.pageTitle(" (edit)", saveFolder);

    cy.log("Hacer clic sobre el botón 'Update'");
    page.clickOnUpdateButton(saveFolder);

    cy.log("Ir al listado de páginas y buscar la página editada");
    page.visitPagesAndFindPageByTitle(title + " (edit)", false, saveFolder);
  });
});
