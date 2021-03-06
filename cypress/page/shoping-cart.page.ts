class ShopingCartPage {
  private proceedToCheckoutButton: string;

  constructor() {
    this.proceedToCheckoutButton = ".cart_navigation span";
  }

  public goToCheckout(): void {
    cy.get(this.proceedToCheckoutButton).click();
  }
}

export {ShopingCartPage};
