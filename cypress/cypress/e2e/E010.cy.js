import LoginPage from "../../pages/login";
import PageObj from "../../pages/page";

describe("E010 - Funcionalidad de crear página embebiendo link de Spotify", () => {
  before(() => {
    Cypress.on("uncaught:exception", (err, runnable) => {
      if (err.message.includes("The play() request was interrupted")) {
        return false;
      }
      return true;
    });
  });

  let saveFolder;

  beforeEach(function () {
    const scenarioTitle = Cypress.mocha.getRunner().suite.title;

    saveFolder = scenarioTitle.split(" ")[0];

    cy.task("clearScreenshots", saveFolder);
  });

  it("Crear pagina embebiendo link de Spotify", () => {
    const loginPage = new LoginPage(cy);
    const page = new PageObj(cy);

    // Given: I navigate to page
    cy.log({ displayName: "Given", message: "I navigate to page" });
    loginPage.visitPage(saveFolder);

    // When: I enter email, password and I do click on Sign-in
    cy.log({
      displayName: "When",
      message: "I enter email, password and I do click on Sign-in",
    });
    loginPage.signInPage(saveFolder);

    // When: I enter admin, I go to page and create a new one
    cy.log({
      displayName: "When",
      message: "I enter admin, I go to page and create a new one",
    });
    page.goToPageAndCreate();

    // When: I enter page, I set a title
    cy.log({
      displayName: "When",
      message: "I enter page, I set a title",
    });
    page.pageTitle("Escenario página - Spotify");

    // When: I enter the title, I want to add an element to page, in this case file
    cy.log({
      displayName: "When",
      message:
        "I enter the title, I want to add an element to page, in this case Spotify",
    });
    page.addPageElement("Spotify");
    const spotifyLink =
      "https://open.spotify.com/track/71N1Ob14XLnH5JwsmvXhXj?si=d99b678f09b9492b";

    // When: I enter the title, I want to add an element to page, in this case file
    cy.log({
      displayName: "When",
      message: "I add the element, I want to add a song",
    });
    page.setContentToSpotify(spotifyLink);

    // Then: I save all changes
    cy.log({
      displayName: "Then",
      message: "I save all changes",
    });
    page.publishPage();
  });
});
