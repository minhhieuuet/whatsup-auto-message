const puppeteer = require("puppeteer");

(async () => {
  const browser = await puppeteer.launch({ headless: false });
  const page = await browser.newPage();
  await page.goto("https://web.whatsapp.com");
  await page.waitForSelector('button[aria-label="Voice message"]');

  //Copy text can spam truoc khi su dung
  const waitTime = 5000; //Thoi gian doi sau khi login (ms)
  const delay = 200; //Thoi gian delay (ms)

  await page.waitFor(5000);

  let interval;
  interval = setInterval(async () => {
    await page.keyboard.down("Control");
    await page.keyboard.press("V");
    await page.keyboard.up("Control");
    await page.keyboard.press("Enter");
    console.log("sent");
  }, delay);
  // await browser.close();
})();
