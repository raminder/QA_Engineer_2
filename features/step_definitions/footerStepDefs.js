const { Then } = require('cucumber');
const footerLinks = require('../pages/footerLinks');

Then('about us link in footer should be clickable', async () => footerLinks.IsAboutUsLinkClickable());

Then('contact us link in footer should be clickable', async () => footerLinks.IsContactUsLinkClickable());

Then('tnc link in footer should be clickable', async () => footerLinks.IsTncLinkClickable());

Then('privacy policy link in footer should be clickable', async () => footerLinks.IsPrivacyPolicyClickable());

Then('advertise link in footer should be clickable', async () => footerLinks.IsAdvertiseLinkClickable());
