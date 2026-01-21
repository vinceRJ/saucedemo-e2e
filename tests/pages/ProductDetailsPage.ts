import { Page, Locator, expect } from "@playwright/test";

export class ProductDetailsPage {
  readonly page: Page;
  readonly addToCartBtn: Locator;
  readonly backToProductsBtn: Locator;
  readonly cartLink: Locator;

  constructor(page: Page) {
    this.page = page;
    this.addToCartBtn = page.locator("button:has-text('Add to cart')");
    this.backToProductsBtn = page.locator("#back-to-products");
    this.cartLink = page.locator(".shopping_cart_link");
  }

  async addToCart() {
    await this.addToCartBtn.click();
  }

  async backToProducts() {
    await this.backToProductsBtn.click();
  }

  async assertOnDetailsPage() {
    await expect(this.page).toHaveURL(/inventory-item\.html/);
  }
}
