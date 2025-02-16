import { test, expect } from '../../../fixtures/sauce-fixture';

test.describe('Login tests', () => {
  test('test successful login', async ({ loginPage, shoppingPage }) => {
    await loginPage.enter('standard_user', 'secret_sauce');
    await loginPage.login();

    await expect(shoppingPage.shoppingCardIcon).toBeVisible();
  });
  
  test('test unsuccessful login', async ({ loginPage }) => {
    await loginPage.enter('standard_use', 'secret_sauce');
    await loginPage.login();

    await expect(loginPage.errorMessageContainer).toBeVisible();
  });
});