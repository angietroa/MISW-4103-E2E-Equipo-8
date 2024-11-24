import LoginPage from "../pages/login";
import PostPage from "../pages/postPage";
import dataAPriori from "../data-a-priori/post.json";

describe("E026 - Funcionalidad de creación de un post con botón con un texto de 500 caracteres", () => {
  const loginPage = new LoginPage(cy);
  const postPage = new PostPage();

  it("Debe crear un post con un botón con un texto de 500 caracteres y validarlo", async () => {
    loginPage.visitPage();
    loginPage.signInPage();

    postPage.navigateToPosts();
    postPage.createNewPost();

    const postTitle = postPage.generateTitlePost(
      `${dataAPriori[25].postTitle} con botón`
    );
    postPage.createTitlePost(postTitle);

    postPage.addButton(dataAPriori[25].bigButton);

    postPage.publishPost();
    postPage.verifyPostExists(postTitle);

    postPage.openPost(postTitle);
    postPage.verifyButtonExists(dataAPriori[25].bigButton);
  });
});
