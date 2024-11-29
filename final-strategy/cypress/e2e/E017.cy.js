import LoginPage from "../pages/login";
import PostPage from "../pages/postPage";
import dataAPriori from "../data-a-priori/post.json";

describe("E017 - Funcionalidad de creación de un post con botón con texto de 10 caracteres", () => {
  const loginPage = new LoginPage(cy);
  const postPage = new PostPage();

  it("Debe crear un post con un botón con texto de 10 caracteresy validarlo", async () => {
    loginPage.visitPage();
    loginPage.signInPage();

    postPage.navigateToPosts();
    postPage.createNewPost();

    const postTitle = postPage.generateTitlePost(
      `${dataAPriori[16].postTitle} con botón`
    );
    postPage.createTitlePost(postTitle);

    postPage.addButton(dataAPriori[16].buttonText);

    postPage.publishPost();
    postPage.verifyPostExists(postTitle);

    postPage.openPost(postTitle);
    postPage.verifyButtonExists(dataAPriori[16].buttonText);
  });
});
