const { By } = require('selenium-webdriver');
const chai = require('chai');
const World = require('../support/world');

class HomePage {
  isHomePageOpened() {
    return World.driver.getCurrentUrl().then((url) => {
      chai.expect(url).to.equal('https://jobs.economist.com/');
    });
  }

  isNavigationBarDisplayed() {
    return World.driver.findElement(By.id('primary-nav')).isDisplayed().then((value) => chai.expect(value).to.be.true);
  }

  isSignInDisplayed() {
    return World.driver.findElement(By.linkText('Sign in')).isDisplayed().then((value) => chai.expect(value).to.be.true);
  }

  isCreateAccountDisplayed() {
    return World.driver.findElement(By.linkText('Create account')).isDisplayed().then((value) => chai.expect(value).to.be.true);
  }

  isSearchFieldsDisplayed() {
    return World.driver.findElement(By.css('.search.brick')).isDisplayed().then((value) => chai.expect(value).to.be.true);
  }

  isJobSectorListDisplayed() {
    return World.driver.findElement(By.css('.browse.brick')).isDisplayed().then((value) => chai.expect(value).to.be.true);
  }

  isJobBlogDisplayed() {
    return World.driver.findElement(By.css('.articles.brick')).isDisplayed().then((value) => chai.expect(value).to.be.true);
  }

  isFeatureJobDisplayed() {
    return World.driver.findElement(By.css('.featured-jobs.brick')).isDisplayed().then((value) => chai.expect(value).to.be.true);
  }

  isFooterDisplayed() {
    return World.driver.findElement(By.className('contentinfo')).isDisplayed().then((value) => chai.expect(value).to.be.true);
  }
}

module.exports = new HomePage();
