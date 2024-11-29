import LoginPage from "../pages/login";
import PostPage from "../pages/postPage";
import dataAPriori from "../data-a-priori/post.json";

describe("E012 -Funcionalidad de creación de un post con Twitter embebido invalido", () => {
  const loginPage = new LoginPage(cy);
  const postPage = new PostPage();

  it("Debe iniciar sesión y crear un post con Twitter embebido invalido", async () => {
    loginPage.visitPage();
    loginPage.signInPage();

    postPage.navigateToPosts();
    postPage.createNewPost();

    const postTitle = postPage.generateTitlePost(
      `${dataAPriori[11].postTitle} con Twitter`
    );
    postPage.createTitlePost(postTitle);

    postPage.embedContent(
      'button:contains("X (formerly Twitter)")',
      dataAPriori[11].twitterUrl
    );
    cy.wait(1000);

    postPage.verifyErrorMessage();

    postPage.publishPost();
    postPage.verifyPostExists(postTitle);

    postPage.openPost(postTitle);
    postPage.verifyEmbedDoesNotExist();
  });
});
