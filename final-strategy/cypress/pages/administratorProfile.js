class AdminProfile {
  constructor() {
    this.button = "button";
  }

  navigateToAdminProfile() {
    cy.wait(100);
    cy.get(
      '[style="background-image: url(/ghost/assets/img/user-image-639a88b784fb5f10964be8b975ca9fdf.png);"]'
    ).click();
    cy.contains("a", "Your profile").click();
  }

  getAndWrite(labelText, value, field = "input") {
    const input = cy.contains("label", labelText).closest("div").find(field);

    input.clear();
    input.type(value);
  }

  clickButton(textButton) {
    cy.contains(this.button, textButton).click();
  }

  thereIsAButton(textButton) {
    cy.contains(this.button, textButton).should("exist");
  }

  validateHelperText(message) {
    cy.contains("span", message);
  }

  validateInputValue(labelText, expectedValue, field = "input") {
    cy.contains("label", labelText)
      .closest("div")
      .find(field)
      .should("have.value", expectedValue);
  }

  getCurrentPassword() {
    return cy.fixture("properties").then((data) => data.password);
  }
}

export default AdminProfile;
