import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('https://demo.playwright.dev/todomvc/#/');
  await page.getByRole('textbox', { name: 'What needs to be done?' }).fill('feed the dog');
  await page.getByRole('textbox', { name: 'What needs to be done?' }).press('Enter');
  await page.getByRole('textbox', { name: 'What needs to be done?' }).fill('water the plants');
  await page.getByRole('textbox', { name: 'What needs to be done?' }).press('Enter');
  await page.getByRole('textbox', { name: 'What needs to be done?' }).fill('read a book with the child');
  await page.getByRole('textbox', { name: 'What needs to be done?' }).press('Enter');
  await page.getByRole('listitem').filter({ hasText: 'read a book with the child' }).getByLabel('Toggle Todo').check();
  await page.getByRole('listitem').filter({ hasText: 'feed the dog' }).getByLabel('Toggle Todo').check();
  await page.getByRole('link', { name: 'Active' }).click();
  await expect(page.getByTestId('todo-title')).toHaveCount(1);
  await page.getByRole('link', { name: 'Completed' }).click();
  await expect(page.getByTestId('todo-title')).toHaveCount(2);

  await page.getByRole('button', { name: 'Clear completed' }).click();
  await page.getByRole('textbox', { name: 'What needs to be done?' }).click();
  await page.getByRole('textbox', { name: 'What needs to be done?' }).fill('take wife to shopping');
  await page.getByRole('textbox', { name: 'What needs to be done?' }).press('Enter');
  await page.getByRole('link', { name: 'Active' }).click();
  await expect(page.getByTestId('todo-title')).toHaveCount(2);
});