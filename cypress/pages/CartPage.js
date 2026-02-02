class CartPage {
  elements = {
    cartItems: () => cy.get('.cart_item'),
    removeButton: () => cy.get('[data-test^="remove-"]'),
    cartList: () => cy.get('.cart_list'),
    checkoutButton: () => cy.get('[data-test="checkout"]'),
  };

  /** Obtiene todos los items del carrito */
  getItems() {
    return this.elements.cartItems();
  }

  /** Remueve el primer item del carrito */
  removeFirstItem() {
    return this.elements.removeButton().first().click();
  }

  /** Procede al checkout */
  checkout() {
    this.elements.checkoutButton().click();
  }
  
}

export default new CartPage()
