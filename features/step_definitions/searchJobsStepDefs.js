const { When, Then } = require('cucumber');
const searchJobs = require('../pages/searchJobs');

When('I enter job term {string}', async (title) => searchJobs.searchWithJobTitle(title));

When('I click search button', async () => searchJobs.clickSearchButton());

Then('I should see relevant job results', async () => searchJobs.searchResultsDisplayed());

When('I enter job location {string}', async (location) => searchJobs.searchWithLocation(location));

When('I choose distance', async () => searchJobs.selectDistance());
