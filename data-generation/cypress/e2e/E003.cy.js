import LoginPage from "../pages/login";
import PostPage from "../pages/postPage";
import dataAPriori from "../data-a-priori/post.json";

describe(" E003 - Funcionalidad de creación de un post con un único carácter invisible en pantalla en titulo y contenido", () => {
  const loginPage = new LoginPage(cy);
  const postPage = new PostPage();

  it("Funcionalidad de creación de un post con un único carácter invisible en pantalla en titulo y contenido", () => {
    loginPage.visitPage();
    loginPage.signInPage();

    postPage.navigateToPosts();
    postPage.createNewPost();

    const postTitle = dataAPriori[2].emptyField;
    const titleEmpty = "(Untitled)";
    postPage.createTitlePost(postTitle);

    postPage.addParagraph(postTitle);

    postPage.publishPost();
    postPage.verifyPostExists(titleEmpty);

    postPage.openPost(titleEmpty);

    cy.get("textarea:empty").should("exist");
  });
});
