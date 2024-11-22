import LoginPage from "../pages/login";
import PostPage from "../pages/postPage";
import dataAPriori from "../data-a-priori/post.json";

describe("E007 - Funcionalidad de creación de un post con markdown aleatorio", () => {
  const loginPage = new LoginPage();
  const postPage = new PostPage();

  it("Debe iniciar sesión y crear un post con markdown", () => {
    loginPage.visitPage();
    loginPage.signInPage();

    postPage.navigateToPosts();
    postPage.createNewPost();

    const postTitle = postPage.generateTitlePost(
      `${dataAPriori[6].postTitle} con Markdown`
    );
    postPage.createTitlePost(postTitle);

    const markdown = postPage.generateRandomText();
    postPage.addMarkdown(markdown);

    postPage.publishPost();
    postPage.verifyPostExists(postTitle);

    postPage.openPost(postTitle);

    postPage.verifyContent("p", markdown);
  });
});
