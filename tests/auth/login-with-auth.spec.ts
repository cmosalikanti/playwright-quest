import { test, expect } from '@playwright/test';
const { ShoppingPage} = require('../../pages/sauce/shopping-page');

//  we'll use the storageUser state from the below file to authenticate. The state has been initially set-up via auth.setup.ts, 
//  which was configured as a dependency in the playwright.config.ts
test.use({ storageState: 'playwright/.auth/sauce-performance-glitch-user.json' });
test('Should be authenticated by performance_glitch_user via storageState', async ({ page }) => {
    await page.goto('https://www.saucedemo.com/inventory.html');

    const shoppingPage = new ShoppingPage(page);
    await expect(shoppingPage.shoppingCardIcon).toBeVisible();
});

test.describe('Login tests', () => {
    
    //  let's use a different storage state ( a different user) to authenticate
    test.use({ storageState: 'playwright/.auth/sauce-user.json' });
    test('should be able to use auth state to successfully login as standard user', async ({ page }) => {
        await page.goto('https://www.saucedemo.com/inventory.html');

        const shoppingPage = new ShoppingPage(page);
        await expect(shoppingPage.shoppingCardIcon).toBeVisible();
    });
});