class ConfigPage {
  constructor(cy) {
    this.cy = cy;
  }

  async goToSettings() {
    this.cy.get('a[href="#/settings/"]').click();
  }

  async tryFilter(texto) {
    this.cy.get('input[placeholder="Search settings"]').type(texto);
  }

  async validateFilter() {
    this.cy
      .get("div")
      .should("contain.text", "We couldn't find any setting matching");
  }

  async validateSearch() {
    this.cy.get("a#timezone").should("exist");
  }

  async SetLanguage(valor) {
    this.cy
      .get('[data-testid="publication-language"] button')
      .contains("Edit")
      .click();
    this.cy.get('input[placeholder="Site language"]').clear().type(valor);
  }

  async save() {
    this.cy.contains("button", "Save").click();
  }

  async setTitle(valor) {
    this.cy
      .get('[data-testid="title-and-description"] button')
      .contains("Edit")
      .click();
    this.cy.get('input[placeholder="Site title"]').clear().type(valor);
  }

  async setDescription(valor) {
    this.cy
      .get('[data-testid="title-and-description"] button')
      .contains("Edit")
      .click();
    this.cy.get('input[placeholder="Site description"]').clear().type(valor);
  }

  async setMetadataTitle(valor) {
    this.cy.get('[data-testid="metadata"] button').contains("Edit").click();
    this.cy.get('[data-testid="metadata"] input').first().clear().type(valor);
  }

  async setMetadataDescription(valor) {
    this.cy.get('[data-testid="metadata"] button').contains("Edit").click();
    this.cy.get('[data-testid="metadata"] input').eq(1).clear().type(valor);
  }
}

module.exports = ConfigPage;
