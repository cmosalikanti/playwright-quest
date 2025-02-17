import { test, expect, request } from '@playwright/test';

test('GET api request', async({request}) => {
    const results = await request.get('https://reqres.in/api/users/2');
    expect(results.status()).toBe(200);
    const responseBody = await results.json();
    expect(responseBody.first_name).not.toBeNull();
});

test('POST API request', async({request}) => {
    const postData = {
        "name": "morpheus",
        "job": "leader"
    };

    const response = await request.post('https://reqres.in/api/users', {
      data: postData,
    });

    expect(response.status()).toBe(201);
    const responseBody = await response.json();
    expect(responseBody.name).toBe(postData.name);
    expect(responseBody.job).toBe(postData.job);
});

test('PUT API request', async({request}) => {
    const postData = {
        "name": "morpheus",
        "job": "zion resident"
    };

    const response = await request.put('https://reqres.in/api/users/2', {
      data: postData,
    });

    expect(response.status()).toBe(200);
    const responseBody = await response.json();
    expect(responseBody.name).toBe(postData.name);
    expect(responseBody.job).toBe(postData.job);
});

test('DELETE API request', async({request}) => {
    const response = await request.delete('https://reqres.in/api/users/2');
    expect(response.status()).toBe(204);
});