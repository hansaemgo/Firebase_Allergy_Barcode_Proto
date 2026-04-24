const { chromium } = require('playwright');
const fs = require('fs');

(async () => {
  // Create screenshots directory if it doesn't exist
  if (!fs.existsSync('screenshots')) {
    fs.mkdirSync('screenshots');
  }

  const browser = await chromium.launch({ headless: true });
  const context = await browser.newContext({
    viewport: { width: 390, height: 844 }, // iPhone 12 Pro dimensions
    deviceScaleFactor: 3,
    isMobile: true,
    hasTouch: true,
  });

  const page = await context.newPage();

  console.log('Capturing 1. Profile Setup Flow...');
  await page.goto('http://localhost:9002/profiles');
  await page.waitForLoadState('networkidle');
  await page.waitForTimeout(1000);
  await page.screenshot({ path: 'screenshots/1_Profile_Setup_Flow.png', fullPage: true });

  console.log('Capturing 2. Instant Scan Flow...');
  await page.goto('http://localhost:9002/scan');
  await page.waitForLoadState('networkidle');
  await page.waitForTimeout(1000);
  await page.screenshot({ path: 'screenshots/2_Instant_Scan_Flow.png', fullPage: true });

  console.log('Capturing 3. Verdict & Rationale Flow (Loading)...');
  await page.goto('http://localhost:9002/result?profile=준+(아들)');
  // Take screenshot immediately for skeleton loading
  await page.screenshot({ path: 'screenshots/3_Verdict_Flow_Loading.png', fullPage: true });

  console.log('Capturing 3. Verdict & Rationale Flow (Result)...');
  // Result page has a 1.5s simulated delay
  await page.waitForTimeout(2000); 
  await page.screenshot({ path: 'screenshots/3_Verdict_Flow_Result.png', fullPage: true });

  console.log('Capturing 3. Verdict & Rationale Flow (Accordion Expanded)...');
  // Try to click the accordion
  try {
    await page.click('text=위험 요소');
    await page.waitForTimeout(1000); // Wait for expansion/Genkit rationale load (if any)
    await page.screenshot({ path: 'screenshots/3_Verdict_Flow_Accordion.png', fullPage: true });
  } catch (e) {
    console.log('Accordion click failed:', e.message);
  }

  console.log('Capturing 4. Admin Integrity Flow...');
  await page.goto('http://localhost:9002/admin');
  await page.waitForLoadState('networkidle');
  await page.waitForTimeout(1000);
  await page.screenshot({ path: 'screenshots/4_Admin_Integrity_Flow.png', fullPage: true });

  await browser.close();
  console.log('All screenshots captured successfully in the /screenshots directory.');
})();
