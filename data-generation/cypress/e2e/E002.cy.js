import LoginPage from "../pages/login";
import PostPage from "../pages/postPage";

describe("E002 - Funcionalidad de creación de un post pseudo aleatorio", () => {
  const loginPage = new LoginPage();
  const postPage = new PostPage();

  it("Debe iniciar sesión y crear un post con texto", () => {
    const mockDataPost = Cypress.env("mockDataPost");

    loginPage.visitPage();
    loginPage.signInPage();

    postPage.navigateToPosts();
    postPage.createNewPost();

    const postTitle = postPage.generateTitlePost(
      `${mockDataPost[1].postTitle} con texto`
    );
    postPage.createTitlePost(postTitle);

    const paragraph = mockDataPost[1].paragraph;
    postPage.addParagraph(paragraph);

    postPage.publishPost();
    postPage.verifyPostExists(postTitle);

    postPage.openPost(postTitle);

    postPage.verifyTextExists(paragraph);
  });
});
