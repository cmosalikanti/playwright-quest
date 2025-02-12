import type { Page, Locator } from '@playwright/test';

export class LoginPage {
    private userName: Locator;
    private password: Locator;
    private loginCredentialsContainer: Locator;
    private passwordsContainer: Locator;
    private loginButton: Locator;
    private page: Page;
    private errorMessageContainer: Locator;

    constructor(page: Page) {
        this.page = page;
        this.userName = page.locator('input#user-name');
        this.password = page.locator('input#password');
        this.loginCredentialsContainer = page.locator('#login_credentials');
        this.passwordsContainer = page.locator('.login_password');
        this.loginButton = page.locator('#login-button');
        this.errorMessageContainer = page.locator('.error-message-container');
    }

    async goto() {
        await this.page.goto('https://www.saucedemo.com/');
    }

    async enter(username: string, password: string) {
        await this.userName.click();
        await this.userName.fill(username);
        await this.password.press('Tab');
        await this.password.fill(password);
    }

    async login() {
        await this.loginButton.click();
    }
}