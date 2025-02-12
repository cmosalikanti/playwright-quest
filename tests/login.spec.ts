import { test, expect } from '@playwright/test';

test('test successful login', async ({ page }) => {
  await page.goto('https://www.saucedemo.com/');
  await expect(page.locator('#root')).toContainText('Swag Labs');
  await expect(page.locator('[data-test="login-credentials"]').getByRole('heading')).toContainText('Accepted usernames are:');
  await expect(page.locator('[data-test="login-password"]').getByRole('heading')).toContainText('Password for all users:');
  await page.locator('input#user-name').click();
  await page.locator('input#user-name').fill('standard_user');
  await page.locator('input#password').press('Tab');
  await page.locator('input#password').fill('secret_sauce');
  await expect(page.locator('#login-button')).toBeVisible();
  await page.locator('#login-button').click();
  await expect(page.locator('.shopping_cart_link')).toBeVisible();
});