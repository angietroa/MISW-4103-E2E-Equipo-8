import LoginPage from "../pages/login";
import PostPage from "../pages/postPage";

const { faker } = require("@faker-js/faker");

describe("E007 - Funcionalidad de creación de un post con markdown aleatorio", () => {
  const loginPage = new LoginPage(cy);
  const postPage = new PostPage();

  it("Debe iniciar sesión y crear un post con markdown", async () => {
    loginPage.visitPage();
    loginPage.signInPage();

    postPage.navigateToPosts();
    postPage.createNewPost();

    const postTitle = postPage.generateTitlePost(faker.lorem.sentences(1));
    postPage.createTitlePost(postTitle);

    const markdown = postPage.generateRandomText();
    postPage.addMarkdown(markdown);

    postPage.publishPost();
    postPage.verifyPostExists(postTitle);

    postPage.openPost(postTitle);

    postPage.verifyContent("p", markdown);
  });
});
