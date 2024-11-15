class MembersPage {
  constructor(cy) {
    this.cy = cy;
    this.newMemberButton = '[data-test-new-member-button="true"]';
  }

  async clickOnMembersMenu(folderName) {
    this.cy.get('[data-test-nav="members"]').click();
    this.cy.wait(2000);
    this.takeScreenshot(folderName, "click-on-members-menu");
  }

  async clickOnNewMemberButton(folderName) {
    this.cy.get('[data-test-new-member-button="true"]').click();
    this.cy.wait(2000);
    this.takeScreenshot(folderName, "click-on-new-member-button");
  }

  async enterMemberName(value, folderName) {
    this.cy.get("#member-name").type(value, { force: true });
    this.takeScreenshot(folderName, "enter-member-name");
  }

  async enterMemberEmail(value, folderName) {
    this.cy.get("#member-email").type(value, { force: true });
    this.takeScreenshot(folderName, "enter-member-email");
  }

  async enterMemberNote(value, folderName) {
    this.cy.get("#member-note").type(value, { force: true });
    this.takeScreenshot(folderName, "enter-member-note");
  }

  async clickOnSaveButton(folderName) {
    this.cy.get('[data-test-button="save"]').click();
    this.takeScreenshot(folderName, "click-on-save-button");
  }

  async checkIfMemberCreated(memberName, folderName) {
    this.cy.fixture("properties").then((data) => {
      this.cy.visit(data.url + "#/members");
      this.cy.wait(3000);
      this.cy.contains("h3", memberName).should("exist");
    });
    this.takeScreenshot(folderName, "check-if-member-created");
  }

  async takeScreenshot(folderName, screenshotName) {
    cy.screenshot(`${folderName}/${screenshotName}`, {
      capture: "fullPage",
    });
  }
}

module.exports = MembersPage;
