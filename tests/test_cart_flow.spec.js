import { test, expect } from '@playwright/test';

test('User can add product to cart and verify in cart page', async ({ page }) => {

  // launch website
  await page.goto('https://sauce-demo.myshopify.com/');

  // Select specific product
  const product = page.getByText('Grey jacket');
  const productName = (await product.textContent()).trim();
  await product.click();

  /// Add to cart
  await page.getByRole('button', { name: /add to cart/i }).click();

  // async cart update
await page.waitForLoadState('networkidle');

//checkout
const checkout = page.getByRole('link', { name: 'Check Out' });
await expect(checkout).toBeVisible({ timeout: 10000 });
await expect(checkout).toBeEnabled();
await checkout.click();

// Validate cart with productname and count
  const cartRow = page.locator('.row.first');
  await expect(cartRow).toContainText(productName);
  await expect(cartRow).toHaveCount(1);

});