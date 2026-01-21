import { Page, Locator, expect } from "@playwright/test";

export class CartPage {
  readonly page: Page;
  readonly checkoutBtn: Locator;
  readonly continueShoppingBtn: Locator;

  constructor(page: Page) {
    this.page = page;
    this.checkoutBtn = page.locator("#checkout");
    this.continueShoppingBtn = page.locator("#continue-shopping");
  }

  itemName(productName: string) {
    const fullName = productName.includes("Sauce Labs")
      ? productName
      : `Sauce Labs ${productName}`;
    return this.page.locator(".cart_item .inventory_item_name", {
      hasText: fullName,
    });
  }

  removeButton(productName: string) {
    const fullName = productName.includes("Sauce Labs")
      ? productName
      : `Sauce Labs ${productName}`;
    return this.page
      .locator(".cart_item")
      .filter({
        has: this.page.locator(".inventory_item_name", { hasText: fullName }),
      })
      .locator("button:has-text('Remove')");
  }

  async assertHasItem(productName: string) {
    await expect(this.itemName(productName)).toBeVisible();
  }

  async removeItem(productName: string) {
    await this.removeButton(productName).click();
  }

  async assertEmpty() {
    await expect(this.page.locator(".cart_item")).toHaveCount(0);
  }

  async startCheckout() {
    await this.checkoutBtn.click();
  }

  async continueShopping() {
    await this.continueShoppingBtn.click();
  }
}
