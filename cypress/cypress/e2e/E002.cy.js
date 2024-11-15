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

describe("E002 - Funcionalidad de Creación de un Post con Imágenes", () => {
  const loginPage = new LoginPage(cy);
  const postPage = new PostPage();

  let saveFolder;

  beforeEach(function () {
    const scenarioTitle = Cypress.mocha.getRunner().suite.title;

    saveFolder = scenarioTitle.split(" ")[0];

    cy.task("clearScreenshots", saveFolder);
  });

  it("Debe iniciar sesión y crear un post con imágenes", () => {
    loginPage.visitPage(saveFolder);
    loginPage.signInPage(saveFolder);

    postPage.navigateToPosts(saveFolder);
    postPage.createNewPost(saveFolder);

    const postTitle = postPage.generateTitlePost("Pagina con imagenes");
    postPage.createTitlePost(postTitle, saveFolder);

    loadRandomImages();

    postPage.publishPost(saveFolder);
    postPage.verifyPostExists(postTitle, saveFolder);

    postPage.openPost(postTitle, saveFolder);

    postPage.verifyImageCount(numImages, saveFolder);
  });
});
