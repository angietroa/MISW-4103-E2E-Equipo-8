import LoginPage from "../pages/login";
import PostPage from "../pages/postPage";
const POST_DATA_POOL_PSEUDO_RANDOM_ENDPOINT =
  "https://my.api.mockaroo.com/post.json?key=dfda0900";

describe("E012 - Funcionalidad de creación de un post con Spotify embebido pseudo aleatorio invalido", () => {
  const loginPage = new LoginPage(cy);
  const postPage = new PostPage();

  beforeEach(() => {
    cy.request(POST_DATA_POOL_PSEUDO_RANDOM_ENDPOINT).as("post_data");
  });

  it("Debe iniciar sesión y crear un post con Spotify embebido pseudo aleatorio invalido", () => {
    loginPage.visitPage();
    loginPage.signInPage();

    postPage.navigateToPosts();
    postPage.createNewPost();

    cy.get("@post_data").then((res) => {
      const postTitle = postPage.generateTitlePost(
        `${res.body[11].postTitle} con Spotify`
      );
      postPage.createTitlePost(postTitle);

      const spotifyUrl = postPage.generateRandomURL();
      postPage.embedContent(
        'button:contains("spotify")',
        res.body[11].spotifyUrl
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
