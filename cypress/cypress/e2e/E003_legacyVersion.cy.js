import LoginPage from "../../pages/login";
import PostPage from "../../pages/postPage";
import AddPostContent from "../../pages/addPostContent";

describe("E003 - Funcionalidad de Creación de un Post con HTML", () => {
  const loginPage = new LoginPage(cy);
  const postPage = new PostPage();
  const addPostContent = new AddPostContent();

  let saveFolder;

  beforeEach(function () {
    const scenarioTitle = Cypress.mocha.getRunner().suite.title;

    saveFolder = scenarioTitle.split(" ")[0];

    cy.task("clearScreenshots", saveFolder);
  });

  it("Debe iniciar sesión y crear un post con HTML", () => {
    loginPage.visitPage(saveFolder, true, "legacy");
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

    postPage.navigateToPosts(saveFolder);
    postPage.createNewPost(saveFolder);

    const postTitle = postPage.generateTitlePost("Pagina con solo HTML");
    postPage.createTitlePost(postTitle, saveFolder);

    addPostContent.addHTML("<p>¡Hola, Mundo!</p>", true);

    postPage.publishPost(saveFolder, "legacy");
    postPage.verifyPostExists(postTitle, saveFolder);

    postPage.openPost(postTitle, saveFolder);
    postPage.verifyHTMLContent("¡Hola, Mundo!", saveFolder);
  });
});
