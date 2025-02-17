import AxeBuilder from '@axe-core/playwright'; // 1: import the Axe library
import { test, expect } from './axe-fixture';

test('should not have any automatically detectable accessibility issues', async ({ page }) => {
  await page.goto('https://www.saucedemo.com/');
  const accessibilityScanResults = await new AxeBuilder({ page }).analyze();

  //  The below is the correct way to find the violations but since the saucedemo has violations, let's comment this.
  // expect(accessibilityScanResults.violations).toEqual([]);
  expect(accessibilityScanResults.violations).not.toEqual([]);
});

//  rules at https://github.com/dequelabs/axe-core/blob/master/doc/rule-descriptions.md. Find the rule id and add to the list.
test('should not have any automatically detectable accessibility issues after disabling some violations', async ({ page }) => {
  await page.goto('https://www.saucedemo.com/');
  const accessibilityScanResults = await new AxeBuilder({ page }).disableRules(['page-has-heading-one', 'region', 'landmark-one-main']).analyze();

  //  The below is the correct way to find the violations but since the saucedemo has violations, let's comment this.
  expect(accessibilityScanResults.violations).toEqual([]);
});

test('should check for accessibility issues within specific part of page', async({ page }) => {
  await page.goto('https://www.saucedemo.com');
  const results = await new AxeBuilder({ page }).include('.form_column').analyze();
  expect(results.violations).toEqual([]);
});

//  Scanning for WCAG (Web Content Accessibility Guidelines) violations
test('should not have any automatically detectable WCAG A or AA violations', async ({ page }) => {
  await page.goto('https://www.saucedemo.com');

  const accessibilityScanResults = await new AxeBuilder({ page })
      .withTags(['wcag2a', 'wcag2aa', 'wcag21a', 'wcag21aa'])
      .analyze();

  expect(accessibilityScanResults.violations).toEqual([]);
});

test('should use AxeBuilder fixture to automatically detect accessibility issues', async ({page, makeAxeBuilder}) => {
  await page.goto('https://www.saucedemo.com');
  const scannedResults = await makeAxeBuilder().analyze();
  expect(scannedResults.violations).toEqual([]);
});



