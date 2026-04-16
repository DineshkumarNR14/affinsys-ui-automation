# UI Automation Assignment - Playwright (JavaScript)

## Overview

This project automates a basic e-commerce flow on a demo Shopify website using Playwright with JavaScript.
  https://sauce-demo.myshopify.com/

The test covers:

* Navigating to the homepage
* Selecting a product
* Adding the product to the cart
* Navigating to checkout
* Verifying that the product is successfully added

---

## How to Set Up the Environment

1. Install Node.js (version 16 or above)

2. Install project dependencies:

npm install


3. Install Playwright browsers:

npx playwright install


---

## How to Run the Test

Run the following command:
npx playwright test

---

## Assumptions Made

* The website is a demo Shopify store and may have inconsistent behavior
* Cart updates happen asynchronously after clicking "Add to cart"
* Only one product is added during the test execution

## Challenges Faced

* The "Add to cart" functionality was inconsistent due to delayed backend processing
* The "Check Out" button appeared before becoming fully interactable

## How it was handled:

* Used `waitForLoadState('networkidle')` to ensure backend completion
* Added Playwright assertions (`toBeVisible`, `toBeEnabled`) to ensure UI readiness
* Avoided hard waits to improve test stability

---

## Improvements

* Implement Page Object Model (POM) for better scalability
* Add more test cases (e.g., remove item from cart, multiple items)
* Add reporting and logging
* Improve error handling and retry mechanisms

---

## Test Design Decisions

* Focused on writing a simple and maintainable test without over-engineering
* Used Playwright’s built-in assertions for better reliability
* Preferred stable CSS selectors over XPath
* Combined network-level and UI-level waits to handle asynchronous behavior
* Ensured meaningful validations (product name and quantity)

---
