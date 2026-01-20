import AddToCart from '../pages/AddToCart'; 

describe('add to cart', () => {

    beforeEach(function() {
        cy.visit('/') ;
        cy.get('#user-name').type('standard_user')
        cy.get('#password').type('secret_sauce')
        cy.get('#login-button').click()

        cy.url().should('include', '/inventory')
        cy.get('[data-test="title"]').should('have.text', 'Products');
    })
})