import { test, expect } from '@playwright/test';

for (let i = 0; i < 20; ++i) {
  const url = `https://example.com/?${i}`;
  test(`should navigate to ${url}`, async ({ page }) => {
    const response = await page.goto(url);
    expect(response.status()).toBe(200);
  });
}
