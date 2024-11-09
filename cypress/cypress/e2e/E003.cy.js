import LoginPage from "../../pages/login";
import PostPage from "../../pages/postPage";
import AddPostContent from "../../pages/addPostContent";

describe("Funcionalidad de Creación de un Post con HTML", () => {
  const loginPage = new LoginPage(cy);
  const postPage = new PostPage();
  const addPostContent = new AddPostContent();

  it("Debe iniciar sesión y crear un post con HTML", () => {
    loginPage.visitPage();
    loginPage.singInPage();
    
    postPage.navigateToPosts();
    postPage.createNewPost();

    const postTitle = postPage.generateTitlePost("Pagina con solo HTML");
    postPage.createTitlePost(postTitle);

    addPostContent.addHTML("<p>¡Hola, Mundo!</p>");

    postPage.publishPost();
    postPage.verifyPostExists(postTitle);

    postPage.openPost(postTitle);
    postPage.verifyHTMLContent("¡Hola, Mundo!");
  });
});
