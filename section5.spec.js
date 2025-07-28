// @ts-check
import { test, expect, chromium, firefox, webkit} from '@playwright/test';

test('Waits for new content after scrolling', async ({ page }) => {
    await page.goto('https://demoqa.com/');
    await page.getByText('Elements').waitFor({state:'attached'});
    await page.getByText('Elements').click();
    await page.getByText('Buttons').waitFor({state:'attached'});
    await page.getByText('Buttons').click();
    const initialItems = await page.locator('//button[@type="button"]').count();

    await page.keyboard.press('PageDown');
    await page.waitForTimeout(2000); 
    await page.waitForSelector('//button[@id="doubleClickBtn"]', {timeout: 5000,});

    const finalItems = await page.locator('//button[@type="button"]').count();

    expect(finalItems).toBeGreaterThanOrEqual(initialItems);
});

