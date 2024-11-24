const membersDataAPriori = require("../data-a-priori/members.json");

class MembersPage {
  constructor(cy) {
    this.cy = cy;
    this.membersNavButton = '[data-test-nav="members"]';
    this.newMemberButton = '[data-test-new-member-button="true"]';
  }

  async clickOnMembersMenu() {
    this.cy.get('[data-test-nav="members"]').click();
    this.cy.wait(500);
  }

  async clickOnNewMemberButton() {
    this.cy.get('[data-test-new-member-button="true"]').click();
    this.cy.wait(500);
  }

  async enterMemberName(value) {
    this.cy.get("#member-name").type(value, { force: true });
  }

  async enterMemberEmail(value) {
    if (value !== null && value.trim() !== "") {
      this.cy.get("#member-email").type(value, { force: true });
    }
  }

  async enterMemberNote(value) {
    if (value !== null && value.trim() !== "") {
      this.cy.get("#member-note").type(value, { force: true });
    }
  }

  async enterMemberRepeatedLabels(labels) {
    labels.forEach((l,index) => {
      this.cy.get(".ember-power-select-trigger-multiple-input").type(l, { force: true });
      this.cy.wait(1);
      if (index === 0) {
        this.cy.get(".ember-power-select-trigger-multiple-input").type("{enter}", { force: true });
        this.cy.wait(100);
      } else {
        this.cy.wait(500);
        this.cy.get(".ember-power-select-option--no-matches-message").should("exist");
      }
    });
  }

  async enterMemberLabels(labels) {
    labels.forEach(l => {
      this.cy.get(".ember-power-select-trigger-multiple-input").type(l, { force: true });
      this.cy.wait(1);
      this.cy.get(".ember-power-select-trigger-multiple-input").type("{enter}", { force: true });
      this.cy.wait(100);
    });
  }

  async setNewsletters(value) {
    if (value === true) {
      this.cy.get('[data-test-checkbox="member-subscribed"]').check({force:true});
      this.cy.get('[data-test-checkbox="member-subscribed"]').should('be.checked');
    } else {
      this.cy.get('[data-test-checkbox="member-subscribed"]').uncheck({force:true});
      this.cy.get('[data-test-checkbox="member-subscribed"]').should('not.be.checked');
    }
  }

  async clickOnSaveButton() {
    this.cy.get('[data-test-button="save"]').click();
  }

  async clickOnLeaveButton() {
    this.cy.get("[data-test-leave-button]").should("exist").click({force:true});
  }

  async checkIfMemberCreated(memberName) {
    this.clickOnMembersMenu()
    this.cy.contains("h3", memberName).should("exist");
  }

  async checkIfMemberNotCreated(memberName) {
    //this.clickOnMembersMenu()
    this.cy.contains("h3", memberName).should("not.exist");
  }

  async deleteMemberByEmail(email) {
    this.cy.contains("p", email).should("exist").click({force:true});
    this.cy.get('[data-test-button="member-actions"]').click({force:true});
    this.cy.wait(500);
    this.cy.get('[data-test-button="delete-member"]').click({force:true});
    this.cy.wait(500);
    this.cy.get('[data-test-button="confirm"]').should("exist").click({force:true});
  }

  getAPrioriData(scenarioId) {
    const result = membersDataAPriori.filter(d => d.id === scenarioId);
    if (result.length > 0) {
      return result[0];
    }
    throw new Error("Scenario not found.");
  }

  getPseudoRandomData(scenarioId) {
    return this.cy.request({
      method: 'GET',
      url: `https://my.api.mockaroo.com/${scenarioId.toLowerCase()}.json?key=c2b603b0`,
      headers: {
        'Content-Type': 'application/json'
      },
    }).then((response) => {
      expect(response.status).to.eq(200);
      return response.body;
    });
  }

}

module.exports = MembersPage;
