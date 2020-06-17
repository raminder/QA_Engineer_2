const { Given, Then, When } = require('cucumber');
const { By } = require('selenium-webdriver');
const World = require('../support/world');
const navigationBar = require('../pages/navigationBar');
const homePage = require('../pages/homePage');

When('I click home page link', async () => {
  return navigationBar.clickHomeLink();
});

Then('I should see home page', async () => {
  return homePage.isHomePageOpened();
});

When('I click Find a job link', async () => {
  return navigationBar.clickFindJob();
});

Then('I should see jobs page is open', async () => {
  return navigationBar.isJobsPageOpened();
});

When('I click Job Alerts link', async () => {
  return navigationBar.clickJobAlerts();
});

Then('I should see jobs Alerts is open', async () => {
  return navigationBar.isJobAlertsPageOpened();
});

When('I click Search recruiters link', async () => {
  return navigationBar.clickSearchRecruitersLink();
});

Then('I should see recruiters page is open', async () => {
  return navigationBar.isRecruitersPageOpened();
});

When('I click Jobs blog link', async () => {
  return navigationBar.clickJobsBlog();
});

Then('I should see jobs blog page is open', async () => {
  return navigationBar.isJobsBlogPageOpened();
});
