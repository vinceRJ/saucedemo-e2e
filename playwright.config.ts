import { defineConfig } from "@playwright/test";
import { defineBddConfig } from "playwright-bdd";

const testDir = defineBddConfig({
  features: "tests/features/**/*.feature",
  steps: "tests/steps/**/*.ts",
  // output par défaut : .feature-gen (chez toi)
});

export default defineConfig({
  testDir: testDir, // ✅ ici c'est une string (un dossier)
  use: {
    baseURL: "https://www.saucedemo.com",
    headless: true,
    screenshot: "only-on-failure",
    video: "retain-on-failure",
  },
});
