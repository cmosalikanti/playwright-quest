import { test, expect, request, APIRequestContext } from '@playwright/test';

let apiContext: APIRequestContext;

test.beforeAll(async() => {
    apiContext = await request.newContext({
        baseURL: 'https://reqres.in'
    })
});

test('GET api request', async({}) => {
    const results = await apiContext.get('/api/users/2');
    expect(results.status()).toBe(200);
    const responseBody = await results.json();
    expect(responseBody.first_name).not.toBeNull();
});

test('POST API request', async({}) => {
    const postData = {
        "name": "morpheus",
        "job": "leader"
    };

    const response = await apiContext.post('/api/users', {
      data: postData,
    });

    expect(response.status()).toBe(201);
    const responseBody = await response.json();
    expect(responseBody.name).toBe(postData.name);
    expect(responseBody.job).toBe(postData.job);
});

test('PUT API request', async({}) => {
    const postData = {
        "name": "morpheus",
        "job": "zion resident"
    };

    const response = await apiContext.put('/api/users/2', {
      data: postData,
    });

    expect(response.status()).toBe(200);
    const responseBody = await response.json();
    expect(responseBody.name).toBe(postData.name);
    expect(responseBody.job).toBe(postData.job);
});

test('DELETE API request', async({}) => {
    const response = await apiContext.delete('/api/users/2');
    expect(response.status()).toBe(204);
});