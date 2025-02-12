import { test, expect } from '@playwright/test';
const { LoginPage } = require('../../pages/sauce/login-page');
const { ShoppingPage} = require('../../pages/sauce/shopping-page');

test.describe('Login tests', () => {
    test('test successful login', async ({ page }) => {
        const loginPage = new LoginPage(page);
        await loginPage.goto();
        await expect(loginPage.loginCredentialsContainer).toBeVisible();
        await expect(loginPage.passwordsContainer).toBeVisible();
        await loginPage.enter('standard_user', 'secret_sauce');
        await loginPage.login();

        const shoppingPage = new ShoppingPage(page);
        await expect(shoppingPage.shoppingCardIcon).toBeVisible();
    });
    
    test('test unsuccessful login', async ({ page }) => {
      const loginPage = new LoginPage(page);
      await loginPage.goto();
      await expect(loginPage.loginCredentialsContainer).toBeVisible();
      await expect(loginPage.passwordsContainer).toBeVisible();
      await loginPage.enter('standard_use', 'secret_sauce');
      await loginPage.login();

      await expect(loginPage.errorMessageContainer).toBeVisible();
  });
});