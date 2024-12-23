import LoginPage from "../pages/login";
import PageObj from "../pages/page";
const PAGE_DATAPOOL_APRIORI = require("../data-a-priori/page.json");

describe("E029 - Crear página embebiendo link de Spotify con link valido a-priori", () => {
  const data = PAGE_DATAPOOL_APRIORI[11];
  it("E029 - Crear página embebiendo link en Spotify con link valido a-priori", async () => {
    const loginPage = new LoginPage(cy);
    const page = new PageObj(cy);
    //Visitar página e iniciar sesión
    loginPage.visitPage();
    loginPage.signInPage();
    // ir a página y crear
    page.goToPageAndCreate();
    // Crear título
    page.pageTitle(data.title);
    // Agregar elemento spotify
    page.addPageElement("Spotify");
    // Agregar contenido
    page.setContentToLink(data.spotify_link);
    //Publicar página
    page.publishPage();
    page.closePublishPopup();
  });
});
