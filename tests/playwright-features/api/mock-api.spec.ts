import { test, expect } from '@playwright/test';

test('shouldn not the call the api as the request is mocked.', async({ page }) => {
    // Mock the api call before navigating
    await page.route('**/api/users/2', async route => {
        const json = [{ "name": "John Doe" }];
        await route.fulfill({ json });
    });

    // Go to the page
    await page.goto('https://reqres.in/api/users/2');

    //  assert the mock response is present on the page
    await expect(page.getByText('John Doe')).toBeVisible();
});

test('should get the json from response and updates part of it.', async({ page }) => {
    await page.route('**/api/users/2', async route => {
        const response = await route.fetch();
        const json = await response.json();
        json.first_name = "John Doe";
        await route.fulfill({ response, json });
    });

    // Go to the page
    await page.goto('https://reqres.in/api/users/2');

    //  assert the mock response is present on the page
    await expect(page.getByText('John Doe')).toBeVisible();
});