'use strict'
var assert = require('assert');
export const locators =
  {

    'mortgageType:Fixed': '#fixed',
    'ProductFee:WithFee': '#product-fee-fee',
    '2yrsFixed':'[data-product-name="2 yr  Fixed "]',
    '3yrsFixed':'[data-product-name="3 yr  Fixed "]',
    '5yrsFixed':'[data-product-name="5 yr  Fixed "]',
    '10yrsFixed':'[data-product-name="10 yr  Fixed "]',
    'returnedResultsHeader': '.searchResultsSummary .titleStyle01'


  }

export function waitForResults() {

  browser.waitUntil(function () {

    return browser.getText('#fixed') === 'Fixed rate'
  }, 5000, "Element located");
}

export function clickElement(selector) {
  var script =  `$('${locators[selector]}').click()`;
  return browser.execute(script).pause(900);
}


export function returnedResultsHeader(actualRes){
  assert.equal(browser.getText(locators['returnedResultsHeader']),actualRes)
}

export function displayedRates(expectedFixedRate,expectedRateText,expectedFee, index){

  assert(browser.getText(locators[expectedFixedRate]).includes(expectedRateText));
  var actualRes=parseInt(browser.getText(`.ratesTableWrapper:nth-child(${index+1}) td:nth-child(3) > .keyData`).replace('£',''));
  assert.equal(actualRes,expectedFee);

}

export function applyForProduct(productName){
  //depending on the rates available this would definitely but for the purpose of this test this should suffice.
  //also a slight pause a bit messy but would handle the animation for the next action.
  browser.click('.ratesTableWrapper:nth-child(3) tr:nth-child(1) .iconText:nth-child(3)').pause(300);
  browser.click(`[data-productname="${productName}"]`);
}

