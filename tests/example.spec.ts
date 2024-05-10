import { test, expect } from '@playwright/test';

test('has title', async ({ page }) => {
  await page.goto('/gh-actions-workshop-example/');

  await expect(page).toHaveTitle(/React/);
});

test('click button ', async ({ page }) => {
  await page.goto('/gh-actions-workshop-example/');

  await page.getByRole('button').click();

  // Expects page to have a heading with the name of Installation.
  await expect(page.getByRole('button')).toHaveText('count is 1');
});
