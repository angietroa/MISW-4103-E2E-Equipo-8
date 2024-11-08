import LoginPage from "../../pages/loginPage";
import PostPage from "../../pages/postPage";
import AddPostContent from "../../pages/addPostContent";

describe("Funcionalidad de Creación de un Post con Youtube Embebido", () => {
  const loginPage = new LoginPage();
  const postPage = new PostPage();
  const addPostContent = new AddPostContent();

  it("Debe iniciar sesión y crear un post con Youtube embebido", () => {
    cy.visit(Cypress.env("url"));
    loginPage.login(Cypress.env("email"), Cypress.env("password"));

    postPage.navigateToPosts();
    postPage.createNewPost();

    const postTitle = postPage.generateTitlePost("Pagina con Youtube embebido");
    postPage.createTitlePost(postTitle);

    addPostContent.embedYouTube(
      "https://www.youtube.com/watch?v=HchmoMexFYk&ab_channel=NetflixPhilippines"
    );
    cy.wait(1000);

    postPage.publishPost();
    postPage.verifyPostExists(postTitle);

    postPage.openPost(postTitle);
    postPage.verifyYouTubeEmbed(
      "https://www.youtube.com/embed/HchmoMexFYk?feature=oembed"
    );
  });
});
