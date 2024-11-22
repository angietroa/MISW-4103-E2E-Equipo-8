import LoginPage from "../pages/login";
import PostPage from "../pages/postPage";

describe("E018 -Funcionalidad de creación de un post con Vimeo embebido pseudo aleatorio invalido", () => {
  const loginPage = new LoginPage();
  const postPage = new PostPage();

  it("Debe iniciar sesión y crear un post con Vimeo embebido pseudo aleatorio invalido", () => {
    const mockDataPost = Cypress.env("mockDataPost");

    loginPage.visitPage();
    loginPage.signInPage();

    postPage.navigateToPosts();
    postPage.createNewPost();

    const postTitle = postPage.generateTitlePost(
      `${mockDataPost[17].postTitle} con Vimeo`
    );
    postPage.createTitlePost(postTitle);

    const vimeoUrl = postPage.generateRandomURL();
    postPage.embedContent('button:contains("Vimeo")', vimeoUrl);
    cy.wait(4000);

    postPage.verifyErrorMessage();

    postPage.publishPost();
    postPage.verifyPostExists(postTitle);

    postPage.openPost(postTitle);
    postPage.verifyEmbedDoesNotExist();
  });
});
