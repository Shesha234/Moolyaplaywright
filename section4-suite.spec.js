// @ts-check
import { test, expect, chromium, firefox, webkit} from '@playwright/test';


test.describe('Example.com Test Suite', () => {
    test.beforeEach(async ({ page }) => {
        console.log('execute before test')
    });

    test('1', async ({ page }) => {
        const url='https://playwright.dev/'

        async function browsers_Contexts(btype, bname) {
            const browser = await btype.launch();
            const page = await browser.newPage();
            await page.goto(url);
            await page.screenshot({ path: `screenshot-${bname}.png` });
            await browser.close();
            console.log(`${bname} screenshot saved.`);
        }
        
            await browsers_Contexts(chromium, 'chromium');
            await browsers_Contexts(firefox, 'firefox');
            await browsers_Contexts(webkit, 'webkit');
    
    });


    test('2', async ({ page }) => {
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

    test('3', async ({ page }) => {
        const url='https://practicetestautomation.com'
        await page.goto(url+'/practice-test-login/'); // Replace with your login page URL
        await page.locator('#username').fill('student');
        await page.locator('#password').fill('Password123');
        await page.locator('#submit').hover();
        await page.locator('#submit').click();
        await page.waitForURL(url+'/logged-in-successfully/');
        const logoutButton = page.getByText('Log out');
        await expect(logoutButton).toBeVisible();
    
    });
});
