const { faker } = require("@faker-js/faker");
const { Given, When, Then } = require("@cucumber/cucumber");
const LoginPage = require("../../../pages/loginPage");
const MembersPage = require("../../../pages/membersPage");

Given(
    "El usuario está en la página de inicio de sesión {kraken-string}",
    async function (url) {
        this.url = url;
        this.loginPage = new LoginPage(this.driver);
        await this.driver.url(url);
    }
);

When(
    "El usuario inicia sesión {kraken-string} {kraken-string}",
    async function (email, password) {
        await this.loginPage.login(email, password);
    }
);

When(
    "El usuario navega a la sección 'Members'",
    async function () {
        this.membersPage = new MembersPage(this.driver);
        await this.membersPage.clickOnMembersMenu();
    }
);

When(
    "El usuario hace clic en el botón 'New member'",
    async function () {
        this.membersPage.clickOnNewMemberButton();
    }
);

When(
    "El usuario digita el nombre del nuevo miembro",
    async function () {
        this.memberName = faker.person.fullName()
        this.membersPage.fillMemberName(this.memberName);
    }
);

When(
    "El usuario digita el email del nuevo miembro",
    async function () {
        this.membersPage.fillMemberEmail(faker.internet.email());
    }
);

When(
    "El usuario digita una nota para el nuevo miembro",
    async function () {
        this.membersPage.fillMemberNote(faker.string.alphanumeric(1,500));
    }
);

When(
    "El usuario hace clic en el botón 'Save'",
    async function () {
        this.membersPage.clickOnSaveButton();
    }
);

Then("El usuario verifica que se agregó el nuevo miembro",
    async function () {
        return await this.membersPage.checkIfMemberCreated(this.url,this.memberName);
    }
);