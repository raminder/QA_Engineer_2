const { Then } = require('cucumber');
const footerLinks = require('../pages/footerLinks');

Then('about us link in footer should be clickable', async () => {
  return footerLinks.IsAboutUsLinkClickable();
});

Then('contact us link in footer should be clickable', async () => {
  return footerLinks.IsContactUsLinkClickable();
});

Then('tnc link in footer should be clickable', async () => {
  return footerLinks.IsTncLinkClickable();
});

Then('privacy policy link in footer should be clickable', async () => {
  return footerLinks.IsPrivacyPolicyClickable();
});

Then('advertise link in footer should be clickable', async () => {
  return footerLinks.IsAdvertiseLinkClickable();
});
