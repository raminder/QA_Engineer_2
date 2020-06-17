const { Given, Then } = require('cucumber');
const World = require('../support/world');
const homePage = require('../pages/homePage');

Given('I go to the jobs page', async () => {
  return World.goToJobsPage();
});

Then('I should see the navigation bar', async () => {
  return homePage.isNavigationBarDisplayed();
});

Then('I should see sign in link', async () => {
  return homePage.isSignInDisplayed();
});

Then('I should see create account link', async () => {
  return homePage.isCreateAccountDisplayed();
});

Then('I should see the search fields', async () => {
  return homePage.isSearchFieldsDisplayed();
});

Then('I should see the jobs sector Lists', async () => {
  return homePage.isJobSectorListDisplayed();
});

Then('I should see the jobs blog section', async () => {
  return homePage.isJobBlogDisplayed();
});

Then('I should see the Featured Jobs section', async () => {
  return homePage.isFeatureJobDisplayed();
});

Then('I should see the footer', async () => {
  return homePage.isFooterDisplayed();
});
