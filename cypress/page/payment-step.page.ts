class PaymentStepPage {
  private payBank: string;
  private order: string;
  private messageOrder: string;

  constructor() {
    this.payBank = ".bankwire";
    this.order = "#cart_navigation > button";
    this.messageOrder = ".cheque-indent > .dark";
  }

  public goToPaymentStep(): void {
    cy.get(this.payBank).click();
  }

  public confirmOrder(): void {
    cy.get(this.order).click();
  }

  public getConfirmMessageOrder() {
    return cy.get(this.messageOrder);
  }
}

export {PaymentStepPage};
