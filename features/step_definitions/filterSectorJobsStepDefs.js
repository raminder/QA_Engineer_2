const { Then, When } = require('cucumber');
const filterSectorJobs = require('../pages/filterSectorJobs');

When('I click any job sector', async () => filterSectorJobs.clickJobSector());

Then('I should see job results for that sector', async () => filterSectorJobs.validateJobListsDisplayed());

When('I click view details link', async () => filterSectorJobs.clickViewJobDetailsLink());

Then('I should see detailed job with apply button', async () => filterSectorJobs.isApplyButtonDisplayed());
