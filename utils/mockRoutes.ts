import { Page } from "@playwright/test";
import fs from "node:fs";
import path from "node:path";

export async function mockInventoryHtml(page: Page) {
  const filePath = path.resolve("tests/mocks/inventory.mock.html");
  const html = fs.readFileSync(filePath, "utf-8");

  await page.route("**/inventory.html*", async (route) => {
    await route.fulfill({
      status: 200,
      contentType: "text/html; charset=utf-8",
      body: html,
    });
  });
}

export async function mockInventoryDown(page: Page) {
  await page.route("**/inventory.html*", async (route) => {
    await route.fulfill({
      status: 503,
      contentType: "text/plain",
      body: "Service Unavailable (mock)",
    });
  });
}
