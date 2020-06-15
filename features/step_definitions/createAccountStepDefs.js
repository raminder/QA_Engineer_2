const { Given, Then, When } = require('cucumber');
const { By } = require('selenium-webdriver');
const World = require('../support/world');
const homePage = require('../pages/homePage');
const createAccount = require('../pages/createAccount');

Given('I see create account link', async () => {
    return homePage.isCreateAccountDisplayed();
});

Given('I click create account link', async () => {
    return createAccount.clickCreateAccountLink();
});

Then('I see create account page open', async () => {
    return createAccount.isCreateAccountOpened();
});

When('I enter firstname {string}', async (fname) => {
    return createAccount.enterFirstName(fname);
});

When('I enter lastname {string}', async (lname) => {
    return createAccount.enterLastName(lname);
});

When('I enter email {string}', async (email) => {
    return createAccount.enterEmail(email);
});

When('I enter password {string}', async (password) => {
    return createAccount.enterPassword(password);
});

When('I enter confirmpassword {string}', async (confirmpassword) => {
    return createAccount.enterConfirmPassword(confirmpassword);
});

When('I agree to Terms & Conditions', async () => {
    return createAccount.clickAgreeToTermsAndConditions();
});

When('I click Create Account button', async () => {
    return createAccount.clickCreateAccountButton();
});

Then('I should be successfully registered with email {string}', async (email) => {
    return createAccount.registerSucessfully(email);
});
