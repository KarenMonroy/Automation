const specsFile = require('./protractor.specs.js');
const downloadDir = require('path').join(__dirname, 'screenshot');
cd = './driver/chromedriver';
exports.config = {
  allScriptsTimeout: 120000,
  chromeDriver: cd,
  specs: specsFile.specs,
  multiCapabilities: [
    {
      browserName: process.env.PROTRACTOR_BROWSER || 'chrome',
      chromeOptions: {
        args: [
          '--headless',
          '--disable-gpu',
          '--window-size=5000,2500',
          '--no-sandbox',
          '--disable-dev-shm-usage'
        ],
        prefs: {
          download: {
            prompt_for_download: false,
            directory_upgrade: true
          },
          safebrowsing: {enabled: false, disable_download_protection: true },
          browser: { set_download_behavior: { behavior: 'allow'} }
        }
      }
    }
  ],
  directConnect: true,
  framework: 'custom',
  frameworkPath: require.resolve('protractor-cucumber-framework'),
  // cucumber command line options
  cucumberOpts: {
    require: ['step_definitions/*/*.ts', 'step_definitions/*/*/*.ts'],
    strict: true
  },

  onPrepare() {
    require('ts-node').register({
      project: require('path').join(__dirname, './tsconfig.e2e.json')
    });
    browser.driver.sendChromiumCommand('Page.setDownloadBehavior', {
      behavior: 'allow',
      downloadPath: downloadDir
    });
  }
};
