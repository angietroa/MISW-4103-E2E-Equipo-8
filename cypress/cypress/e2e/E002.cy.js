import "cypress-file-upload";
import LoginPage from "../../pages/login";
import PostPage from "../../pages/postPage";

const numImages = Math.floor(Math.random() * 6) + 1;

function loadRandomImages() {
  const images = [
    "image_1.jpg",
    "image_2.jpg",
    "image_3.jpg",
    "image_4.jpg",
    "image_5.jpg",
    "image_6.jpg",
  ];

  for (let i = 0; i < numImages; i++) {
    cy.get('[aria-label="Add a card"]').click();
    cy.contains("button", "Image").click();
    cy.get('div[data-kg="editor"]')
      .should("be.visible")
      .then(($editorDiv) => {
        const randomImage = images[Math.floor(Math.random() * images.length)];
        cy.wrap($editorDiv)
          .find('input[type="file"]')
          .attachFile(`../fixtures/${randomImage}`);
      });
    cy.get("textarea").type("{enter}");
  }
}

describe("Funcionalidad de Creación de un Post con Imágenes", () => {
  const loginPage = new LoginPage(cy);
  const postPage = new PostPage();

  it("Debe iniciar sesión y crear un post con imágenes", () => {
    loginPage.visitPage();
    loginPage.singInPage();

    postPage.navigateToPosts();
    postPage.createNewPost();

    const postTitle = postPage.generateTitlePost("Pagina con imagenes");
    postPage.createTitlePost(postTitle);

    loadRandomImages();

    postPage.publishPost();
    postPage.verifyPostExists(postTitle);

    postPage.openPost(postTitle);

    postPage.verifyImageCount(numImages);
  });
});
