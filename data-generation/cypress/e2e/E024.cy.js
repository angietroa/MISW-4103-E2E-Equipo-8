import LoginPage from "../pages/login";
import PostPage from "../pages/postPage";

describe("E024 - Funcionalidad de creación de un post con botón con texto de 10 caracteres pseudo aleatorios", () => {
  const loginPage = new LoginPage();
  const postPage = new PostPage();

  it("Debe crear un post con un botón con texto de 10 caracteres validarlo", () => {
    const mockDataPost = Cypress.env("mockDataPost");

    loginPage.visitPage();
    loginPage.signInPage();

    postPage.navigateToPosts();
    postPage.createNewPost();

    const postTitle = postPage.generateTitlePost(
      `${mockDataPost[23].postTitle} con botón`
    );
    postPage.createTitlePost(postTitle);

    postPage.addButton(mockDataPost[23].buttonText);

    postPage.publishPost();
    postPage.verifyPostExists(postTitle);

    postPage.openPost(postTitle);
    postPage.verifyButtonExists(mockDataPost[23].buttonText);
  });
});
