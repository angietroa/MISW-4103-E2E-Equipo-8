import LoginPage from "../pages/login";
import PostPage from "../pages/postPage";
import dataAPriori from "../data-a-priori/post.json";

describe("E029 - Funcionalidad de creación de un post con botón con un único carácter invisible en pantalla", () => {
  const loginPage = new LoginPage(cy);
  const postPage = new PostPage();

  it("Debe crear un post con un botón con un único carácter invisible en pantalla y validarlo", async () => {
    loginPage.visitPage();
    loginPage.signInPage();

    postPage.navigateToPosts();
    postPage.createNewPost();

    const postTitle = postPage.generateTitlePost(
      `${dataAPriori[28].postTitle} con botón`
    );
    postPage.createTitlePost(postTitle);

    postPage.addButton(dataAPriori[28].emptyField);

    postPage.publishPost();
    postPage.verifyPostExists(postTitle);

    postPage.openPost(postTitle);
    postPage.verifyButtonNoText();
  });
});
