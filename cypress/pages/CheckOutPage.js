class CheckOutPage {
  elements = {
    checkoutButton: () => cy.get('[data-test="checkout"]'),
    firstNameInput: () => cy.get('[data-test="firstName"]'),
    lastNameInput: () => cy.get('[data-test="lastName"]'),
    postalCodeInput: () => cy.get('[data-test="postalCode"]'),
    continueButton: () => cy.get('[data-test="continue"]'),
    finishButton: () => cy.get('[data-test="finish"]'),
    titleFinal: () => cy.get('.complete-header'),
  };

  /** Completa la informaciÃ³n de checkout */
  fillCheckoutInfo(firstName, lastName, postalCode) {
    this.elements.firstNameInput().type(firstName);
    this.elements.lastNameInput().type(lastName);
    this.elements.postalCodeInput().type(postalCode);
    this.elements.continueButton().click();
  }

  /** Finaliza la compra */
  finishPurchase() {
    this.elements.finishButton().click();
  }

  /** Verifica que se haya completado la compra */
  verifyPurchaseComplete() {
    this.elements.titleFinal().should('be.visible');
  }
}

export default new CheckOutPage();
