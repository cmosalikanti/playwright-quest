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

  test('test successful login', async ({ page }) => {
    await loginPage.enter('standard_user', 'secret_sauce');
    await loginPage.login();

    const shoppingPage = new ShoppingPage(page);
    await expect(shoppingPage.shoppingCardIcon).toBeVisible();
  });
  
  test('test unsuccessful login', async ({ page }) => {
    await loginPage.enter('standard_use', 'secret_sauce');
    await loginPage.login();

    await expect(loginPage.errorMessageContainer).toBeVisible();
});
});