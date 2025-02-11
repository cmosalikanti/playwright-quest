import { test, expect } from '@playwright/test';

test('test availability of a hotel', async ({ page }) => {
  //  look for hotels in Barcelona from 20 to 25 December, 2 adults and 1 child ( 9 years old)
  await page.goto('https://www.booking.com/index.en-gb.html');
  await page.getByRole('combobox', { name: 'Where are you going?' }).click();
  await page.getByRole('combobox', { name: 'Where are you going?' }).fill('Barcelona');
  await page.getByRole('combobox', { name: 'Where are you going?' }).press('Tab');
  await page.getByTestId('date-display-field-start').dblclick();
  await page.getByTestId('searchbox-dates-container').locator('svg').click();
  await page.getByRole('checkbox', { name: '20 March' }).click();
  await page.getByTestId('date-display-field-end').click();
  await page.getByTestId('date-display-field-end').click();
  await page.getByRole('checkbox', { name: '25 March' }).click();
  await page.getByTestId('occupancy-config').click();
  await page.locator('div').filter({ hasText: /^0$/ }).locator('button').nth(1).click();
  await page.getByTestId('kids-ages-select').getByRole('combobox').selectOption('9');

  // accept the cookies
  await page.getByRole('button', { name: 'Accept' }).click();

  //  perform the search
  await page.getByRole('button', { name: 'Search' }).click();
  await expect(page.getByLabel('Search results updated.')).toContainText('Barcelona:');
  await expect(page.locator('#bodyconstraint-inner')).toContainText('Filter by:');
  await expect(page.getByTestId('map-entry-point')).toBeVisible();
  await expect(page.getByText('List', { exact: true })).toBeVisible();
  await expect(page.getByText('Grid')).toBeVisible();
  await expect(page.getByTestId('sorters-dropdown-trigger')).toBeVisible();
  await expect(page.getByRole('region', { name: 'Filters' }).getByTestId('filters-group-histogram')).toBeVisible();
  await expect(page.getByRole('combobox', { name: 'Where are you going?' })).toHaveValue('Barcelona');

});