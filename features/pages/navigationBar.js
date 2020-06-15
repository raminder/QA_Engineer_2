const World = require('../support/world');
const { By } = require('selenium-webdriver')
const chai = require('chai');

class NavigationBar {
    clickHomeLink(){
        return World.driver.findElement(By.linkText('Home')).isDisplayed().then(value =>{
            if(value){
                return World.driver.findElement(By.linkText('Home')).click();
            }
            else {
              console.log('Home link not displayed');
            }
        });
    }
    clickFindJob(){
        return World.driver.findElement(By.linkText('Find a job')).isDisplayed().then(value =>{
          if(value){
            return World.driver.findElement(By.linkText('Find a job')).click();
          }
          else {
            console.log('Job link not displayed');
          }
        });
    }

    isJobsPageOpened(){
            return World.driver.getCurrentUrl().then(url =>{
                chai.expect(url).to.equal('https://jobs.economist.com/jobs/');
        });
    }

    clickJobAlerts(){
        return World.driver.findElement(By.linkText('Job alerts')).isDisplayed().then(value =>{
          if(value){
            return World.driver.findElement(By.linkText('Job alerts')).click();
          }
          else {
            console.log('Job alerts link not displayed');
          }
        });
    }

    isJobAlertsPageOpened(){
            return World.driver.getCurrentUrl().then(url =>{
                chai.expect(url).to.equal('https://jobs.economist.com/newalert/');
        });
    }

    clickSearchRecruitersLink(){
        return World.driver.findElement(By.linkText('Search recruiters')).isDisplayed().then(value =>{
          if(value){
            return World.driver.findElement(By.linkText('Search recruiters')).click();
          }
          else {
            console.log('Search recruiters link not displayed');
          }
        });
    }

    isRecruitersPageOpened(){
            return World.driver.getCurrentUrl().then(url =>{
                chai.expect(url).to.equal('https://jobs.economist.com/employers/');
        });
    }

    clickJobsBlog(){
        return World.driver.findElement(By.linkText('Jobs blog')).isDisplayed().then(value =>{
          if(value){
            return World.driver.findElement(By.linkText('Jobs blog')).click();
          }
          else {
            console.log('Jobs blog link not displayed');
          }
        });
    }

    isJobsBlogPageOpened(){
            return World.driver.getCurrentUrl().then(url =>{
                chai.expect(url).to.equal('https://jobs.economist.com/careers/');
        });
    }
}

module.exports = new NavigationBar()
