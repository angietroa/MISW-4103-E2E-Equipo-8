import LoginPage from "../../pages/loginPage";
import PostPage from "../../pages/postPage";

describe("Funcionalidad de Creación de un Post", () => {
  const loginPage = new LoginPage();
  const postPage = new PostPage();

  it("Debe iniciar sesión y crear un post con texto aleatorio", () => {
    cy.visit(Cypress.env("url"));
    loginPage.login(Cypress.env("email"), Cypress.env("password"));

    postPage.navigateToPosts();
    postPage.createNewPost();

    const postTitle = postPage.generateTitlePost("Pagina con solo texto");
    postPage.createTitlePost(postTitle);

    const paragraphCount = postPage.addRandomParagraphs();

    postPage.publishPost();
    postPage.verifyPostExists(postTitle);

    postPage.openPost(postTitle);

    postPage.verifyParagraphCount(paragraphCount);
  });
});
