import LoginPage from "../pages/login";
import PostPage from "../pages/postPage";
const POST_DATA_POOL_PSEUDO_RANDOM_ENDPOINT =
  "https://my.api.mockaroo.com/post.json?key=dfda0900";

describe("E015 -Funcionalidad de creación de un post con Twitter embebido pseudo aleatorio invalido", () => {
  const loginPage = new LoginPage(cy);
  const postPage = new PostPage();

  beforeEach(() => {
    cy.request(POST_DATA_POOL_PSEUDO_RANDOM_ENDPOINT).as("post_data");
  });

  it("Debe iniciar sesión y crear un post con Twitter embebido pseudo aleatorio invalido", () => {
    loginPage.visitPage();
    loginPage.signInPage();

    postPage.navigateToPosts();
    postPage.createNewPost();

    cy.get("@post_data").then((res) => {
      const postTitle = postPage.generateTitlePost(
        `${res.body[14].postTitle} con Twitter`
      );
      postPage.createTitlePost(postTitle);

      const twitterUrl = postPage.generateRandomURL();
      postPage.embedContent(
        'button:contains("X (formerly Twitter)")',
        res.body[14].twitterUrl
      );
      cy.wait(4000);

      postPage.verifyErrorMessage();

      postPage.publishPost();
      postPage.verifyPostExists(postTitle);

      postPage.openPost(postTitle);
      postPage.verifyEmbedDoesNotExist();
    });
  });
});
