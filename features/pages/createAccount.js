const World = require('../support/world');
const { By, until } = require('selenium-webdriver')
const chai = require('chai');

class CreateAccount {

    clickCreateAccountLink() {
        return World.driver.findElement(By.linkText('Create account')).click();
    }

    isCreateAccountOpened() {
        return World.driver.getTitle().then(title => {
            chai.expect(title).include('Register');
            // Wait for registration page to be rendered
            return World.driver.wait(until.elementLocated(By.css('#create-account')), 5 * 1000);
        });
    }

    enterFirstName(fname) {
        return World.driver.findElement(By.css('#firstname')).sendKeys(fname);
    }

    enterLastName(lname) {
        return World.driver.findElement(By.id('lastname')).sendKeys(lname);
    }

    enterEmail(email) {
        return World.driver.findElement(By.id('emailaddress')).sendKeys(Date.now() + email);
    }

    enterPassword(password) {
        return World.driver.findElement(By.id('regpassword')).sendKeys(password);
    }

    enterConfirmPassword(confirmPassword) {
        return World.driver.findElement(By.id('confirmpassword')).sendKeys(confirmPassword);
    }

    clickAgreeToTermsAndConditions() {
        return World.driver.findElement(By.id('agreeTermsAndConds')).click();
    }

    clickCreateAccountButton() {
        return World.driver.findElement(By.css('input[value*="Create an account"]')).click();

    }

    registerSucessfully(email) {
        //Wait for registartion success page to be rendered
        return World.driver.wait(until.elementLocated(By.xpath("//h1[text()='Account created']")), 5 * 1000);
        return World.driver.findElement(By.id('message')).isDisplayed().then(value => {
            if (value) {
                return World.driver.findElement(By.id('message')).getText().then(message => {
                    chai.expect(message).to.include('We have sent a confirmation email to ' + email);
                    //Storing regsitered email id in users array
                    return World.users.push(email);
                });
            } else {
                console.log('Failed to register an account');
            }
        });
    }
}
module.exports = new CreateAccount();