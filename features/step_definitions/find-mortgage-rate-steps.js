'use strict'
import * as homePage from '../page_objects/homePage'
import * as mortgageRatePage from '../page_objects/mortgage-rate-page'
import * as resultsPage from '../page_objects/results-page'
import * as mortgageAppPage from '../page_objects/mortgageApplication-page'
module.exports = function () {


  this.Given(/^I open the url "([^"]*)"$/, function (url) {
    //navigate to product page
    homePage.navigateToHomePage(url);
  });


  this.When(/^I navigate to "([^"]*)" via "([^"]*)"$/, function (secondaryNavItem, navItem) {
    homePage.hoverOnNavItem(navItem);
    homePage.clickNavItem(secondaryNavItem);

  });

  this.When(/^I click on the following (?:button|buttons):$/, function (table) {
    var data = table.raw();

    return data.map(function (val) {
      mortgageRatePage.clickElement(val);
    });

  });


  this.When(/^I poopulate the follwing fields with values:$/, function (table) {
    var newdata = table.raw();
    return newdata.map(function (value) {
      mortgageRatePage.populateMortgageSearchCriteria(value[0], value[1]);

    });
  });


  this.When(/^I filter the results with the following:$/, function (table) {
    var data = table.raw();

    return data.map(function (val) {
      resultsPage.waitForResults();
      return resultsPage.clickElement(val);
    });
  });


  this.Then(/^the following rates should be visible:$/, function (table) {

    var data = table.raw();

    //asserts that the 4 results were found
    resultsPage.returnedResultsHeader("We've found 4 mortgages for you")

    //asserts that they contain 2,3,5,10 yrs fixed rate with no fees
    return data.map(function (val, index) {
      resultsPage.displayedRates(val[0],val[1],val[2],index);
    });

  });


  this.When(/^I click and apply for the "([^"]*)" product$/, function (productName) {
    return resultsPage.applyForProduct(productName);
  });


  this.Then(/^I should be directed to the "([^"]*)"$/, function (pageTitle) {

   return mortgageAppPage.verifyPageTitle(pageTitle);

  });



}