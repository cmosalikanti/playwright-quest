import { test as base } from '@playwright/test';
import { LoginPage } from '../pages/sauce/login-page';
import { ShoppingPage } from '../pages/sauce/shopping-page';

// Declare the types of your fixtures.
type SauceFixtures = {
  loginPage: LoginPage;
  shoppingPage: ShoppingPage;
};

// Extend base test by providing "todoPage" and "settingsPage".
// This new "test" can be used in multiple test files, and each of them will get the fixtures.
export const test = base.extend<SauceFixtures>({
  loginPage: async ({ page }, use) => {
    // Set up the fixture.
    const loginPage = new LoginPage(page);
    await loginPage.goto();
    await use(loginPage);
  },

  shoppingPage: async ({ page }, use) => {
    await use(new ShoppingPage(page));
  },
});

export { expect } from '@playwright/test';