import { createBdd } from "playwright-bdd";
import { CartPage } from "../pages/CartPage.js";
import { ProductsPage } from "../pages/ProductPage.js";

const { When, Then } = createBdd();

When('je clique sur "Continue Shopping"', async ({ page }) => {
  const cart = new CartPage(page);
  await cart.continueShopping();
});

Then("je suis de retour sur la page des produits", async ({ page }) => {
  const products = new ProductsPage(page);
  await products.assertOnProductsPage();
});
