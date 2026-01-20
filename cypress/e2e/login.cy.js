import LoginPage from "../pages/LoginPage"  

describe('Login tests', () => {

    it ('iniciar sesion con usuario válido y cerrar sesión', () => {
        LoginPage.visit()
        cy.login("standard");
    
        cy.url().should('include', '/inventory')
        cy.get('[data-test="title"]').should('have.text', 'Products');

    // Logout
  
        cy.get('#react-burger-menu-btn').click()
        cy.get('#logout_sidebar_link').click()
    })

    it ('iniciar sesion con usuario inválido', () => {
        LoginPage.visit()
        cy.get('#user-name').type('invalid_user')
        cy.get('#password').type('wrong_password')
        cy.get('#login-button').click()
        cy.get('[data-test="error"]').should('be.visible')
            .and('have.text', 'Epic sadface: Username and password do not match any user in this service')
    })
})
