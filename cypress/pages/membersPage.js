class MembersPage {
  constructor(cy) {
    this.cy = cy;
    this.newMemberButton = '[data-test-new-member-button="true"]';
  }

  async clickOnMembersMenu(folderName, legacy = false) {
    if (legacy) {
      this.cy.get('a[href="#/members/"]').first().click();
      this.cy.wait(2000);
      this.takeScreenshot(folderName, "click-on-members-menu");
    } else {
      this.cy.get('[data-test-nav="members"]').click();
      this.cy.wait(2000);
      this.takeScreenshot(folderName, "click-on-members-menu");
    }
  }

  async clickOnNewMemberButton(folderName, legacy) {
    if (legacy) {
      this.cy.get("span").contains("New member").click();
      this.cy.wait(2000);
      this.takeScreenshot(folderName, "click-on-new-member-button");
    } else {
      this.cy.get('[data-test-new-member-button="true"]').click();
      this.cy.wait(2000);
      this.takeScreenshot(folderName, "click-on-new-member-button");
    }
  }

  async enterMemberName(value, folderName, legacy = false) {
    if (legacy) {
      this.cy.get("#member-name").type(value);
      this.takeScreenshot(folderName, "enter-member-name");
    } else {
      this.cy.get("#member-name").clear().type(value, { delay: 100 });
      this.takeScreenshot(folderName, "enter-member-name");
    }
  }

  async enterMemberEmail(value, folderName) {
    this.cy.get("#member-email").type(value);
    this.takeScreenshot(folderName, "enter-member-email");
  }

  async enterMemberNote(value, folderName) {
    this.cy.get("#member-note").type(value, { force: true });
    this.takeScreenshot(folderName, "enter-member-note");
  }

  async clickOnSaveButton(folderName, legacy = false) {
    if (legacy) {
      this.cy.get("span").contains("Save").click();
      this.takeScreenshot(folderName, "click-on-save-button");
    } else {
      this.cy.get('[data-test-button="save"]').click();
      this.takeScreenshot(folderName, "click-on-save-button");
    }
  }

  async checkIfMemberCreated(memberName, folderName, legacy) {
    if (legacy) {
      this.cy.get('a[href="#/members/"]').first().click();
      this.cy.wait(3000);
      this.cy.contains("h3", memberName).should("exist");
    } else {
      this.cy.fixture("properties").then((data) => {
        this.cy.visit(data.url + "#/members");
        this.cy.wait(3000);
        this.cy.contains("h3", memberName).should("exist");
      });
    }
    this.takeScreenshot(folderName, "check-if-member-created");
  }

  async takeScreenshot(folderName, screenshotName) {
    cy.screenshot(`${folderName}/${screenshotName}`, {
      capture: "fullPage",
    });
  }
}

module.exports = MembersPage;
