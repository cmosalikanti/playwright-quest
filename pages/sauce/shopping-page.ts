import type { Page, Locator } from '@playwright/test';

export class ShoppingPage {
    private page: Page;
    shoppingCardIcon: Locator;

    public constructor(page: Page) {
        this.page = page;
        this.shoppingCardIcon = page.locator('.shopping_cart_link');
    }
}