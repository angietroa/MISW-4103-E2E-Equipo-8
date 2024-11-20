class LoginPage {
  constructor(cy) {
    this.cy = cy;
  }

  async visitPage(folder, dynamic = false, version = "current") {
    const urlKey = dynamic && version === "legacy" ? "url_base" : "url";
    cy.fixture("properties").then((data) => {
      const url = data[urlKey];
      this.cy.visit(url);
      this.cy.wait(3000);
      this.takeScreenshot(folder, "after-visit-page");
    });
  }

  async signInPage(folder) {
    this.cy.fixture("properties").then((data) => {
      this.cy
        .get("#identification, [name='identification']")
        .type(data.username);
      this.cy.get("#password, [name='password']").type(data.password);
      this.takeScreenshot(folder, "before-sign-in-page");
      this.cy.get('button[type="submit"]').click();
    });

    this.cy.wait(2000);
    this.takeScreenshot(folder, "after-sign-in-page");
  }

  async takeScreenshot(folderName, screenshotName) {
    this.cy.screenshot(`${folderName}/${screenshotName}`, {
      capture: "viewport",
    });
  }
}

module.exports = LoginPage;
