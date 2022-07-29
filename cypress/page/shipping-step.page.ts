class ShippingSteptPage {
  private termsOfService: string;
  private processCarrier: string;

  constructor() {
    this.termsOfService = "#cgv";
    this.processCarrier = "processCarrier";
  }

  public acceptTermsOfService(): void {
    cy.get(this.termsOfService).click();
  }

  public goToCheckout(): void {
    cy.get(`[name=${this.processCarrier}]`).click();
  }
}

export {ShippingSteptPage};
