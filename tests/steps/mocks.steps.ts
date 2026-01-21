import { expect } from "@playwright/test";
import { createBdd } from "playwright-bdd";
import { mockInventoryHtml } from "../../utils/mockRoutes.js";

const { Given, When, Then } = createBdd();

Given("le catalogue est mocke", async ({ page }) => {
  await mockInventoryHtml(page);
});

When("je vais sur la page des produits", async ({ page }) => {
  await page.goto("/inventory.html");
});

Then("je vois le titre {string}", async ({ page }, text: string) => {
  await expect(page.locator('[data-test="mock-title"]')).toHaveText(text);
});
