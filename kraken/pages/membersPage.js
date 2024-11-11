class MembersPage {
  constructor(driver) {
    this.driver = driver;
  }

  async clickOnMembersMenu() {
    const element = await this.driver.$('a[data-test-nav="members"]');
    await element.click();
  }

  async clickOnNewMemberButton() {
    const element = await this.driver.$('a[data-test-new-member-button="true"]');
    await element.click();
  }

  async fillMemberName(value) {
    const element = await this.driver.$('#member-name');
    await element.setValue(value);
  }

  async fillMemberEmail(value) {
    const element = await this.driver.$('#member-email');
    await element.setValue(value);
  }

  async fillMemberNote(value) {
    const element = await this.driver.$('#member-note');
    await element.setValue(value);
  }

  async clickOnSaveButton() {
    const element = await this.driver.$('button[data-test-button="save"]');
    await element.click();
  }

  async checkIfMemberCreated(url,memberName) {
    await this.driver.url(url + "#/members");
    const h3Element = await this.driver.$("//h3[contains(text(), '" + memberName + "')]");
    await h3Element.waitForExist();
    const text = await h3Element.getText();
    return text === memberName;
  }
}

module.exports = MembersPage;