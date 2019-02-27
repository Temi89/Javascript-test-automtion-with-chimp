'use strict'
export const locators =
  {

    'No existing mortgage': '[aria-labelledby="selectorItemHaveNationwideMortgage1"]',
    'Im changing my lender': '[aria-labelledby="selectorItemNationwideMortgageTypeNo2"]',
    'propertyValue': '#SearchPropertyValue',
    'MortgageAmount': '#SearchMortgageAmount',
    'Term': '#SearchMortgageTerm',
    'find a mortgage rate':'#myButton'
  }


export function clickElement(selector) {
  browser.click(locators[selector]);
}

export function populateMortgageSearchCriteria(selector, val) {
  browser.element(locators[selector]).setValue(val);

}
