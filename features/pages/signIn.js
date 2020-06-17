const World = require('../support/world');
const { By, until } = require('selenium-webdriver')
const chai = require('chai');
const { expect } = require('chai');
const { users } = require('../support/world');

class SignIn {
    clickSignInLink() {
        return World.driver.findElement(By.linkText('Sign in')).click().then(() => {
            // Wait for sign in page to be rendered
            return World.driver.manage().setTimeouts({ implicit: 10000 });
        });
    }

    isSignInOpened() {
        return World.driver.findElement(By.css('#signinemail')).isDisplayed().then((value) => {
            chai.expect(value).to.be.equal(true);
        });
    }

    enterExistingEmail() {
        return World.driver.findElement(By.id('signinemail')).sendKeys(users[0]);
    }

    enterPassword() {
        return World.driver.findElement(By.id('signinpassword')).sendKeys('testing@123');
    }

    clickSignInButton() {
        return World.driver.findElement(By.css('input[value*="Sign in"]')).click().then(() => {
            return World.driver.manage().setTimeouts({ implicit: 10000 });
        });
    }

    successSignIn() {
        return World.driver.findElement(By.linkText('Sign out')).isDisplayed().then((value) => {
            chai.expect(value).to.be.equal(true);
        });
    }

    enterIncorrectEmail() {
        return World.driver.findElement(By.id('signinemail')).sendKeys('abc@gmail.com');
    };

    errorSignIn() {
        return World.driver.findElement(By.id('message')).isDisplayed().then(value => {
            if (value) {
                return World.driver.findElement(By.id('message')).getText().then(message => {
                    chai.expect(message).to.include('You have entered an incorrect username or password.');
                });
            }
        });
    }
}
module.exports = new SignIn();