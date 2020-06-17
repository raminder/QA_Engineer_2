Feature: Sector Lists Filteration Functionality

  Scenario: User is able to filter jobs on basis of sectors
    Given I go to the jobs page
    And I should see the jobs sector Lists
    When I click any job sector
    Then I should see job results for that sector

  Scenario: User is able to filter jobs on basis of sectors
    Given I go to the jobs page
    And I should see the jobs sector Lists
    And I click any job sector
    And I should see job results for that sector
    When I click view details link
    Then I should see detailed job with apply button
