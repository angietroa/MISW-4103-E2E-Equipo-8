import LoginPage from "../pages/login";
import PostPage from "../pages/postPage";

const POST_DATA_POOL_PSEUDO_RANDOM_ENDPOINT =
  "https://my.api.mockaroo.com/post.json?key=dfda0900";

describe("E009 - Funcionalidad de creación de un post con Youtube embebido pseudo aleatorio invalido", () => {
  const loginPage = new LoginPage(cy);
  const postPage = new PostPage();

  beforeEach(() => {
    cy.request(POST_DATA_POOL_PSEUDO_RANDOM_ENDPOINT).as("post_data");
  });

  it("Debe iniciar sesión y crear un post con Youtube embebido pseudo aleatorio invalido", async () => {
    loginPage.visitPage();
    loginPage.signInPage();

    postPage.navigateToPosts();
    postPage.createNewPost();

    cy.get("@post_data").then((res) => {
      const postTitle = postPage.generateTitlePost(
        `${res.body[8].postTitle} con Youtube`
      );
      postPage.createTitlePost(postTitle);

      //const youtubeUrl = postPage.generateRandomURL();
      postPage.embedContent(
        'button:contains("youtube")',
        res.body[8].youtubeUrl
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
