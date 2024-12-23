import LoginPage from "../pages/login";
import PostPage from "../pages/postPage";
import dataAPriori from "../data-a-priori/post.json";

describe("E003 - Funcionalidad de creación de un post con HTML", () => {
  const loginPage = new LoginPage(cy);
  const postPage = new PostPage();

  it("Debe iniciar sesión y crear un post con HTML", async () => {
    loginPage.visitPage();
    loginPage.signInPage();

    postPage.navigateToPosts();
    postPage.createNewPost();

    const postTitle = postPage.generateTitlePost(
      `${dataAPriori[2].postTitle} con HTML`
    );
    postPage.createTitlePost(postTitle);
    postPage.addHTML(dataAPriori[2].htmlContent);

    postPage.publishPost();
    postPage.verifyPostExists(postTitle);

    postPage.openPost(postTitle);

    postPage.verifyContent("p", dataAPriori[2].htmlContent);
  });
});
