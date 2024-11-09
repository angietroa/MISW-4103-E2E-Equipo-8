import LoginPage from "../../pages/login";
import PostPage from "../../pages/postPage";

describe("Funcionalidad de Creación de un Post", () => {
  const loginPage = new LoginPage(cy);
  const postPage = new PostPage();

  it("Debe iniciar sesión y crear un post con texto aleatorio", () => {
    loginPage.visitPage();
    loginPage.signInPage();

    postPage.navigateToPosts();
    postPage.createNewPost();

    const postTitle = postPage.generateTitlePost("Pagina con solo texto");
    postPage.createTitlePost(postTitle);

    const paragraphCount = postPage.addRandomParagraphs();

    postPage.publishPost();
    postPage.verifyPostExists(postTitle);

    postPage.openPost(postTitle);

    postPage.verifyParagraphCount(paragraphCount);
  });
});
