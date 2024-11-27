import LoginPage from "../pages/login";
import PostPage from "../pages/postPage";
import dataAPriori from "../data-a-priori/post.json";

describe("E004 - Funcionalidad de creación de un post con HTML invalido", () => {
  const loginPage = new LoginPage(cy);
  const postPage = new PostPage();

  it("Debe iniciar sesión y crear un post con HTML invalido", async () => {
    loginPage.visitPage();
    loginPage.signInPage();

    postPage.navigateToPosts();
    postPage.createNewPost();

    const postTitle = postPage.generateTitlePost(
      `${dataAPriori[3].postTitle} con HTML`
    );
    postPage.createTitlePost(postTitle);

    const html = dataAPriori[3].paragraph;
    postPage.addHTML(html);

    postPage.publishPost();
    postPage.verifyPostExists(postTitle);

    postPage.openPost(postTitle);

    postPage.verifyContent("div", html);
  });
});
