const { faker } = require('@faker-js/faker');

const LoginPage = require('../../pages/login');
const TagPage = require('../../pages/tag');

describe('Crear tag', () => {
    const loginPage = new LoginPage(cy);
    const tagPage = new TagPage(cy);

    it('E012 - Crear tag con nombre y demas atributos', () => {
        // Given: I navigate to page
        cy.log({ displayName: 'Given', message: 'I navigate to page' });
        loginPage.visitPage();

        // When: I enter email, password and I do click on Sign-in
        cy.log({ displayName: 'When', message: 'I enter email, password and I do click on Sign-in' });
        loginPage.singInPage();

        // When: I click on tags menu
        cy.log({ displayName: 'When', message: 'I click on tags menu' });
        tagPage.clickOnTagMenu();

        // When: I click on new menu
        cy.log({ displayName: 'When', message: 'I click on new menu' });
        tagPage.clickOnNewTag();

        // When: I enter a tag name
        const tagName = faker.lorem.word();
        cy.log({ displayName: 'When', message: `I enter a tag name "${tagName}"` });
        tagPage.setTagName(tagName);

         // When: I enter a tag color
         const tagColor = faker.color.rgb({ casing: 'upper', prefix: '' });
         cy.log({ displayName: 'When', message: `I enter a tag color "${tagName}"` });
         tagPage.setTagColor(tagColor);

         // When: I enter a tag description
         const tagDescription = faker.lorem.sentence();
         cy.log({ displayName: 'When', message: `I enter a tag description "${tagDescription}"` });
         tagPage.setTagDescription(tagDescription);

         // When: I upload a tag file
         cy.log({ displayName: 'When', message: 'I upload a image' });
         tagPage.setTagImage('rocket-icon.png');

        // When: I click on save tag
        cy.log({ displayName: 'When', message: 'I click on save tag' });
        tagPage.clickOnSaveTag();

        // When: I click on tags menu
        cy.log({ displayName: 'When', message: 'I click on tags menu' });
        tagPage.clickOnTagMenu();

        // Then: I see tag name on list
        cy.log({ displayName: 'Then', message: `I see tag name "${tagName}" on list` });
        tagPage.findTagNameCreated(tagName);
    })
});
