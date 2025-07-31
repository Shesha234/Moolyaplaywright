import { test, expect, request } from '@playwright/test';

let apiData;

test.describe('API to UI Test | JSONPlaceholder + demoqa.com', () => {
  test.beforeAll(async () => {
    const apiContext = await request.newContext();
    const response = await apiContext.get('https://jsonplaceholder.typicode.com/users/1');

    expect(response.ok()).toBeTruthy();

    const user = await response.json();

    apiData = {
      name: user.name,
      email: user.email,
      currentAddress: `${user.address.street}, ${user.address.city}`,
      permanentAddress: `${user.address.suite}, ${user.address.zipcode}`,
    };

    console.log('✅ API Data Loaded:', apiData);
  });

  test('Fill form on demoqa.com using API data', async ({ page }) => {
    await page.goto('https://demoqa.com/text-box');

    await page.fill('#userName', apiData.name);
    await page.fill('#userEmail', apiData.email);
    await page.fill('#currentAddress', apiData.currentAddress);
    await page.fill('#permanentAddress', apiData.permanentAddress);

    await page.click('#submit');

    await expect(page.locator('#output')).toBeVisible();
    await expect(page.locator('#name')).toContainText(apiData.name);
    await expect(page.locator('#email')).toContainText(apiData.email);

    console.log('✅ Form submitted and validated with API data');
  });
});
