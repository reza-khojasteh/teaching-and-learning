const { remote } = require("webdriverio");

// (async () => {
//   const browser = await remote({
//     capabilities: {
//       browserName: "chrome",
//     },
//   });

//   await browser.url("https://webdriver.io");

//   const apiLink = await browser.$("=API");
//   await apiLink.click();

//   await browser.saveScreenshot("./screenshot.png");
//   await browser.deleteSession();
// })();

(async () => {
  const browser = await remote({
    capabilities: {
      browserName: "chrome",
    },
  });

  await browser.url("ez2catch.com");

  const link = await browser.$("=All Courses");
  console.log(await link.getText()); // outputs: "All Courses"

  await link.click();
  await browser.pause(10000);

  await browser.deleteSession();
})();
