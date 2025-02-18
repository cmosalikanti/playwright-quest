## About

This project aims to explore the various features available in PlayWright (https://playwright.dev/) with different kind of tests.

##  How to set-up the project
1. Clone the project
2. Run the below to install the node dependencies
```
npm install
```
3. Run the tests with the below command line.

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

## Built-in Reporters
#### List reporter
```
npx playwright test --reporter=list
```

#### Line reporter
More concise than the list reporter. Uses a single line to report last finished test, and prints failures when they occur.
```
npx playwright test --reporter=line
```

#### Dot reporter
Very concise - it only produces a single character per successful test run.
```
npx playwright test --reporter=dot
```

#### HTML reporter
Produces a self-contained folder that contains report for the test run that can be served as a web page.
```
npx playwright test --reporter=html
```

A quick way of opening the last test run report is:
```
npx playwright show-report
```

## Allure reporter
1. Allure reporter is configured for this project. Please see the below in playwright.config.ts
```
reporter: [['list', { printSteps: true }], ["allure-playwright"]],
```
2. Install Allure report for Node.js as below:
```
npm install -g allure-commandline
```
3. Run the tests as below:
```
npx playwright test --reporter=line,allure-playwright
```
4. The above command will generate 'allure-results' directory with all the files ready to generate the report. Now, let's generate the report with:
```
allure generate ./allure-results -o ./allure-report
```
5. Open the generated report:
```
allure open ./allure-report
```
More configuration with reporters at: https://playwright.dev/docs/test-reporters

## Sample apps for testing:
https://demo.playwright.dev/todomvc/#/

https://www.saucedemo.com/

## PlayWright features in VS Code:

1. Record new - This will open-up a browser, create a new .spec file and starts to generate the test code when we interact with the browser.
2. Pick locator - Helps to find and get the locators when writing the assertions or just find the locators to navigate.
3. Record at cursor - Point the cursor at a specific line in the test, interact with the browser, test code will be generated at the cursor.