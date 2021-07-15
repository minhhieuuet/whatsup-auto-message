const puppeteer = require('puppeteer');

(async () => {
  const browser = await puppeteer.launch({headless: false});
  const page = await browser.newPage();
  await page.goto('https://web.whatsapp.com');
  await page.waitForSelector('button[aria-label="Voice message"]');
  
  await page.waitFor(5000);
  setInterval(async () => {
    "Tran Hoang Anh lock R3-08 (R3-03) tang thap".split("").forEach(async (char) => {
      await page.keyboard.press(char);
    })
    await page.keyboard.press('Enter');
    console.log("sent");
  }, 200);
  // await browser.close();
})();