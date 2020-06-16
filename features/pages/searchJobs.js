const World = require('../support/world');
const { By, Key, until } = require('selenium-webdriver')
const chai = require('chai');


class SearchJobs {

    searchWithJobTitle(title) {
        return World.driver.findElement(By.id('keywords')).sendKeys(title);
    }

    searchWithLocation(location) {
        return World.driver.findElement(By.id('location')).sendKeys(location).then(() => {
            return World.driver.findElement(By.id('location')).sendKeys(Key.ARROW_DOWN);
        });
    }
    selectDistance() {
        return World.driver.findElement(By.id('RadialLocation')).click().then(() => {
            return World.driver.findElement(By.css('option[value="10"]')).click();
        });
    }

    clickSearchButton() {
        return World.driver.findElement(By.className('width-full')).click().then(() => {
            // Wait for search results page to be rendered
            return World.driver.wait(until.elementLocated(By.id('searching')), 10 * 1000);
        });
    }

    searchResultsDisplayed() {
        return World.driver.findElement(By.id('searching')).getText().then(text => {
            var splitText = text.split(' ');
            return World.driver.findElements(By.css('.lister__item')).then(elements => {
                chai.expect(elements.length).to.be.equal(parseInt(splitText[1], 10));
            });
        });
    }
}
module.exports = new SearchJobs();