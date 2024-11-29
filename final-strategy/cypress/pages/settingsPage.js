const settingsDataAPriori = require("../data-a-priori/settings.json");

class SettingsPage {
  constructor(cy) {
    this.cy = cy;
    this.settingsNavButton = '[data-test-nav="settings"]';
  }

  async visit() {
    this.cy.get(this.settingsNavButton).click();
    this.cy.wait(500);
  }

  async clickOnMenu(name) {
    this.cy.contains("a",name).should("exist").click();
    this.cy.wait(10);
  }

  async clickOnEdit(section) {
    this.cy.get('[data-testid="' + section + '"]').contains('span',"Edit").click();
    this.cy.wait(10);
  }

  async clickOnSave(section) {
    this.cy.get('[data-testid="' + section + '"]').contains('span',"Save").click();
    this.cy.wait(10);
  }

  async setMetadataDescription(value) {
    this.cy.get('[data-testid="metadata"]').find('[placeholder="Thoughts, stories and ideas."]').type(value);
    this.cy.wait(10);
  }

  async setXCardTitle(value) {
    this.cy.get('[data-testid="twitter"]').find('input[type="text"]').first().type(value);
    this.cy.wait(10);
  }

  async setXCardDescription(value) {
    this.cy.get('[data-testid="twitter"]').find('input[type="text"]').eq(1).type(value);
    this.cy.wait(10);
  }

  async setFacebookTitle(value) {
    this.cy.get('[data-testid="facebook"]').find('input[type="text"]').first().type(value);
    this.cy.wait(10);
  }

  async setFacebookDescription(value) {
    this.cy.get('[data-testid="facebook"]').find('input[type="text"]').eq(1).type(value);
    this.cy.wait(10);
  }

  async setFacebookProfile(value) {
    this.cy.get('[data-testid="social-accounts"]').find('input[type="text"]').eq(0).clear().type(value);
    this.cy.wait(10);
  }

  async setXProfile(value) {
    this.cy.get('[data-testid="social-accounts"]').find('input[type="text"]').eq(1).clear().type(value);
    this.cy.wait(10);
  }

  getAPrioriData(scenarioId) {
    const result = settingsDataAPriori.filter(d => d.id === scenarioId);
    if (result.length > 0) {
      return result[0];
    }
    throw new Error("Scenario not found.");
  }

}

module.exports = SettingsPage;
