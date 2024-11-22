import LoginPage from "../pages/login";
import PostPage from "../pages/postPage";
import dataAPriori from "../data-a-priori/post.json";

describe("E008 - Funcionalidad de creación de un post con Youtube embebido", () => {
  const loginPage = new LoginPage(cy);
  const postPage = new PostPage();

  it("Debe iniciar sesión y crear un post con Youtube embebido", () => {
    loginPage.visitPage();
    loginPage.signInPage();

    postPage.navigateToPosts();
    postPage.createNewPost();

    const postTitle = postPage.generateTitlePost(
      `${dataAPriori[7].postTitle} con Youtube`
    );
    postPage.createTitlePost(postTitle);

    postPage.embedContent(
      'button:contains("youtube")',
      dataAPriori[7].youtubeUrl
    );
    cy.wait(1000);

    postPage.publishPost();
    postPage.verifyPostExists(postTitle);

    postPage.openPost(postTitle);
    postPage.verifyEmbed();
  });
});
