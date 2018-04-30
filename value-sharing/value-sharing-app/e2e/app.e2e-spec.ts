import { AngularTestPage } from './app.po';
import { ExpectedConditions, browser, element, by } from 'protractor';
import {} from 'jasmine';


describe('Starting tests for value-sharing-app', function() {
  let page: AngularTestPage;

  beforeEach(() => {
    page = new AngularTestPage();
  });

  it('website title should be value-sharing-app', () => {
    page.navigateTo('/');
    return browser.getTitle().then((result)=>{
      expect(result).toBe('value-sharing-app');
    })
  });

  it('network-name should be value-sharing@0.0.1',() => {
    element(by.css('.network-name')).getWebElement()
    .then((webElement) => {
      return webElement.getText();
    })
    .then((txt) => {
      expect(txt).toBe('value-sharing@0.0.1.bna');
    });
  });

  it('navbar-brand should be value-sharing-app',() => {
    element(by.css('.navbar-brand')).getWebElement()
    .then((webElement) => {
      return webElement.getText();
    })
    .then((txt) => {
      expect(txt).toBe('value-sharing-app');
    });
  });

  
    it('SampleAsset component should be loadable',() => {
      page.navigateTo('/SampleAsset');
      browser.findElement(by.id('assetName'))
      .then((assetName) => {
        return assetName.getText();
      })
      .then((txt) => {
        expect(txt).toBe('SampleAsset');
      });
    });

    it('SampleAsset table should have 5 columns',() => {
      page.navigateTo('/SampleAsset');
      element.all(by.css('.thead-cols th')).then(function(arr) {
        expect(arr.length).toEqual(5); // Addition of 1 for 'Action' column
      });
    });
  

  
    it('SampleParticipant component should be loadable',() => {
      page.navigateTo('/SampleParticipant');
      browser.findElement(by.id('participantName'))
      .then((participantName) => {
        return participantName.getText();
      })
      .then((txt) => {
        expect(txt).toBe('SampleParticipant');
      });
    });

    it('SampleParticipant table should have 4 columns',() => {
      page.navigateTo('/SampleParticipant');
      element.all(by.css('.thead-cols th')).then(function(arr) {
        expect(arr.length).toEqual(4); // Addition of 1 for 'Action' column
      });
    });
  

  
    it('SampleTransaction component should be loadable',() => {
      page.navigateTo('/SampleTransaction');
      browser.findElement(by.id('transactionName'))
      .then((transactionName) => {
        return transactionName.getText();
      })
      .then((txt) => {
        expect(txt).toBe('SampleTransaction');
      });
    });
  
    it('ChangeOwner component should be loadable',() => {
      page.navigateTo('/ChangeOwner');
      browser.findElement(by.id('transactionName'))
      .then((transactionName) => {
        return transactionName.getText();
      })
      .then((txt) => {
        expect(txt).toBe('ChangeOwner');
      });
    });
  
    it('ViewerReadAsset component should be loadable',() => {
      page.navigateTo('/ViewerReadAsset');
      browser.findElement(by.id('transactionName'))
      .then((transactionName) => {
        return transactionName.getText();
      })
      .then((txt) => {
        expect(txt).toBe('ViewerReadAsset');
      });
    });
  

});