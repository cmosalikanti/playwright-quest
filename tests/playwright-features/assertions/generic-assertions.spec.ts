//  GenericAssertions: Methods from this class can be used make assertions about any values in the tests.

import { test, expect } from '@playwright/test';

test('assert a value', async ({ page }) => {
    const value = 1;
    expect(value).toBe(1);
});

test('should match the object instance created from the constructor', async ({ page }) => {
    class Example {}
    expect(new Example()).toEqual(expect.any(Example));
    expect("hello").toEqual(expect.any(String));
    expect("1").not.toEqual(expect.any(Number));
    expect(1).toEqual(expect.any(Number));
});

test('should be falsy', async({page}) => {
    // one of: false, 0, '', null, undefined or NaN
    const value = null;
    expect(value).toBeFalsy();
});

test('should be truthy', async({page}) => {
    // anything but false, 0, '', null, undefined or NaN
    const value = 1;
    expect(value).toBeTruthy();
});

test('should throw error', async({page}) => {
    const error = () => {
        throw new Error() ;
    };
    expect(error).toThrow();
    expect(error).toThrowError();
});