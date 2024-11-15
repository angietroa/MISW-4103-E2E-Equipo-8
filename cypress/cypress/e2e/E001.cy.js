import LoginPage from "../../pages/login";
import PostPage from "../../pages/postPage";

describe("E001 - Funcionalidad de Creación de un Post", () => {
  const loginPage = new LoginPage(cy);
  const postPage = new PostPage();

  let saveFolder;

  beforeEach(function () {
    const scenarioTitle = Cypress.mocha.getRunner().suite.title;

    saveFolder = scenarioTitle.split(" ")[0];

    cy.task("clearScreenshots", saveFolder);
  });

  it("Debe iniciar sesión y crear un post con texto aleatorio", () => {
    loginPage.visitPage(saveFolder);
    loginPage.signInPage(saveFolder);

    postPage.navigateToPosts(saveFolder);
    postPage.createNewPost(saveFolder);

    const postTitle = postPage.generateTitlePost("Pagina con solo texto");
    postPage.createTitlePost(postTitle, saveFolder);

    const paragraphCount = postPage.addRandomParagraphs();

    postPage.publishPost(saveFolder);
    postPage.verifyPostExists(postTitle, saveFolder);

    postPage.openPost(postTitle, saveFolder);

    postPage.verifyParagraphCount(paragraphCount, saveFolder);
  });
});
