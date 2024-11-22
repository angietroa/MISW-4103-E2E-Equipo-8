import LoginPage from "../pages/login";
import PostPage from "../pages/postPage";

describe("E015 -Funcionalidad de creación de un post con Twitter embebido pseudo aleatorio invalido", () => {
  const loginPage = new LoginPage();
  const postPage = new PostPage();

  it("Debe iniciar sesión y crear un post con Twitter embebido pseudo aleatorio invalido", () => {
    const mockDataPost = Cypress.env("mockDataPost");

    loginPage.visitPage();
    loginPage.signInPage();

    postPage.navigateToPosts();
    postPage.createNewPost();

    const postTitle = postPage.generateTitlePost(
      `${mockDataPost[14].postTitle} con Twitter`
    );
    postPage.createTitlePost(postTitle);

    const twitterUrl = postPage.generateRandomURL();
    postPage.embedContent(
      'button:contains("X (formerly Twitter)")',
      twitterUrl
    );
    cy.wait(4000);

    postPage.verifyErrorMessage();

    postPage.publishPost();
    postPage.verifyPostExists(postTitle);

    postPage.openPost(postTitle);
    postPage.verifyEmbedDoesNotExist();
  });
});
