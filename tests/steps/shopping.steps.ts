import { createBdd } from "playwright-bdd";
import { expect } from "@playwright/test";
import { LoginPage } from "../pages/LoginPage.js";
import { ProductsPage } from "../pages/ProductPage.js";
import { CartPage } from "../pages/CartPage.js";
import { CheckoutPage } from "../pages/CheckoutPage.js";

const { Given, When, Then } = createBdd();

Given("je suis sur la page d'accueil", async ({ page }) => {
  const login = new LoginPage(page);
  const products = new ProductsPage(page);

  await login.open();
  await login.login();
  await products.assertOnProductsPage();
});

When(
  "j'ajoute le produit {string} au panier",
  async ({ page }, productName: string) => {
    const products = new ProductsPage(page);
    await products.addToCart(productName);
  },
);

When("je vais au panier", async ({ page }) => {
  const products = new ProductsPage(page);
  await products.goToCart();
  await expect(page).toHaveURL(/cart\.html/);
});

Then(
  "je vois {string} dans le panier",
  async ({ page }, productName: string) => {
    const cart = new CartPage(page);
    await cart.assertHasItem(productName);
  },
);

When(
  "je complète le checkout avec des informations valides",
  async ({ page }) => {
    const cart = new CartPage(page);
    const checkout = new CheckoutPage(page);

    if (!page.url().includes("checkout-step-one")) {
      await cart.startCheckout();
    }

    await checkout.fillForm("John", "Doe", "75000");
    await checkout.continue();
    await checkout.finish();
  },
);

Then("je vois la confirmation de commande", async ({ page }) => {
  const checkout = new CheckoutPage(page);
  await checkout.assertOrderConfirmed();
});

When(
  "je supprime {string} du panier",
  async ({ page }, productName: string) => {
    const cart = new CartPage(page);
    await cart.removeItem(productName);
  },
);

Then("le panier est vide", async ({ page }) => {
  const cart = new CartPage(page);
  await cart.assertEmpty();
});

When("je lance le checkout", async ({ page }) => {
  const cart = new CartPage(page);
  await cart.startCheckout();
  await expect(page).toHaveURL(/checkout-step-one\.html/);
});

When(
  "je renseigne prénom {string}, nom {string}, code postal {string}",
  async ({ page }, prenom: string, nom: string, cp: string) => {
    const checkout = new CheckoutPage(page);
    await checkout.fillForm(prenom, nom, cp);
    await checkout.continue();
  },
);

Then(
  "je vois un message d'erreur {string}",
  async ({ page }, message: string) => {
    const checkout = new CheckoutPage(page);
    await checkout.assertErrorContains(message);
  },
);
