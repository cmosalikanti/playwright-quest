## Installing Playwright
```
npm init playwright@latest
```

## Command line - running the Tests

Run all the tests
```
npx playwright test
```

Run a single test file
```
npx playwright test tests/add-todo.spec.ts
```

Run tests in interactive UI mode, with a built-in watch mode (Preview)
```
npx playwright test --ui
```

Run tests in headed browsers
```
npx playwright test --headed
```

Run all the tests against a specific project
```
npx playwright test --project=chromium
```

To open last HTML report run:
```
npx playwright show-report
```

## Sample apps for testing:
https://demo.playwright.dev/todomvc/#/
https://www.saucedemo.com/

## PlayWright features in VS Code:

1. Record new - This will open-up a browser, create a new .spec file and starts to generate the test code when we interact with the browser.
2. Pick locator - Helps to find and get the locators when writing the assertions or just find the locators to navigate.
3. Record at cursor - Point the cursor at a specific line in the test, interact with the browser, test code will be generated at the cursor.