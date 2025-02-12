import { test as base, expect } from '@playwright/test';
import { LoginPage } from '../../pages/sauce/login-page';
const { ShoppingPage} = require('../../pages/sauce/shopping-page');

// Extend basic test by providing a "loginPage" fixture.
const test = base.extend<{ loginPage: LoginPage }>({
  loginPage: async ({ page }, use) => {
    const loginPage = new LoginPage(page);
    await loginPage.goto();
    await use(loginPage);

    //  after the above line, the control will go to the test
  },
});

test.describe('Login tests', () => {
  test('test successful login', async ({ loginPage, page }) => {
    await loginPage.enter('standard_user', 'secret_sauce');
    await loginPage.login();

    const shoppingPage = new ShoppingPage(page);
    await expect(shoppingPage.shoppingCardIcon).toBeVisible();
  });
  
  test('test unsuccessful login', async ({ loginPage }) => {
    await loginPage.enter('standard_use', 'secret_sauce');
    await loginPage.login();

    await expect(loginPage.errorMessageContainer).toBeVisible();
});
});