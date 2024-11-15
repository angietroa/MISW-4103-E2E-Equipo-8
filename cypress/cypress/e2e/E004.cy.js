import LoginPage from "../../pages/login";
import PostPage from "../../pages/postPage";
import AddPostContent from "../../pages/addPostContent";

describe("E004 - Funcionalidad de Creación de un Post con Youtube Embebido", () => {
  const loginPage = new LoginPage(cy);
  const postPage = new PostPage();
  const addPostContent = new AddPostContent();

  let saveFolder;

  beforeEach(function () {
    const scenarioTitle = Cypress.mocha.getRunner().suite.title;

    saveFolder = scenarioTitle.split(" ")[0];

    cy.task("clearScreenshots", saveFolder);
  });

  it("Debe iniciar sesión y crear un post con Youtube embebido", () => {
    loginPage.visitPage(saveFolder);
    loginPage.signInPage(saveFolder);

    postPage.navigateToPosts(saveFolder);
    postPage.createNewPost(saveFolder);

    const postTitle = postPage.generateTitlePost("Pagina con Youtube embebido");
    postPage.createTitlePost(postTitle, saveFolder);

    addPostContent.embedYouTube(
      "https://www.youtube.com/watch?v=HchmoMexFYk&ab_channel=NetflixPhilippines",
      saveFolder
    );
    cy.wait(1000);

    postPage.publishPost(saveFolder);
    postPage.verifyPostExists(postTitle, saveFolder);

    postPage.openPost(postTitle, saveFolder);
    postPage.verifyYouTubeEmbed(
      "https://www.youtube.com/embed/HchmoMexFYk?feature=oembed",
      saveFolder
    );
  });
});
