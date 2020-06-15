Feature: Home Page display with all required components

  Scenario: Navigation Bar is displayed on home page
    Given I go to the jobs page
    Then I should see the navigation bar
    And I should see sign in link
    And I should see create account link

  Scenario: Search fields are displayed on home page
    Given I go to the jobs page
    Then I should see the search fields

  Scenario: Jobs Sector Lists  are displayed on home page
    Given I go to the jobs page
    Then I should see the jobs sector Lists

  Scenario: Jobs Blog section is displayed on home page
    Given I go to the jobs page
    Then I should see the jobs blog section

  Scenario: Featured Jobs section is displayed on home page
    Given I go to the jobs page
    Then I should see the Featured Jobs section

  Scenario: Footer section is displayed on home page
    Given I go to the jobs page
    Then I should see the footer



