import LoginPage from "../pages/login";
import PostPage from "../pages/postPage";
import dataAPriori from "../data-a-priori/post.json";

describe("E020 - Funcionalidad de creación de un post con embebido", async () => {
  const loginPage = new LoginPage(cy);
  const postPage = new PostPage();

  it("Debe iniciar sesión y crear un post con embebido", () => {
    loginPage.visitPage();
    loginPage.signInPage();

    postPage.navigateToPosts();
    postPage.createNewPost();

    const postTitle = postPage.generateTitlePost(
      `${dataAPriori[29].postTitle} con embebido`
    );
    postPage.createTitlePost(postTitle);

    postPage.embedContent(
      'button:contains("Other...")',
      dataAPriori[29].embeddedContent
    );
    cy.wait(3000);

    postPage.publishPost();
    postPage.verifyPostExists(postTitle);

    postPage.openPost(postTitle);
    cy.get('[data-testid="bookmark-container"]').should("exist");
  });
});
