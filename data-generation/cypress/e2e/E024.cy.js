import LoginPage from "../pages/login";
import PostPage from "../pages/postPage";
const POST_DATA_POOL_PSEUDO_RANDOM_ENDPOINT =
  "https://my.api.mockaroo.com/post.json?key=dfda0900";

describe("E024 - Funcionalidad de creación de un post con botón con texto de 10 caracteres pseudo aleatorios", () => {
  const loginPage = new LoginPage(cy);
  const postPage = new PostPage();
  beforeEach(() => {
    cy.request(POST_DATA_POOL_PSEUDO_RANDOM_ENDPOINT).as("post_data");
  });

  it("Debe crear un post con un botón con texto de 10 caracteres validarlo", async () => {
    loginPage.visitPage();
    loginPage.signInPage();

    postPage.navigateToPosts();
    postPage.createNewPost();

    cy.get("@post_data").then((res) => {
      const postTitle = postPage.generateTitlePost(
        `${res.body[23].postTitle} con botón`
      );
      postPage.createTitlePost(postTitle);

      postPage.addButton(res.body[23].buttonText);

      postPage.publishPost();
      postPage.verifyPostExists(postTitle);

      postPage.openPost(postTitle);
      postPage.verifyButtonExists(res.body[23].buttonText);
    });
  });
});
