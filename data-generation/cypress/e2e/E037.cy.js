import LoginPage from "../pages/login";
import PageObj from "../pages/page";
const { faker } = require("@faker-js/faker");

describe("E037 - Crear página con markdown valido", () => {
  it("E037 - Crear página con markdown valido", () => {
    const loginPage = new LoginPage(cy);
    const page = new PageObj(cy);
    // Visitar página e iniciar sesión
    loginPage.visitPage();
    loginPage.signInPage();
    // Ir a página y crear
    page.goToPageAndCreate();
    // Agregar elemento markdown y cargar contenido aleatorio
    page.addPageElement("Markdown");
    page.setContentToMarkdown(faker.lorem.paragraphs());
    // Agregar titulo aleatorio
    page.pageTitle(faker.lorem.word());
    // Publicar página
    page.publishPage();
    page.closePublishPopup();
  });
});
