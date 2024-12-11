// @ts-check
const { test, expect } = require('@playwright/test');



for (let step = 1; step < 5; step++) {
test(`compare reading view for page ${step}`, async ({ page }) => {
  await page.goto(`/page_${step}.html`);
    await expect(page).toHaveScreenshot();
})
};
