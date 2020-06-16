Feature: Seach Jobs Functionality

  Scenario Outline: User is able to search jobs for a specific title
    Given I go to the jobs page
    When I enter job term '<title>'
    And I click search button
    Then I should see relevant job results

    Examples:
      | title    |
      | Director | 

    Scenario Outline: User is able to search jobs for a specific loction
    Given I go to the jobs page
    When I enter job location '<location>'
    And I click search button
    Then I should see relevant job results

     Examples:
      | location    |
      |    UK       | 

    Scenario Outline: User is able to search jobs for title,location and distance
    Given I go to the jobs page
    When I enter job term '<title>'
    And I enter job location '<location>'
    And I choose distance 
    And I click search button
    Then I should see relevant job results

    Examples:
      | title    | location    |
      | Director |    UK       | 