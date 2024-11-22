import LoginPage from "../pages/login";
import PostPage from "../pages/postPage";
import dataAPriori from "../data-a-priori/post.json";

describe("E006 - Funcionalidad de creación de un post con markdown", () => {
  const loginPage = new LoginPage();
  const postPage = new PostPage();

  it("Debe iniciar sesión y crear un post con markdown", () => {
    loginPage.visitPage();
    loginPage.signInPage();

    postPage.navigateToPosts();
    postPage.createNewPost();

    const postTitle = postPage.generateTitlePost(
      `${dataAPriori[5].postTitle} con markdown`
    );
    postPage.createTitlePost(postTitle);

    postPage.addMarkdown(dataAPriori[5].markdownContent);

    postPage.publishPost();
    postPage.verifyPostExists(postTitle);

    postPage.openPost(postTitle);

    postPage.verifyContent("h1", dataAPriori[5].markdownContent);
  });
});
