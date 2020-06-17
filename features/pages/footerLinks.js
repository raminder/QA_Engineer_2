const { By, until } = require('selenium-webdriver');
const chai = require('chai');
const World = require('../support/world');

class Footer {
  IsAboutUsLinkClickable() {
    return World.driver.findElement(By.linkText('About Us')).click().then(() => World.driver.wait(until.elementLocated(By.css('.wrapper h1')), 10 * 1000).then(() => World.driver.getCurrentUrl().then((url) => chai.expect(url).to.include('about-us'))));
  }

  IsContactUsLinkClickable() {
    return World.driver.findElement(By.linkText('Contact Us')).click().then(() => World.driver.wait(until.elementLocated(By.css('.wrapper h1')), 10 * 1000).then(() => World.driver.getCurrentUrl().then((url) => {
      chai.expect(url).to.include('contact-us');
    })));
  }

  IsTncLinkClickable() {
    return World.driver.findElement(By.linkText('Terms & Conditions')).click().then(() => World.driver.wait(until.elementLocated(By.css('.wrapper h1')), 10 * 1000).then(() => World.driver.getCurrentUrl().then((url) => {
      chai.expect(url).to.include('terms-and-conditions');
    })));
  }

  IsPrivacyPolicyClickable() {
    return World.driver.findElement(By.linkText('Privacy Policy')).click().then(() => World.driver.wait(until.elementLocated(By.css('.wrapper h1')), 10 * 1000).then(() => World.driver.getCurrentUrl().then((url) => {
      chai.expect(url).to.include('privacy-policy');
    })));
  }

  IsAdvertiseLinkClickable() {
    return World.driver.findElement(By.linkText('Advertise with us')).click().then(() => World.driver.getCurrentUrl().then((url) => {
      chai.expect(url).to.eql('https://recruiters.jobs.economist.com/');
    }));
  }
}
module.exports = new Footer();
