const { Then, When } = require('cucumber');
const navigationBar = require('../pages/navigationBar');
const homePage = require('../pages/homePage');

When('I click home page link', async () => navigationBar.clickHomeLink());

Then('I should see home page', async () => homePage.isHomePageOpened());

When('I click Find a job link', async () => navigationBar.clickFindJob());

Then('I should see jobs page is open', async () => navigationBar.isJobsPageOpened());

When('I click Job Alerts link', async () => navigationBar.clickJobAlerts());

Then('I should see jobs Alerts is open', async () => navigationBar.isJobAlertsPageOpened());

When('I click Search recruiters link', async () => navigationBar.clickSearchRecruitersLink());

Then('I should see recruiters page is open', async () => navigationBar.isRecruitersPageOpened());

When('I click Jobs blog link', async () => navigationBar.clickJobsBlog());

Then('I should see jobs blog page is open', async () => navigationBar.isJobsBlogPageOpened());
