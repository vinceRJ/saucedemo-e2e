import { defineConfig } from "@playwright/test";
import { defineBddConfig } from "playwright-bdd";

const testDir = defineBddConfig({
  features: "tests/features/**/*.feature",
  steps: "tests/steps/**/*.ts",
});

export default defineConfig({
  testDir: testDir, 
  use: {
    baseURL: "https://www.saucedemo.com",
    headless: true,
    screenshot: "only-on-failure",
    video: "retain-on-failure",
  },
});
