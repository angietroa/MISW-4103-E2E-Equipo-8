import LoginPage from "../pages/login";
import PostPage from "../pages/postPage";

const { faker } = require("@faker-js/faker");

describe("E016 -Funcionalidad de creación de un post con Twitter embebido aleatorio invalido", () => {
  const loginPage = new LoginPage(cy);
  const postPage = new PostPage();

  it("Debe iniciar sesión y crear un post con Twitter embebido aleatorio invalido", async () => {
    loginPage.visitPage();
    loginPage.signInPage();

    postPage.navigateToPosts();
    postPage.createNewPost();

    const postTitle = postPage.generateTitlePost(faker.lorem.sentences(1));
    postPage.createTitlePost(postTitle);

    const twitterUrl = postPage.generateRandomURL();
    postPage.embedContent(
      'button:contains("X (formerly Twitter)")',
      twitterUrl
    );
    cy.wait(4000);

    postPage.verifyErrorMessage();

    postPage.publishPost();
    postPage.verifyPostExists(postTitle);

    postPage.openPost(postTitle);
    postPage.verifyEmbedDoesNotExist();
  });
});
