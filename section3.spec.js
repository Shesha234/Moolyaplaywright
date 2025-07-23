// @ts-check
import { test, expect} from '@playwright/test';

test('has title', async ({ page }) => {
    const url='https://practicetestautomation.com'
    await page.goto(url+'/practice-test-login/'); // Replace with your login page URL
    await page.locator('#username').fill('student');
    await page.locator('#password').fill('Password123');
    await page.locator('#submit').click();
    await page.waitForURL(url+'/logged-in-successfully/');
    const logoutButton = page.getByText('Log out');
    await expect(logoutButton).toBeVisible();
  
});


