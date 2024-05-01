const { Builder } = require('selenium-webdriver');
const browserstackUser = process.env.BROWSERSTACK_USERNAME;
const browserstackKey = process.env.BROWSERSTACK_ACCESS_KEY;

(async function runTests() {
  let driver = new Builder()
    .usingServer('http://hub-cloud.browserstack.com/wd/hub')
    .withCapabilities({
      'browserName': 'Chrome',
      'browserstack.user': browserstackUser,
      'browserstack.key': browserstackKey,
      'resolution': '1024x768',
      'name': 'Bstack-[Node] Sample Test'
    })
    .build();

  try {
    await driver.get('http://localhost:8000/html-examples/accordion.html');
    // Additional commands to interact with the page can be added here
  } finally {
    await driver.quit();
  }
})();
