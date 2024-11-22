import LoginPage from "../pages/login";
import PostPage from "../pages/postPage";
import dataAPriori from "../data-a-priori/post.json";

describe("E013 - Funcionalidad de creación de un post con Spotify embebido aleatorio invalido", () => {
  const loginPage = new LoginPage();
  const postPage = new PostPage();

  it("Debe iniciar sesión y crear un post con Spotify embebido aleatorio invalido", () => {
    loginPage.visitPage();
    loginPage.signInPage();

    postPage.navigateToPosts();
    postPage.createNewPost();

    const postTitle = postPage.generateTitlePost(
      `${dataAPriori[12].postTitle} con Spotify`
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
