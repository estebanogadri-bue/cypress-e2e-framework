import LoginPage from '../pages/LoginPage'
import InventoryPage from '../pages/InventoryPage'

describe('Carrito - SauceDemo', () => {
  beforeEach(() => {
    cy.login('standard')
  })

  it('debe agregar todos los productos al carrito', () => {
    InventoryPage.getProductsCount().then((count) => {
      InventoryPage.addAllToCart()
      cy.get('.shopping_cart_badge')
        .should('be.visible')
        .and('have.text', String(count))
    })
  })
})

