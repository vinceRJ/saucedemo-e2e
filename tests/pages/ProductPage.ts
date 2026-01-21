import { Page, Locator, expect } from "@playwright/test";

export class ProductsPage {
  readonly page: Page;
  readonly cartLink: Locator;
  readonly cartBadge: Locator;
  readonly sortSelect: Locator;

  constructor(page: Page) {
    this.page = page;
    this.cartLink = page.locator(".shopping_cart_link");
    this.cartBadge = page.locator(".shopping_cart_badge");
    this.sortSelect = page.locator(".product_sort_container");
  }

  private fullProductName(productName: string) {
    return productName.includes("Sauce Labs")
      ? productName
      : `Sauce Labs ${productName}`;
  }

  addToCartButton(productName: string) {
    const fullName = this.fullProductName(productName);
    return this.page
      .locator(".inventory_item")
      .filter({
        has: this.page.locator(".inventory_item_name", { hasText: fullName }),
      })
      .locator("button:has-text('Add to cart')");
  }

  async addToCart(productName: string) {
    await this.addToCartButton(productName).click();
  }

  async goToCart() {
    await this.cartLink.click();
  }

  async assertOnProductsPage() {
    await expect(this.page).toHaveURL(/inventory\.html/);
  }

  async openDetails(productName: string) {
    const fullName = this.fullProductName(productName);
    await this.page
      .locator(".inventory_item_name", { hasText: fullName })
      .click();
  }

  async assertCartBadge(value: string) {
    await expect(this.cartBadge).toHaveText(value);
  }

  async sortBy(label: string) {
    await this.sortSelect.selectOption({ label });
  }
}
