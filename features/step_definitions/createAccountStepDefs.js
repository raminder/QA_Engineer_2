const { Given, Then, When } = require('cucumber');
const homePage = require('../pages/homePage');
const createAccount = require('../pages/createAccount');

Given('I see create account link', async () => homePage.isCreateAccountDisplayed());

Given('I click create account link', async () => createAccount.clickCreateAccountLink());

When('I see create account page open', async () => createAccount.isCreateAccountOpened());

When('I enter firstname {string}', async (fname) => createAccount.enterFirstName(fname));

When('I enter lastname {string}', async (lname) => createAccount.enterLastName(lname));

When('I enter email {string}', async (email) => createAccount.enterEmail(email));

When('I enter password {string}', async (password) => createAccount.enterPassword(password));

When('I enter confirmpassword {string}', async (confirmpassword) => createAccount.enterConfirmPassword(confirmpassword));

When('I agree to Terms & Conditions', async () => createAccount.clickAgreeToTermsAndConditions());

When('I click Create Account button', async () => createAccount.clickCreateAccountButton());

Then('I should be successfully registered', async () => createAccount.registerSucessfully());
