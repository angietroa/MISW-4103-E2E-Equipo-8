import LoginPage from "../pages/login";
import PostPage from "../pages/postPage";
import dataAPriori from "../data-a-priori/post.json";

describe("E016 - Funcionalidad de creación de un post con Sound Cloud embebido invalido", () => {
  const loginPage = new LoginPage(cy);
  const postPage = new PostPage();

  it("Debe iniciar sesión y crear un post con Sound Cloud embebido invalido", async () => {
    loginPage.visitPage();
    loginPage.signInPage();

    postPage.navigateToPosts();
    postPage.createNewPost();

    const postTitle = postPage.generateTitlePost(
      `${dataAPriori[15].postTitle} con Sound Cloud`
    );
    postPage.createTitlePost(postTitle);

    postPage.embedContent(
      'button:contains("SoundCloud")',
      dataAPriori[15].soundCloudUrl
    );
    cy.wait(1000);

    postPage.verifyErrorMessage();

    postPage.publishPost();
    postPage.verifyPostExists(postTitle);

    postPage.openPost(postTitle);
    postPage.verifyEmbedDoesNotExist();
  });
});
