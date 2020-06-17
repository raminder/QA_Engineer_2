const { When, Then } = require('cucumber');
const searchJobs = require('../pages/searchJobs');

When('I enter job term {string}', async (title) => {
  return searchJobs.searchWithJobTitle(title);
});

When('I click search button', async () => {
  return searchJobs.clickSearchButton();
});

Then('I should see relevant job results', async () => {
  return searchJobs.searchResultsDisplayed();
});

When('I enter job location {string}', async (location) => {
  return searchJobs.searchWithLocation(location);
});

When('I choose distance', async () => {
  return searchJobs.selectDistance();
});
