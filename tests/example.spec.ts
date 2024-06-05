import { test, expect } from '@playwright/test';

test('has title', async ({ page }) => {
  await page.goto('/gh-actions-workshop-example/');

  await expect(page).toHaveTitle(/GitHub Actions Workshop/);
});
