Feature: Sign in functionality

  Scenario: User is able to sign in with correct details
    Given I go to the jobs page
    And I should see sign in link
    And I click sign in link
    And I see sign in page open
    When I enter existing email
    And I enter password
    And I click sign in
    Then I should be sucessfully signed in

Scenario: Validate error message for incorrect email and password
    Given I go to the jobs page
    And I should see sign in link
    And I click sign in link
    And I see sign in page open
    When I enter incorrect email
    And I enter password
    And I click sign in
    Then I should see error message for incorrect details