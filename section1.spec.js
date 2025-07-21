// @ts-check
import { test, chromium, firefox, webkit} from '@playwright/test';

test('has title', async ({ page }) => {
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





