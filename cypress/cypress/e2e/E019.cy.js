const { faker } = require("@faker-js/faker");

const LoginPage = require("../../pages/login");
const PageObj = require("../../pages/page");

describe("Editar página", () => {
  const loginPage = new LoginPage(cy);
  const page = new PageObj(cy);

  /* Se crea una nueva página, posteriormente se le cambia el tipo de acceso y se verifica si fue actualizada */
  it('E019 - Editar acceso de página', () => {
    cy.log("Navegar a la página de autenticación");
    loginPage.visitPage();

    cy.log("Digitar usuario y contraseña");
    loginPage.signInPage();

    cy.log("Hacer clic en el menú 'Pages' y crear página");
    page.goToPageAndCreate();

    cy.log("Digitar título");
    const title = faker.string.alphanumeric(10);
    page.setTitleAndTab(title);

    cy.log("Publicar página");
    page.publishPage();

    cy.log("Cerrar popup");
    page.closePublishPopup();

    cy.log("Buscar la página creada y hacer clic");
    page.findPageByTitleAndClick(title,true);
    
    cy.log("Asignar un nuevo tipo de acceso");
    page.setAccessType("members");

    cy.log("Ir al listado de páginas, e ingresar a la página con título igual al ingresado como parámetro");
    page.visitPagesAndFindPageByTitle(title, true);

    cy.log("Validar el nuevo tipo de acceso");
    page.validateAccessType("members");
  });
});
