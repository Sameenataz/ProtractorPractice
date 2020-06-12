const { by } = require("protractor");

describe('Enter name feature', function()
{
    it('should enter name as tom', function()
    {

    browser.get('https://angularjs.org/');
    element(by.model('yourName')).sendKeys('Sameena');
    var text = element(by.xpath('/html/body/div[2]/div[1]/div[2]/div[2]/div/h1'));

    expect(text.getText()).toEqual('Hello Sameena!');


     
    
    });
});


describe('Protractor Demo App', function() {
    it('should have a title', function() {
      browser.get('http://juliemr.github.io/protractor-demo/');      
      expect(browser.getTitle()).toEqual('Super Calculator');
      browser.driver.sleep(5000);
      element(by.model('first')).sendKeys('Selenium');
      browser.driver.sleep(3000);
    });
  });