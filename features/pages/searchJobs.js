const { By, Key } = require('selenium-webdriver');
const chai = require('chai');
const World = require('../support/world');

class SearchJobs {
  searchWithJobTitle(title) {
    return World.driver.findElement(By.id('keywords')).sendKeys(title);
  }

  searchWithLocation(location) {
    return World.driver.findElement(By.id('location')).sendKeys(location).then(() => {
      World.driver.findElement(By.id('location')).sendKeys(Key.ARROW_DOWN);
    });
  }

  selectDistance() {
    return World.driver.findElement(By.id('RadialLocation')).click().then(() => {
      World.driver.findElement(By.css('option[value="10"]')).click();
    });
  }

  clickSearchButton() {
    return World.driver.findElement(By.className('width-full')).click().then(() => {
    // Wait for search results page to be rendered
      return World.driver.manage().setTimeouts({ implicit: 10000 });
    });
  }

  searchResultsDisplayed() {
    return World.driver.findElement(By.id('searching')).getText().then((text) => {
      const splitText = text.split(' ');
      return World.driver.findElements(By.css('.lister__item')).then((elements) => {
        chai.expect(elements.length).to.be.equal(parseInt(splitText[1], 10));
      });
    });
  }
}
module.exports = new SearchJobs();
