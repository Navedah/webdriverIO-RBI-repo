exports.config = {
    // user: process.env.LT_USERNAME || "YOUR_USERNAME",
    // key: process.env.LT_ACCESS_KEY || "YOUR_ACCESS_KEY",
    user: 'naveda',
    key: 'bWX2BxuTD0YFs7ZxSrTYvZtGhoaICOZTPvcZp029KXt4rLNlds',
  
    updateJob: false,
    specs: ["./../specs/android-test.js"],
    exclude: [],
  
    commonCapabilities: {
      build: "LT_Appium_NodeJS_WebDriverIO_ltoptions_w3_App_Automation",
      devicelog: true,
      visual: true,  
    },
  
    capabilities: [
      {
        "lt:options": {
          deviceName: "Galaxy .*",
          name: "android_ltOptions",
          isRealMobile: true,
          app: "lt://APP1016062841716312698299133",
          platformName: "Android",
          enableCustomTranslation: true,
        }
      },
    ],
  
    logLevel: "info",
    coloredLogs: true,
    screenshotPath: "./errorShots/",
    baseUrl: "https://mobile-hub.lambdatest.com",
    waitforTimeout: 10000,
    connectionRetryTimeout: 90000,
    connectionRetryCount: 3,
    path: "/wd/hub",
    hostname: process.env.LT_GRID_URL||"mobile-hub.lambdatest.com",
    port: 80,
  
    framework: "mocha",
    mochaOpts: {
      ui: "bdd",
      timeout: 20000,
    },
  };
  
  exports.config.capabilities.forEach(function (caps) {
    for (var i in exports.config.commonCapabilities)
      caps[i] = caps[i] || exports.config.commonCapabilities[i];
  });
  