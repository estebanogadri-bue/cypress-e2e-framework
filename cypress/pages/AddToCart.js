class AddToCart {
    elements = {
            addToCartButton: () => cy.get('[data-test="add-to-cart-sauce-labs-backpack"]'),
            cartBadge: () => cy.get('.shopping_cart_badge'),
            removeButton: () => cy.get('[data-test="remove-sauce-labs-backpack"]'),
            cartList: () => cy.get('.cart_list')
        };
        addToCartButton() {
            this.elements.addToCartButton().click();
        }
        openCart() {
            cy.get('.shopping_cart_badge').click();
        }
        removeButton() {
            this.elements.removeButton().click();
        } 
}

export default new AddToCart();