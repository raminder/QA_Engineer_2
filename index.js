const reporter = require('cucumber-html-reporter');

const options = {
  theme: 'bootstrap',
  jsonFile: 'report/cucumber_report.json',
  output: 'report/cucumber_report.html',
  reportSuiteAsScenarios: true,
  scenarioTimestamp: true,
  launchReport: true,
  metadata: {
    Browser: 'Chrome 83',
  },
};

reporter.generate(options);
