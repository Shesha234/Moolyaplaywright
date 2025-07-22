// @ts-check
import { test, expect} from '@playwright/test';

test('has title', async ({ page }) => {
    const url='https://www.amazon.in/'
    await page.goto(url);
    await page.locator('//input[@id="twotabsearchtextbox"]').waitFor({state:'visible',timeout:3000})
    await page.locator('//input[@id="twotabsearchtextbox"]').pressSequentially('iphone')
    await page.locator('//input[@id="nav-search-submit-button"]').click()
    await page.locator('//h2[@aria-label="Apple iPhone 15 (128 GB) - Pink"]/span').waitFor({state:'visible',timeout:10000})
    await page.locator('//h2[@aria-label="Apple iPhone 15 (128 GB) - Pink"]/span').scrollIntoViewIfNeeded()
    const text = await page.locator('//h2[@aria-label="Apple iPhone 15 (128 GB) - Pink"]/span').textContent()
    console.log(text)
    await expect(text).toContain('Apple iPhone 15 (128 GB) - Pink');
  
});





