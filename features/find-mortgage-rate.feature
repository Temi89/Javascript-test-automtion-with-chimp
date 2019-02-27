@watch
Feature: Find a mortgage rate
  As a new customer
  I want to find the mortgage rates available
  So that I can decide whether to switch my mortgage to Nationwide

#this could be broken down into different scenarios as well

Background: Navigate to home page
    Given I open the url "https://www.nationwide.co.uk"
    And I navigate to "mortgage rates" via "mortgages"

  Scenario: Find re-mortgage rates
    When I click on the following buttons:
    |No existing mortgage     |
    |Im changing my lender    |
    And I poopulate the follwing fields with values:
    |propertyValue     |300000         |
    |MortgageAmount    |150000         |
    |Term              |30             |
    And I click on the following button:
    |find a mortgage rate|

    When I filter the results with the following:
    |mortgageType:Fixed|
    |ProductFee:WithFee|

    Then the following rates should be visible:
    |2yrsFixed|2 yr Fixed|999|
    |3yrsFixed|3 yr Fixed|999|
    |5yrsFixed|5 yr Fixed|999|
    |10yrsFixed|10 yr Fixed|999|

    When I click and apply for the "5 yr Fixed " product
    Then I should be directed to the "Start your remortgage application"
