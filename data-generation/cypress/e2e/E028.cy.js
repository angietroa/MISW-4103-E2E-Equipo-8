import LoginPage from "../pages/login";
import PostPage from "../pages/postPage";

const { faker } = require("@faker-js/faker");

describe("E028 - Funcionalidad de creación de un post con botón con un texto de 500 caracteres aleatorios", () => {
  const loginPage = new LoginPage(cy);
  const postPage = new PostPage();

  it("Debe crear un post con un botón con un texto de 500 caracteres aleatorios", async () => {
    loginPage.visitPage();
    loginPage.signInPage();

    postPage.navigateToPosts();
    postPage.createNewPost();

    const postTitle = postPage.generateTitlePost(faker.lorem.sentences(1));
    postPage.createTitlePost(postTitle);

    const buttonText = postPage.generateRandomText(500, 500);
    postPage.addButton(buttonText);

    postPage.publishPost();
    postPage.verifyPostExists(postTitle);

    postPage.openPost(postTitle);
    postPage.verifyButtonExists(buttonText);
  });
});
