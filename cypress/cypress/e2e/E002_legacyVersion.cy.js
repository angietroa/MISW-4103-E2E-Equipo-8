import "cypress-file-upload";
import LoginPage from "../../pages/login";
import PostPage from "../../pages/postPage";

const numImages = Math.floor(Math.random() * 6) + 1;

function loadRandomImages(legacy = false) {
  const images = [
    "image_1.jpg",
    "image_2.jpg",
    "image_3.jpg",
    "image_4.jpg",
    "image_5.jpg",
    "image_6.jpg",
  ];
  if (legacy) {
    for (let i = 0; i < numImages; i++) {
      cy.get('[aria-label="Add a card"]').click();
      cy.get('div[role="menuitem"]').contains("Image").click();
      cy.get(".kg-media-placeholder").find("button.kg-image-button").click();

      cy.get('input[type="file"]').then(($fileInput) => {
        const randomImage = images[Math.floor(Math.random() * images.length)];
        const imagePath = `../fixtures/${randomImage}`;

        // Subir la imagen
        cy.wrap($fileInput).attachFile(imagePath);
      });
      cy.get("textarea").eq(0).type("{enter}");
    }
  } else {
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
    loginPage.visitPage(saveFolder, true, "legacy");
    loginPage.signInPage(saveFolder);

    // Alert
    cy.window().then((win) => {
      const observer = new win.MutationObserver(() => {
        const alertElement = win.document.querySelector("article.gh-alert");
        if (alertElement) {
          alertElement.querySelector(".gh-alert-close").click();
          observer.disconnect();
        }
      });

      observer.observe(win.document.body, {
        childList: true,
        subtree: true,
      });
    });

    postPage.navigateToPosts(saveFolder);
    postPage.createNewPost(saveFolder);

    const postTitle = postPage.generateTitlePost("Pagina con imagenes");
    postPage.createTitlePost(postTitle, saveFolder);

    loadRandomImages(true);

    postPage.publishPost(saveFolder, "legacy");
    postPage.verifyPostExists(postTitle, saveFolder);

    postPage.openPost(postTitle, saveFolder);

    postPage.verifyImageCount(numImages, saveFolder);
  });
});
