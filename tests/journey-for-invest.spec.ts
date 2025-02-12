import { test, expect } from '@playwright/test';

test('test a journey for investing', async ({ page }) => {
  await page.goto('https://portfolio-we-fe-u.morgenfund.com/#/welcome');
  await page.getByRole('button', { name: 'Allow all' }).click();
  await expect(page.getByText('Portfolio value calculatorOne')).toBeVisible();
  await expect(page.getByRole('button', { name: 'Open widget' })).toBeVisible();
  await page.getByTitle('Get started', { exact: true }).click();
  await expect(page.getByRole('heading')).toContainText('Welcome to MorgenFund Online Investing!');
  await expect(page.getByText('Securely encrypted')).toBeVisible();
  await expect(page.getByRole('button', { name: 'Back' })).toBeVisible();
  await page.getByRole('button', { name: 'Start' }).click();
  await page.getByRole('radio', { name: 'Woman' }).check();
  await page.getByRole('radio', { name: 'Germany' }).click();
  await page.locator('#mui-component-select-customer-age').click();
  await page.getByRole('option', { name: '27' }).click();
  await page.getByRole('button', { name: '​', exact: true }).click();
  await page.getByRole('option', { name: 'a permanent employee' }).click();
  await expect(page.locator('.silcrow-icon')).toBeVisible();
  await page.getByRole('button', { name: '​', exact: true }).click();
  await page.getByRole('option', { name: 'Financial institution' }).click();
  await page.getByRole('button', { name: 'Next' }).click();
  await expect(page.getByRole('heading')).toContainText('How much would you like to invest?');
});