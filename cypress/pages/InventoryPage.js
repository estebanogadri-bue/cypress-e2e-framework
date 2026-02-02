class InventoryPage {
  elements = {
    title: () => cy.get(".inventory_list > .title"),
    inventoryItems: () => cy.get('[data-test="inventory-item"]'),
    addToCartButtons: () => cy.get('[data-test^="add-to-cart-"]'),
    cartBadge: () => cy.get(".shopping-cart-badge"),
    cartLink: () => cy.get('[data-test="shopping-cart-link"]'),
  }
  /** Agrega todos los productos disponibles al carrito */
  addAllToCart() {
    this.elements.addToCartButtons().each(($btn) => {
      cy.wrap($btn).click()
    })
  }

  /** Abre el carrito */
  goToCart() {
    this.elements.cartLink().click()
  }

  /** Obtiene el badge del carrito */
  getCartBadge() {
    return this.elements.cartBadge()
  }

  /** Cuenta cuántos botones Add to cart hay (productos disponibles) */
  getProductsCount() {
    return this.elements.addToCartButtons().its('length')
  }
}

export default new InventoryPage()
