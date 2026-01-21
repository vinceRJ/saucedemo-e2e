import { expect } from "@playwright/test";
import { createBdd } from "playwright-bdd";

const { When, Then } = createBdd();

When("je trie les produits par {string}", async ({ page }, option: string) => {
  await page.locator(".product_sort_container").selectOption({ label: option });
});

Then(
  "le premier produit affiché a un prix inférieur ou égal au second",
  async ({ page }) => {
    const prices = page.locator(".inventory_item_price");
    const p1 = await prices.nth(0).innerText(); // "$7.99"
    const p2 = await prices.nth(1).innerText();

    const n1 = Number(p1.replace("$", ""));
    const n2 = Number(p2.replace("$", ""));
    expect(n1).toBeLessThanOrEqual(n2);
  },
);

Then(
  "le premier produit commence par une lettre plus grande ou égale au second",
  async ({ page }) => {
    const names = page.locator(".inventory_item_name");
    const n1 = (await names.nth(0).innerText()).trim();
    const n2 = (await names.nth(1).innerText()).trim();
    expect(n1.localeCompare(n2)).toBeGreaterThanOrEqual(0);
  },
);
