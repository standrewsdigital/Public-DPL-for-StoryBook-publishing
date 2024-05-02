username = process.env.BROWSERSTACK_USERNAME
accessKey = process.env.BROWSERSTACK_ACCESS_KEY
buildName = process.env.BROWSERSTACK_BUILD_NAME
buildNumber = process.env.BROWSERSTACK_BUILD_NUMBER
local = process.env.BROWSERSTACK_LOCAL
localIdentifier = process.env.BROWSERSTACK_LOCAL_IDENTIFIER

var capabilities = {
  'bstack:options' : {
    "os" : "Windows",
    "osVersion" : "10",
    "buildName" : "BStack Build Number: " + buildNumber,
    "sessionName" : "BStack Build Name: " + buildName,
    "local" : local,
    "localIdentifier" : localIdentifier,
    "userName" : username,
    "accessKey" : accessKey,
    "seleniumVersion" : "4.0.0",
  },
    "browserName" : "Chrome",
}

var driver = new webdriver.Builder().
  usingServer("https://hub-cloud.browserstack.com/wd/hub").
  withCapabilities(capabilities).
  build();