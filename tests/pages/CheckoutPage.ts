import { Page, Locator, expect } from "@playwright/test";

export class CheckoutPage {
  readonly page: Page;
  readonly firstName: Locator;
  readonly lastName: Locator;
  readonly postalCode: Locator;
  readonly continueBtn: Locator;
  readonly finishBtn: Locator;
  readonly error: Locator;

  constructor(page: Page) {
    this.page = page;
    this.firstName = page.locator("#first-name");
    this.lastName = page.locator("#last-name");
    this.postalCode = page.locator("#postal-code");
    this.continueBtn = page.locator("#continue");
    this.finishBtn = page.locator("#finish");
    this.error = page.locator('[data-test="error"]');
  }

  async fillForm(fn: string, ln: string, pc: string) {
    await this.firstName.fill(fn);
    await this.lastName.fill(ln);
    await this.postalCode.fill(pc);
  }

  async continue() {
    await this.continueBtn.click();
  }

  async finish() {
    await this.finishBtn.click();
  }

  async assertOrderConfirmed() {
    await expect(this.page.locator(".complete-header")).toBeVisible();
  }

  async assertErrorContains(msg: string) {
    await expect(this.error).toContainText(msg);
  }
}
