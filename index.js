const puppeteer = require('puppeteer');

(async () => {
  const browser = await puppeteer.launch({headless: false});
  const page = await browser.newPage();
  await page.goto('https://web.whatsapp.com');
  await page.waitForSelector('button[aria-label="Voice message"]');
  
  const waitTime = 5000; //Thoi gian doi sau khi login (ms)
  const message = "Tran Hoang Anh lock R3-08 (R3-03) tang thap" // Tin nhan khong dau;
  const delay = 200; //Thoi gian delay (ms)

  await page.waitFor(waitTime);


  setInterval(async () => {
    message.split("").forEach(async (char) => {
      await page.keyboard.press(char);
    })
    await page.keyboard.press('Enter');
    console.log("sent");
  }, delay);
  // await browser.close();
})();