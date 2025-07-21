// @ts-check
import { test, chromium, firefox, webkit} from '@playwright/test';

test('has title', async ({ page }) => {
    const url='https://playwright.dev/'

    async function browsers_Contexts(browserName){
    let browsers;
    if(browserName=='chromium'){
        browsers =await chromium.launch()}
    else if(browserName=='firefox'){
        browsers =await firefox.launch()}
    else if(browserName=='webkit'){
        browsers =await webkit.launch()}
    else {
        throw new Error(`Unknown browser: ${browserName}`);
        }
    const pages = await browsers.newPage();
    await pages.goto(url);
    await pages.screenshot({ path: `screenshot-${browserName}.png` });
    await pages.close();
    console.log(`${browserName} screenshot saved.`);
    }

    browsers_Contexts('chromium')
    browsers_Contexts('firefox')
    browsers_Contexts('webkit')
  
});





