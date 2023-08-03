import { test, expect } from '@playwright/test';

for (let i = 0; i < 20; ++i) {
  const url = `https://example.com/?${i}`;
  test(`should navigate to ${url}`, async ({ page }) => {
    const response = await page.goto(url);
    // Fail the test.
    if (process.env.GITHUB_RUN_ATTEMPT === '1' && url.includes('15'))
      expect(true).toBe(false);
    expect(response.status()).toBe(200);
  });
}
