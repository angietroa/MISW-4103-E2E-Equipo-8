import LoginPage from "../../pages/login";
import PostPage from "../../pages/postPage";
import AddPostContent from "../../pages/addPostContent";

describe("E005 - Funcionalidad de Creación de un Post con Botón", () => {
  const loginPage = new LoginPage(cy);
  const postPage = new PostPage();
  const addPostContent = new AddPostContent();
  const buttonText = "Soy un boton";

  let saveFolder;

  beforeEach(function () {
    const scenarioTitle = Cypress.mocha.getRunner().suite.title;

    saveFolder = scenarioTitle.split(" ")[0];

    cy.task("clearScreenshots", saveFolder);
  });

  it("Debe crear un post con un botón y validarlo", () => {
    loginPage.visitPage(saveFolder);
    loginPage.signInPage(saveFolder);

    postPage.navigateToPosts(saveFolder);
    postPage.createNewPost(saveFolder);

    const postTitle = postPage.generateTitlePost("Pagina con boton");
    postPage.createTitlePost(postTitle, saveFolder);

    addPostContent.addButton(buttonText, saveFolder);

    postPage.publishPost(saveFolder);
    postPage.verifyPostExists(postTitle, saveFolder);

    postPage.openPost(postTitle, saveFolder);
    postPage.verifyButtonExists(buttonText, saveFolder);
  });
});
