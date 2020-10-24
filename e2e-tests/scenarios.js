'use strict';

/* https://github.com/angular/protractor/blob/master/docs/toc.md */

describe('my app', function() {


  it('should automatically redirect to /viewUsers when location hash/fragment is empty', function() {
    browser.get('index.html');
    expect(browser.getLocationAbsUrl()).toMatch("/viewUsers");
  });


  describe('viewUsers', function() {

    beforeEach(function() {
      browser.get('index.html#!/viewUsers');
    });


    it('should render viewUsers when user navigates to /viewUsers', function() {
      expect(element.all(by.css('[ng-view] p')).first().getText()).
        toMatch(/partial for view 1/);
    });

  });
});
