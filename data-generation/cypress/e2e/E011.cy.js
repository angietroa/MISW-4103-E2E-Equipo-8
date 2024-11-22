import LoginPage from "../pages/login";
import PostPage from "../pages/postPage";
import dataAPriori from "../data-a-priori/post.json";

describe("E011 - Funcionalidad de creación de un post con Spotify embebido", () => {
  const loginPage = new LoginPage();
  const postPage = new PostPage();

  it("Debe iniciar sesión y crear un post con Spotify embebido", () => {
    loginPage.visitPage();
    loginPage.signInPage();

    postPage.navigateToPosts();
    postPage.createNewPost();

    const postTitle = postPage.generateTitlePost(
      `${dataAPriori[10].postTitle} con Spotify`
    );
    postPage.createTitlePost(postTitle);

    postPage.embedContent(
      'button:contains("spotify")',
      dataAPriori[10].spotifyUrl
    );
    cy.wait(1000);

    postPage.publishPost();
    postPage.verifyPostExists(postTitle);

    postPage.openPost(postTitle);
    postPage.verifyEmbed();
  });
});
