import { test, expect } from '@playwright/test';

test('should not the call the actual api but return a mock response.', async({ page }) => {
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

test('should get the json from actual response and modify a part of it via mock', async({ page }) => {
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