import LoginPage from "../pages/login";
import PostPage from "../pages/postPage";
import dataAPriori from "../data-a-priori/post.json";

describe("E023 - Funcionalidad de creación de un post con botón con texto de 10 caracteres", () => {
  const loginPage = new LoginPage(cy);
  const postPage = new PostPage();

  it("Debe crear un post con un botón con texto de 10 caracteresy validarlo", () => {
    loginPage.visitPage();
    loginPage.signInPage();

    postPage.navigateToPosts();
    postPage.createNewPost();

    const postTitle = postPage.generateTitlePost(
      `${dataAPriori[22].postTitle} con botón`
    );
    postPage.createTitlePost(postTitle);

    postPage.addButton(dataAPriori[22].buttonText);

    postPage.publishPost();
    postPage.verifyPostExists(postTitle);

    postPage.openPost(postTitle);
    postPage.verifyButtonExists(dataAPriori[22].buttonText);
  });
});