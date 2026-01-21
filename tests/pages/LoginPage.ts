import { Page, Locator } from "@playwright/test";

export class LoginPage {
  readonly page: Page;
  readonly username: Locator;
  readonly password: Locator;
  readonly loginBtn: Locator;

  constructor(page: Page) {
    this.page = page;
    this.username = page.locator("#user-name");
    this.password = page.locator("#password");
    this.loginBtn = page.locator("#login-button");
  }

  async open() {
    await this.page.goto("/");
  }

  async login(user = "standard_user", pass = "secret_sauce") {
    await this.username.fill(user);
    await this.password.fill(pass);
    await this.loginBtn.click();
  }
}
