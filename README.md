## Installing Playwright
npm init playwright@latest

## Running the Tests
npx playwright test

## To open last HTML report run:
npx playwright show-report

## Running the tests in UI Mode (for a better developer experience with time travel debugging, watch mode)
npx playwright test --ui


## PlayWright features in VS Code:

1. Record new - This will open-up a browser, create a new .spec file and starts to generate the test code when we interact with the browser.
2. Pick locator - Helps to find and get the locators when writing the assertions or just find the locators to navigate.
3. Record at cursor - Point the cursor at a specific line in the test, interact with the browser, test code will be generated at the cursor.