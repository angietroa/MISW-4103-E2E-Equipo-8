import LoginPage from "../pages/login";
import PostPage from "../pages/postPage";

describe("E012 - Funcionalidad de creación de un post con Spotify embebido pseudo aleatorio invalido", () => {
  const loginPage = new LoginPage();
  const postPage = new PostPage();

  it("Debe iniciar sesión y crear un post con Spotify embebido pseudo aleatorio invalido", () => {
    const mockDataPost = Cypress.env("mockDataPost");

    loginPage.visitPage();
    loginPage.signInPage();

    postPage.navigateToPosts();
    postPage.createNewPost();

    const postTitle = postPage.generateTitlePost(
      `${mockDataPost[11].postTitle} con Spotify`
    );
    postPage.createTitlePost(postTitle);

    const spotifyUrl = postPage.generateRandomURL();
    postPage.embedContent('button:contains("spotify")', spotifyUrl);
    cy.wait(4000);

    postPage.verifyErrorMessage();

    postPage.publishPost();
    postPage.verifyPostExists(postTitle);

    postPage.openPost(postTitle);
    postPage.verifyEmbedDoesNotExist();
  });
});
