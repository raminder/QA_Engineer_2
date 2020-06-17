Feature: All footer links are functional

  Scenario: About us link in footer is clickable
    Given I go to the jobs page
    And I should see the footer
    Then about us link in footer should be clickable

  Scenario: Contact us link in footer is clickable
    Given I go to the jobs page
    And I should see the footer
    Then contact us link in footer should be clickable

  Scenario: Tnc link in footer is clickable
    Given I go to the jobs page
    And I should see the footer
    Then tnc link in footer should be clickable

  Scenario: Privacy policy link in footer is clickable
    Given I go to the jobs page
    And I should see the footer
    Then privacy policy link in footer should be clickable

  Scenario: Advertise link in footer is clickable
    Given I go to the jobs page
    And I should see the footer
    Then advertise link in footer should be clickable