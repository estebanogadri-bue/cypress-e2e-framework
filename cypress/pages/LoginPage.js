class LoginPage {
  elements = {
    username: () => cy.get('[data-test="username"]'),
    password: () => cy.get('[data-test="password"]'),
    loginButton: () => cy.get('[data-test="login-button"]'),
    errorMessage: () => cy.get('[data-test="error"]'),
  }

  /** Navega a la página de login */
  visit() {
    cy.visit('/')
  }

  /** Realiza el login con usuario y contraseña */
  login(username, password) {
    this.elements.username().type(username)
    this.elements.password().type(password)
    this.elements.loginButton().click()
  }

  /** Obtiene el mensaje de error */
  getErrorMessage() {
    return this.elements.errorMessage()
  }
}

export default new LoginPage()