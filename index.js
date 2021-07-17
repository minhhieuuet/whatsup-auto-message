const puppeteer = require("puppeteer");
const readline = require("readline").createInterface({
  input: process.stdin,
  output: process.stdout,
});
(async () => {
  const browser = await puppeteer.launch({ headless: false });
  const page = await browser.newPage();
  await page.goto("https://web.whatsapp.com");
  // await page.waitForSelector('button[aria-label="Voice message"]');
  await page.waitForNavigation();
  //Copy text can spam truoc khi su dung
  const delay = 200; //Thoi gian delay (ms)

  console.log("Page loaded");
  readline.question("Press 'start' to spamming : ", (command) => {
    if (command == "start") {
      setInterval(async () => {
        await page.keyboard.down("Control");
        await page.keyboard.press("V");
        await page.keyboard.up("Control");
        await page.keyboard.press("Enter");
        console.log("sent");
      }, delay);
      readline.close();
    }
  });
  // await browser.close();
})();
