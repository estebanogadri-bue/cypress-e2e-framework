class LoginPage {
    elements = {
        username: () => cy.get('[data-test="username"]'),
        password: () => cy.get('[data-test="password"]'),
        loginButton: () => cy.get('[data-test="login-button"]'),
        errorMessage: () => cy.get('[data-test="error"]'),
    }

visit() {
    cy.visit('/');
}   

Login(username, password) {
    this.elements.username().type(username);
    this.elements.password().type(password);
    this.elements.loginButton().click();
}

getErrorMessage() {
    return this.elements.errorMessage();
}   
}

export default new LoginPage();