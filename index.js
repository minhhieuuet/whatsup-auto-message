const puppeteer = require('puppeteer');

(async () => {
  const browser = await puppeteer.launch({headless: false});
  const page = await browser.newPage();
  await page.goto('https://web.whatsapp.com');
  await page.waitForSelector('button[aria-label="Voice message"]');
  
  await page.waitFor(5000);
  setInterval(async () => {
    "test".split("").forEach(async (char) => {
      await page.keyboard.press(char);
    })
    await page.keyboard.press('Enter');
    console.log("sent");
  }, 1000);
  // await browser.close();
})();