import { test as setup, expect } from '@playwright/test';
const { LoginPage } = require('../../pages/sauce/login-page');
const { ShoppingPage} = require('../../pages/sauce/shopping-page');
import path from 'path';

const sauceUserFile = path.join(__dirname, '../../playwright/.auth/sauce-user.json');
const saucePerformamceGlitchUserFile = path.join(__dirname, '../../playwright/.auth/sauce-performance-glitch-user.json');

setup('authenticate as sauce-user', async ({ page }) => {
    let loginPage = new LoginPage(page);
    await loginPage.goto();
    await loginPage.enter('standard_user', 'secret_sauce');
    await loginPage.login();

    const shoppingPage = new ShoppingPage(page);
    await expect(shoppingPage.shoppingCardIcon).toBeVisible();

    await page.context().storageState({ path: sauceUserFile });
    console.log('User state saved to ' + sauceUserFile);
});

setup('authenticate as sauce performance_glitch_user', async ({ page }) => {
    let loginPage = new LoginPage(page);
    await loginPage.goto();
    await loginPage.enter('performance_glitch_user', 'secret_sauce');
    await loginPage.login();

    const shoppingPage = new ShoppingPage(page);
    await expect(shoppingPage.shoppingCardIcon).toBeVisible();

    await page.context().storageState({ path: saucePerformamceGlitchUserFile });
    console.log('User state saved to ' + saucePerformamceGlitchUserFile);
});
