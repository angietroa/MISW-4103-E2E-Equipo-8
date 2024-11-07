describe('Crear tag', () => {
    beforeEach(() => {
        cy.visit('http://localhost:2368/ghost')
        cy.wait(7000)
    })

    it('E011 - Crear tag solo con nombre', () => {
        cy.fixture("properties").then((data) => {
            cy.get("#identification").type(data.username);
            cy.get("#password").type(data.password);
            cy.get('button[type="submit"]').click();
        })

        cy.wait(1000)
    })
});
