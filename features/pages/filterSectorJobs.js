const { By, until } = require('selenium-webdriver');
const chai = require('chai');
const World = require('../support/world');

let jobsCount;

class FilterSectorJobs {
  clickJobSector() {
    return World.driver.findElement(By.css('.browse__items li small')).getText().then((text) => {
      jobsCount = parseInt(text, 10);
      return World.driver.findElement(By.css('.browse__items li a')).click().then(() => World.driver.wait(until.elementLocated(By.id('browsing')), 10 * 1000));
    });
  }

  validateJobListsDisplayed() {
    return World.driver.findElements(By.css('.lister__item')).then((elements) => {
      chai.expect(elements.length).to.be.equal(jobsCount);
    });
  }

  clickViewJobDetailsLink() {
    return World.driver.findElement(By.css('.lister__view-details')).click().then(() => World.driver.manage().setTimeouts({ implicit: 10000 }));
  }

  isApplyButtonDisplayed() {
    return World.driver.findElement(By.css('li[class*=applylink')).isDisplayed().then((value) => {
      chai.expect(value).to.be.equal(true);
    });
  }
}
module.exports = new FilterSectorJobs();
