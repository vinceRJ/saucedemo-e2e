import { createBdd } from "playwright-bdd";
import { ProductDetailsPage } from "../pages/ProductDetailsPage.js";
import { ProductsPage } from "../pages/ProductPage.js";

const { When, Then } = createBdd();

When(
  "j'ouvre le détail du produit {string}",
  async ({ page }, productName: string) => {
    const products = new ProductsPage(page);
    await products.openDetails(productName);

    const details = new ProductDetailsPage(page);
    await details.assertOnDetailsPage();
  },
);

When("j'ajoute le produit au panier depuis le détail", async ({ page }) => {
  const details = new ProductDetailsPage(page);
  await details.addToCart();
});

Then(
  "le compteur du panier affiche {string}",
  async ({ page }, value: string) => {
    const products = new ProductsPage(page);
    await products.assertCartBadge(value);
  },
);
