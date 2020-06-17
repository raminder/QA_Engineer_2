const { Given, Then, When } = require('cucumber');
const signIn = require('../pages/signIn');

Given('I click sign in link', async () => {
  return signIn.clickSignInLink();
});

Given('I see sign in page open', async () => {
  return signIn.isSignInOpened();
});

When('I enter existing email', async () => {
  return signIn.enterExistingEmail();
});

When('I enter password', async () => {
  return signIn.enterPassword();
});

When('I click sign in', async () => {
  return signIn.clickSignInButton();
});

Then('I should be sucessfully signed in', async () => {
  return signIn.successSignIn();
});

When('I enter incorrect email', async () => {
  return signIn.enterIncorrectEmail();
});

Then('I should see error message for incorrect details', async () => {
  return signIn.errorSignIn();
});
