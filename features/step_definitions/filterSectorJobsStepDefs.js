const { Then, When } = require('cucumber');
const filterSectorJobs = require('../pages/filterSectorJobs');

When('I click any job sector', async () => {
  return filterSectorJobs.clickJobSector();
});

Then('I should see job results for that sector', async () => {
  return filterSectorJobs.validateJobListsDisplayed();
});

When('I click view details link', async () => {
  return filterSectorJobs.clickViewJobDetailsLink();
});

Then('I should see detailed job with apply button', async () => {
  return filterSectorJobs.isApplyButtonDisplayed();
});
