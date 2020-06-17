const { Given, Then, When } = require('cucumber');
const signIn = require('../pages/signIn');

Given('I click sign in link', async () => signIn.clickSignInLink());

Given('I see sign in page open', async () => signIn.isSignInOpened());

When('I enter existing email', async () => signIn.enterExistingEmail());

When('I enter password', async () => signIn.enterPassword());

When('I click sign in', async () => signIn.clickSignInButton());

Then('I should be sucessfully signed in', async () => signIn.successSignIn());
When('I enter incorrect email', async () => signIn.enterIncorrectEmail());

Then('I should see error message for incorrect details', async () => signIn.errorSignIn());
