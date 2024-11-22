import LoginPage from "../pages/login";
import PostPage from "../pages/postPage";
import dataAPriori from "../data-a-priori/post.json";

describe("E017 -Funcionalidad de creación de un post con Vimeo embebido", () => {
  const loginPage = new LoginPage();
  const postPage = new PostPage();

  it("Debe iniciar sesión y crear un post con Vimeo embebido", () => {
    loginPage.visitPage();
    loginPage.signInPage();

    postPage.navigateToPosts();
    postPage.createNewPost();

    const postTitle = postPage.generateTitlePost(
      `${dataAPriori[16].postTitle} con Vimeo`
    );
    postPage.createTitlePost(postTitle);

    postPage.embedContent('button:contains("Vimeo")', dataAPriori[16].vimeoUrl);
    cy.wait(1000);

    postPage.publishPost();
    postPage.verifyPostExists(postTitle);

    postPage.openPost(postTitle);
    postPage.verifyEmbed();
  });
});
