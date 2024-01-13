/// <reference types="cypress" />

describe('Sección', () => {
    it('Primer test', () => {

        cy.visit('/');
        cy.contains('Forms').click();
        cy.contains('Form Layouts').click();

        //Alias
        cy.contains('nb-card', 'Using the Grid').as('usingTheGrid');
        cy.get('@usingTheGrid').find('[for="inputEmail1"]').should('contain', 'Email');

        //Then
        cy.contains('nb-card', 'Using the Grid').then(usingTheGridForm => {
            cy.wrap(usingTheGridForm).find('[for="inputEmail1"]').should('contain', 'Email');
        });
    });
});