class ShopingCartPage {
  private proceedToCheckoutButton: string;
  private textCheckoutButton: string;

  constructor() {
    this.proceedToCheckoutButton = ".cart_navigation .button";
    this.textCheckoutButton = "Proceed to checkout";
  }

  public goToCheckout(): void {
    cy.contains( this.proceedToCheckoutButton, this.textCheckoutButton).click();
  }
}

export {ShopingCartPage};
