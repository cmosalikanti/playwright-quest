import { test, expect } from '@playwright/test';

test('should check that the response is OK', async ({ page }) => {
    const response = await page.request.get('https://www.saucedemo.com/');
    await expect(response).toBeOK();
});

test('should check that the response is not 500', async ({ page }) => {
    const response = await page.request.get('https://www.saucedemo.com');
    expect(response).not.toBe(500);
});