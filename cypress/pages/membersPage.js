class MembersPage {

    constructor(cy) {
        this.cy = cy;
        this.newMemberButton = '[data-test-new-member-button="true"]';
    }

    async clickOnMembersMenu() {
        this.cy.get('[data-test-nav="members"]').click();
        this.cy.wait(2000);
    }

    async clickOnNewMemberButton() {
        this.cy.get('[data-test-new-member-button="true"]').click();
        this.cy.wait(2000);
    }

    async enterMemberName(value) {
        this.cy.get('#member-name').type(value, {force:true});
    }

    async enterMemberEmail(value) {
        this.cy.get('#member-email').type(value, {force:true});
    }

    async enterMemberNote(value) {
        this.cy.get('#member-note').type(value, {force:true});
    }

    async clickOnSaveButton() {
        this.cy.get('[data-test-button="save"]').click();
    }

    async checkIfMemberCreated(memberName) {
        this.cy.fixture("properties").then((data) => {
            this.cy.visit(data.url + "#/members");
            this.cy.wait(3000);
            this.cy.contains('h3', memberName).should('exist');
        });
    }

}

module.exports = MembersPage;