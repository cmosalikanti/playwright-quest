import { test, expect } from '@playwright/test';
const { LoginPage } = require('../../pages/sauce/login-page');
const { ShoppingPage} = require('../../pages/sauce/shopping-page');

test.describe('Login tests', () => {
  let loginPage;
  
  test.beforeEach(async ({ page }) => {
    loginPage = new LoginPage(page);
    await loginPage.goto();
    await expect(loginPage.loginCredentialsContainer).toBeVisible();
    await expect(loginPage.passwordsContainer).toBeVisible();
  });

  [
    { userName: 'standard_user' },
    { userName: 'performance_glitch_user' },
  ].forEach(({ userName }) => {
    test(`Login test with ${userName}`, async ({ page }) => {
      await loginPage.enter(userName, 'secret_sauce');
      await loginPage.login();

      const shoppingPage = new ShoppingPage(page);
      await expect(shoppingPage.shoppingCardIcon).toBeVisible();
    });
  });
});