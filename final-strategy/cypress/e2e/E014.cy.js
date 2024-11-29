import LoginPage from "../pages/login";
import PostPage from "../pages/postPage";
import dataAPriori from "../data-a-priori/post.json";

describe("E014 -Funcionalidad de creación de un post con Vimeo embebido pseudo aleatorio invalido", () => {
  const loginPage = new LoginPage(cy);
  const postPage = new PostPage();

  it("Debe iniciar sesión y crear un post con Vimeo embebido pseudo aleatorio invalido", async () => {
    loginPage.visitPage();
    loginPage.signInPage();

    postPage.navigateToPosts();
    postPage.createNewPost();

    const postTitle = postPage.generateTitlePost(
      `${dataAPriori[13].postTitle} con Vimeo`
    );
    postPage.createTitlePost(postTitle);

    postPage.embedContent('button:contains("Vimeo")', dataAPriori[13].vimeoUrl);
    cy.wait(1000);

    postPage.verifyErrorMessage();

    postPage.publishPost();
    postPage.verifyPostExists(postTitle);

    postPage.openPost(postTitle);
    postPage.verifyEmbedDoesNotExist();
  });
});
