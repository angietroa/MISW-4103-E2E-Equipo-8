import LoginPage from "../pages/login";
import PostPage from "../pages/postPage";

describe("E021 - Funcionalidad de creación de un post con Sound Cloud embebido pseudo aleatorio invalido", () => {
  const loginPage = new LoginPage();
  const postPage = new PostPage();

  it("Debe iniciar sesión y crear un post con Sound Cloud embebido pseudo aleatorio invalido", () => {
    const mockDataPost = Cypress.env("mockDataPost");

    loginPage.visitPage();
    loginPage.signInPage();

    postPage.navigateToPosts();
    postPage.createNewPost();

    const postTitle = postPage.generateTitlePost(
      `${mockDataPost[20].postTitle} con Sound Cloud`
    );
    postPage.createTitlePost(postTitle);

    const soundCloudUrl = postPage.generateRandomURL();
    postPage.embedContent('button:contains("SoundCloud")', soundCloudUrl);
    cy.wait(4000);

    postPage.verifyErrorMessage();

    postPage.publishPost();
    postPage.verifyPostExists(postTitle);

    postPage.openPost(postTitle);
    postPage.verifyEmbedDoesNotExist();
  });
});
