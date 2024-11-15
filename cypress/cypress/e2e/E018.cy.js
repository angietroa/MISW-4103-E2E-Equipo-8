const { faker } = require("@faker-js/faker");

const LoginPage = require("../../pages/login");
const PageObj = require("../../pages/page");

describe("E018 - Editar página", () => {
  const loginPage = new LoginPage(cy);
  const page = new PageObj(cy);

  let saveFolder;

  beforeEach(function () {
    const scenarioTitle = Cypress.mocha.getRunner().suite.title;

    saveFolder = scenarioTitle.split(" ")[0];

    cy.task("clearScreenshots", saveFolder);
  });

  /* Se crea una nueva página, posteriormente se le cambia la fecha de publicación y se verifica si la fecha fue actualizada */
  it("E018 - Editar fecha de publicación de página", () => {
    cy.log("Navegar a la página de autenticación");
    loginPage.visitPage(saveFolder);

    cy.log("Digitar usuario y contraseña");
    loginPage.signInPage(saveFolder);

    cy.log("Hacer clic en el menú 'Pages' y crear página");
    page.goToPageAndCreate(saveFolder);

    cy.log("Digitar título");
    const title = faker.string.alphanumeric(10);
    page.setTitleAndTab(title, saveFolder);

    cy.log("Publicar página");
    page.publishPage(saveFolder);

    cy.log("Cerrar popup");
    page.closePublishPopup(saveFolder);

    cy.log("Buscar la página creada y hacer clic");
    page.findPageByTitleAndClick(title, true, saveFolder);

    cy.log("Asignar una nueva fecha de publicación");
    page.setPublishDate("1999-01-01", saveFolder);
  });
});
