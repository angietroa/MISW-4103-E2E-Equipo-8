import LoginPage from "../pages/login";
import PostPage from "../pages/postPage";

const POST_DATA_POOL_PSEUDO_RANDOM_ENDPOINT =
  "https://my.api.mockaroo.com/post.json?key=dfda0900";

describe("E002 - Funcionalidad de creación de un post pseudo aleatorio", () => {
  const loginPage = new LoginPage(cy);
  const postPage = new PostPage();

  beforeEach(() => {
    cy.request(POST_DATA_POOL_PSEUDO_RANDOM_ENDPOINT).as("post_data");
  });

  it("Debe iniciar sesión y crear un post con texto", async () => {
    loginPage.visitPage();
    loginPage.signInPage();

    postPage.navigateToPosts();
    postPage.createNewPost();

    cy.get("@post_data").then((res) => {
      const postTitle = postPage.generateTitlePost(
        `${res.body[1].postTitle} con texto`
      );
      postPage.createTitlePost(postTitle);

      const paragraph = res.body[1].paragraph;
      postPage.addParagraph(paragraph);

      postPage.publishPost();
      postPage.verifyPostExists(postTitle);

      postPage.openPost(postTitle);

      postPage.verifyTextExists(paragraph);
    });
  });
});
