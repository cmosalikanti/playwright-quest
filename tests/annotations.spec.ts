import { test, expect } from '@playwright/test';

//  marks the test as irrelevant. Playwright does not run such a test. Use this annotation when the test is not applicable in some configuration.
test.skip('skip this test', async({ page } ) => {
    await expect("a string").toBeGreaterThan(4);
});

//  marks the test as failing. Playwright will run this test and ensure it does indeed fail. If the test does not fail, Playwright will complain.
test.fail('this test will fail', async({ page } ) => {
    await expect(3).toBeGreaterThan(4);
});

//  marks the test as failing. Playwright will not run this test, as opposed to the fail annotation. Use fixme when running the test is slow or crashes.
test.fixme('TODO: please fix me', async({ page } ) => {
    await expect(page.clock).toHaveProperty("minute");
});

test('A slow test', async({ page } ) => {
//  marks the test as slow and triples the test timeout.
    test.slow();
    await page.goto('https://the-internet.herokuapp.com/');
    await page.waitForTimeout(5000);
    console.log('After delay, proceeding with further actions.');
});