class AddressStepPage {
  private processAddress: string;

  constructor() {
    this.processAddress = "processAddress";
  }

  public goToCheckout(): void {
    cy.get(`[name=${this.processAddress}]`).click();
  }
}

export {AddressStepPage};
