var reporter = require('cucumber-html-reporter');

var options = {
  theme: 'bootstrap',
  jsonFile: 'e2e/cucumber_report.json',
  output: 'e2e/cucumber_report.html',
  storeScreenshots: true,
  reportSuiteAsScenarios: true,
  launchReport: true,
  metadata: {
    "App": "Automation",
    "Test Environment": "Acceptance",
    "Browser": "Chrome",
    "Platform": "Ubuntu",
    "Parallel": "Scenarios",
    "Executed": "Remote"
  }
};

reporter.generate(options);
