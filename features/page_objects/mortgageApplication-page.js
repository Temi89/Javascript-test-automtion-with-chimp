'use strict'
var assert = require('assert');
export const locators =
  {
    'pagetitle': '.headingSize02',
  }


export function verifyPageTitle(pageTitle) {
  assert.equal(browser.element(locators['pagetitle']).getText().toString(), pageTitle);
}