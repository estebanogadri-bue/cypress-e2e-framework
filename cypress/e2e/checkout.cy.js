import CartPage from "../pages/CartPage";
import CheckOutPage from "../pages/CheckOutPage";
import InventoryPage from "../pages/InventoryPage";
import LoginPage from "../pages/LoginPage"; 

describe("Checkout - SauceDemo", () => {
  let checkoutData;

  before(() => {
    cy.fixture('checkout').then((data) => {
      checkoutData = data.infocheckout;
    });
  });

  beforeEach(() => {
    cy.login("standard");

    // Agregar todos los productos al carrito
    InventoryPage.addAllToCart();

    // Ir al carrito
    InventoryPage.goToCart();

    // Proceder al checkout
    CartPage.checkout();

    // Completar la información de checkout
    CheckOutPage.fillCheckoutInfo(checkoutData.firstName, checkoutData.lastName, checkoutData.postalCode);
  });

  it("debe completar una compra exitosamente", () => {
    // Finalizar la compra
    CheckOutPage.finishPurchase();

    // Verificar que la compra se haya completado
    CheckOutPage.verifyPurchaseComplete();
  });
});
