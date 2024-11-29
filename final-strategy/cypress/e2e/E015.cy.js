import LoginPage from "../pages/login";
import PostPage from "../pages/postPage";
import dataAPriori from "../data-a-priori/post.json";

describe("E015 - Funcionalidad de creación de un post con Sound Cloud embebido", () => {
  const loginPage = new LoginPage(cy);
  const postPage = new PostPage();

  it("Debe iniciar sesión y crear un post con Sound Cloud embebido", async () => {
    loginPage.visitPage();
    loginPage.signInPage();

    postPage.navigateToPosts();
    postPage.createNewPost();

    const postTitle = postPage.generateTitlePost(
      `${dataAPriori[14].postTitle} con Sound Cloud`
    );
    postPage.createTitlePost(postTitle);

    postPage.embedContent(
      'button:contains("SoundCloud")',
      dataAPriori[19].soundCloudUrl
    );
    cy.wait(1000);

    postPage.publishPost();
    postPage.verifyPostExists(postTitle);

    postPage.openPost(postTitle);
    postPage.verifyEmbed();
  });
});
