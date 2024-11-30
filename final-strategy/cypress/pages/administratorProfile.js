class AdminProfile {
  constructor() {
    this.button = "button";
  }

  navigateToAdminProfile() {
    cy.wait(100);
    cy.get(
      '[style="background-image: url(/ghost/assets/img/user-image-639a88b784fb5f10964be8b975ca9fdf.png);"]'
    ).click();
    cy.contains("a", "Your profile").click({ waitForAnimations: false });
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

  returnOriginalPassword(newPassword) {
    return this.getCurrentPassword().then((originalPassword) => {
      this.clickButton("Change password");
      this.getAndWrite("Old password", newPassword);
      this.getAndWrite("New password", originalPassword);
      this.getAndWrite("Verify password", originalPassword);
      this.clickButton("Change password");
    });
  }

  AddNewPassword(newPassword) {
    return this.getCurrentPassword().then((originalPassword) => {
      this.clickButton("Change password");
      this.getAndWrite("Old password", originalPassword);
      this.getAndWrite("New password", newPassword);
      this.getAndWrite("Verify password", newPassword);
      this.clickButton("Change password");
    });
  }

  validatePassword() {
    cy.get(
      "span.mt-1.inline-block.text-xs.text-red.dark\\:text-red-500.order-3"
    ).should("contain.text", "Sorry, you cannot use an insecure password.");
  }

  clickOnDoneButton() {
    cy.get("#done-button").click();
  }

  validateAdminName(name) {
    cy.get(".gh-user-avatar").click({ waitForAnimations: false });
    cy.get(".gh-user-name").should("have.text", name);
  }

  validateAdminMail(email) {
    cy.get(".gh-user-avatar").click({ waitForAnimations: false });
    cy.get(".gh-user-email").should("have.text", email);
  }

  restoreMail(email) {
    cy.get('a[data-test-nav="user-profile"]').click();
    this.getAndWrite("Email", email);
    this.clickButton("Save");
  }

  validateAdminSlug(slug) {
    cy.get(".gh-user-avatar").click({ waitForAnimations: false });
    cy.get('a[data-test-nav="user-profile"]').click();
    cy.contains("label", "Slug")
      .closest("div")
      .find("input")
      .should("not.have.value", slug);
  }

  validateRedSpan() {
    cy.get("span").should("have.class", "text-red");
  }
}

module.exports = AdminProfile;
