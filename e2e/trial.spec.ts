import { expect, test } from '@playwright/test';

test('a visitor starts a free trial', async ({ page }) => {
  await page.goto('/trial');
  await page.getByLabel('Full name').fill('Anna Petit');
  await page.getByLabel('Work email').fill('anna@bistro-lune.fr');
  await page.getByLabel('Number of locations').selectOption('1');
  await page.getByRole('button', { name: 'Start my free trial' }).click();
  await expect(page.getByText(/Thanks Anna, your \d+-day free trial is ready/)).toBeVisible();
});

test('the trial form refuses an email without a domain', async ({ page }) => {
  await page.goto('/trial');
  await page.getByLabel('Full name').fill('Anna Petit');
  await page.getByLabel('Work email').fill('anna@');
  await page.getByLabel('Number of locations').selectOption('1');
  await page.getByRole('button', { name: 'Start my free trial' }).click();
  await expect(page.getByText('Enter a valid work email.')).toBeVisible();
});
