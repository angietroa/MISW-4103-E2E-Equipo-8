import LoginPage from "../pages/login";
import PostPage from "../pages/postPage";

const { faker } = require("@faker-js/faker");

describe("E005 - Funcionalidad de creación de un post con HTML aleatorio invalido", () => {
  const loginPage = new LoginPage(cy);
  const postPage = new PostPage();

  it("Debe iniciar sesión y crear un post con HTML aleatorio invalido", () => {
    loginPage.visitPage();
    loginPage.signInPage();

    postPage.navigateToPosts();
    postPage.createNewPost();

    const postTitle = postPage.generateTitlePost(faker.lorem.sentences(1));
    postPage.createTitlePost(postTitle);

    const html = postPage.generateRandomText();
    postPage.addHTML(html);

    postPage.publishPost();
    postPage.verifyPostExists(postTitle);

    postPage.openPost(postTitle);

    postPage.verifyContent("div", html);
  });
});