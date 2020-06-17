const { By } = require('selenium-webdriver');
const chai = require('chai');
const World = require('../support/world');

class NavigationBar {
  clickHomeLink() {
    return World.driver.findElement(By.linkText('Home')).isDisplayed().then((value) => {
      if (value) {
        return World.driver.findElement(By.linkText('Home')).click();
      }
      return false;
    });
  }

  clickFindJob() {
    return World.driver.findElement(By.linkText('Find a job')).isDisplayed().then((value) => {
      if (value) {
        return World.driver.findElement(By.linkText('Find a job')).click().then(() => {
          return World.driver.manage().setTimeouts({ implicit: 10000 });
        });
      }
      return false;
    });
  }

  isJobsPageOpened() {
    return World.driver.getCurrentUrl().then((url) => {
      chai.expect(url).to.equal('https://jobs.economist.com/jobs/');
    });
  }

  clickJobAlerts() {
    return World.driver.findElement(By.linkText('Job alerts')).isDisplayed().then((value) => {
      if (value) {
        return World.driver.findElement(By.linkText('Job alerts')).click();
      }
      return false;
    });
  }

  isJobAlertsPageOpened() {
    return World.driver.getCurrentUrl().then((url) => {
      chai.expect(url).to.equal('https://jobs.economist.com/newalert/');
    });
  }

  clickSearchRecruitersLink() {
    return World.driver.findElement(By.linkText('Search recruiters')).isDisplayed().then((value) => {
      if (value) {
        return World.driver.findElement(By.linkText('Search recruiters')).click();
      }
      return false;
    });
  }

  isRecruitersPageOpened() {
    return World.driver.getCurrentUrl().then((url) => {
      chai.expect(url).to.equal('https://jobs.economist.com/employers/');
    });
  }

  clickJobsBlog() {
    return World.driver.findElement(By.linkText('Jobs blog')).isDisplayed().then((value) => {
      if (value) {
        return World.driver.findElement(By.linkText('Jobs blog')).click();
      }
      return false;
    });
  }

  isJobsBlogPageOpened() {
    return World.driver.getCurrentUrl().then((url) => {
      chai.expect(url).to.equal('https://jobs.economist.com/careers/');
    });
  }
}

module.exports = new NavigationBar();
