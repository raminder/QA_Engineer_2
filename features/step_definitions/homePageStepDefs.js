const { Given, Then } = require('cucumber');
const World = require('../support/world');
const homePage = require('../pages/homePage');

Given('I go to the jobs page', async () => World.goToJobsPage());

Then('I should see the navigation bar', async () => homePage.isNavigationBarDisplayed());

Then('I should see sign in link', async () => homePage.isSignInDisplayed());

Then('I should see create account link', async () => homePage.isCreateAccountDisplayed());

Then('I should see the search fields', async () => homePage.isSearchFieldsDisplayed());

Then('I should see the jobs sector Lists', async () => homePage.isJobSectorListDisplayed());

Then('I should see the jobs blog section', async () => homePage.isJobBlogDisplayed());

Then('I should see the Featured Jobs section', async () => homePage.isFeatureJobDisplayed());

Then('I should see the footer', async () => homePage.isFooterDisplayed());
