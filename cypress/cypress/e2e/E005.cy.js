import LoginPage from "../../pages/loginPage";
import PostPage from "../../pages/postPage";
import AddPostContent from "../../pages/addPostContent";

describe("Funcionalidad de Creación de un Post con Botón", () => {
  const loginPage = new LoginPage();
  const postPage = new PostPage();
  const addPostContent = new AddPostContent();
  const buttonText = "Soy un boton";

  it("Debe crear un post con un botón y validarlo", () => {
    cy.visit(Cypress.env("url"));
    loginPage.login(Cypress.env("email"), Cypress.env("password"));

    postPage.navigateToPosts();
    postPage.createNewPost();

    const postTitle = postPage.generateTitlePost("Pagina con boton");
    postPage.createTitlePost(postTitle);

    addPostContent.addButton(buttonText);

    postPage.publishPost();
    postPage.verifyPostExists(postTitle);

    postPage.openPost(postTitle);
    postPage.verifyButtonExists(buttonText);
  });
});
