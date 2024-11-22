import LoginPage from "../pages/login";
import PostPage from "../pages/postPage";
import dataAPriori from "../data-a-priori/post.json";

describe("E022 - Funcionalidad de creación de un post con Sound Cloud embebido aleatorio invalido", () => {
  const loginPage = new LoginPage(cy);
  const postPage = new PostPage();

  it("Debe iniciar sesión y crear un post con Sound Cloud embebido aleatorio invalido", () => {
    loginPage.visitPage();
    loginPage.signInPage();

    postPage.navigateToPosts();
    postPage.createNewPost();

    const postTitle = postPage.generateTitlePost(
      `${dataAPriori[21].postTitle} con Sound Cloud`
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
