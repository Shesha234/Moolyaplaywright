import { test, expect } from '@playwright/test';
import formData from '../data/formData.json' assert { type: 'json' };

test.describe('DemoQA Practice Form Submission', () => {
  for (const data of formData) {
    test(`should submit form for ${data.firstName} ${data.lastName}`, async ({ page }) => {
      await page.goto('https://demoqa.com/automation-practice-form');

      // Remove ads/footer that might block elements
      await page.evaluate(() => {
        document.querySelectorAll('#fixedban, .footer').forEach(el => el.remove());
      });

      // Fill the form
      await page.fill('#firstName', data.firstName);
      await page.fill('#lastName', data.lastName);
      await page.fill('#userEmail', data.email);
      await page.locator(`label[for="gender-radio-${data.gender === 'Male' ? '1' : '2'}"]`).click();
      await page.fill('#userNumber', data.mobile);

      // Submit the form
      await page.click('#submit');

      // Assertion: Check for confirmation dialog
      await expect(page.locator('#example-modal-sizes-title-lg')).toHaveText('Thanks for submitting the form');

      // Close modal
      await page.click('#closeLargeModal');
    });
  }
});



// import { test, expect } from '@playwright/test';
// import formData from '../data/formData.json' assert { type: 'json' };

// test.describe('Automated Form Submission', () => {
//   for (const data of formData) {
//     test(`Submit form for ${data.name}`, async ({ page }) => {
//       await page.goto('https://example.com/contact'); // Replace with actual form URL

//       // Fill out form fields (use real selectors)
//       await page.fill('#name', data.name);
//       await page.fill('#email', data.email);
//       await page.fill('#message', data.message);
//       await page.click('#submit-button');

//       // Validate success message (update selector accordingly)
//       await expect(page.locator('#success-message')).toContainText('Thank you');
//     });
//   }
// });
