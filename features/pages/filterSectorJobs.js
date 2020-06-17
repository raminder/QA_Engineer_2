const World = require('../support/world');
const { By, until, WebElement } = require('selenium-webdriver')
const chai = require('chai');
var jobsCount;

class FilterSectorJobs {
    clickJobSector() {
        return World.driver.findElement(By.css('.browse__items li small')).getText().then((text) => {
            jobsCount = parseInt(text, 10);
            return World.driver.findElement(By.css('.browse__items li a')).click().then(() => {
                return World.driver.wait(until.elementLocated(By.id('browsing')), 10 * 1000);
            });
        });
    }

    validateJobListsDisplayed() {
        return World.driver.findElements(By.css('.lister__item')).then(elements => {
            chai.expect(elements.length).to.be.equal(jobsCount);
        });
    }

    clickViewJobDetailsLink() {
        return World.driver.findElement(By.css('.lister__view-details')).click().then(() => {
            return World.driver.wait(until.elementLocated(By.css('.job-pagination')), 10 * 1000);
        });
    }

    isApplyButtonDisplayed() {
        return World.driver.findElement(By.css('li[class*=applylink')).isDisplayed().then((value) => {
            chai.expect(value).to.be.true;
        });
    }
}
module.exports = new FilterSectorJobs();