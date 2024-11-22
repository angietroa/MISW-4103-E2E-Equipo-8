import LoginPage from "../pages/login";
import PostPage from "../pages/postPage";

describe("E027 - Funcionalidad de creación de un post con botón con un texto de 500 caracteres pseudo aleatorios", () => {
  const loginPage = new LoginPage();
  const postPage = new PostPage();

  it("Debe crear un post con un botón con un texto de 500 caracteres y validarlo", () => {
    const mockDataPost = Cypress.env("mockDataPost");

    loginPage.visitPage();
    loginPage.signInPage();

    postPage.navigateToPosts();
    postPage.createNewPost();

    const postTitle = postPage.generateTitlePost(
      `${mockDataPost[26].postTitle} con botón`
    );
    postPage.createTitlePost(postTitle);

    postPage.addButton(mockDataPost[26].bigButton);

    postPage.publishPost();
    postPage.verifyPostExists(postTitle);

    postPage.openPost(postTitle);
    postPage.verifyButtonExists(mockDataPost[26].bigButton);
  });
});
