import LoginPage from "../pages/login";
import PostPage from "../pages/postPage";
import dataAPriori from "../data-a-priori/post.json";

describe("E025 - Funcionalidad de creación de un post con botón con texto de 10 caracteres aleatorios", () => {
  const loginPage = new LoginPage();
  const postPage = new PostPage();

  it("Debe crear un post con un botón con texto de 10 caracteres aleatorios", () => {
    loginPage.visitPage();
    loginPage.signInPage();

    postPage.navigateToPosts();
    postPage.createNewPost();

    const postTitle = postPage.generateTitlePost(
      `${dataAPriori[24].postTitle} con boton`
    );
    postPage.createTitlePost(postTitle);

    const buttonText = postPage.generateRandomText(10, 10);
    postPage.addButton(buttonText);

    postPage.publishPost();
    postPage.verifyPostExists(postTitle);

    postPage.openPost(postTitle);
    postPage.verifyButtonExists(buttonText);
  });
});
