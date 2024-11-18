class MembersPage {
  constructor(driver) {
    this.driver = driver;
  }

  async clickOnMembersMenu() {
    const element = await this.driver.$('//a[@href="#/members/"]');
    await element.click();
  }

  async clickOnNewMemberButton() {
    const element = await this.driver.$('//a[@href="#/members/new/"]');
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
    /*const h3Element = await this.driver.$("//h3[contains(text(), '" + memberName + "')]");
    await h3Element.waitForExist();
    const text = await h3Element.getText();
    return text === memberName;*/
    const member = (await this.driver.$$("h3")).some(
      async (element) => (await element.getText()) === memberName
    );
    if (!member) throw new Error(`Member ${memberName} was not found`);
    return member;
  }
}

module.exports = MembersPage;