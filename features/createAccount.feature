Feature: Create Account Functionality -Successful Registration

  Scenario Outline: User is able to create account
    Given I go to the jobs page
    And I see create account link
    And I click create account link
    Then I see create account page open
    When I enter firstname '<firstname>'
    And I enter lastname '<lastname>'
    And I enter email '<email>'
    And I enter password '<password>'
    And I enter confirmpassword '<confirmpassword>'
    And I agree to Terms & Conditions
    And I click Create Account button
    Then I should be successfully registered with email '<email>'

    Examples:
      | firstname | lastname | email          | password    | confirmpassword |
      | test      | user     | test@gmail.com | testing@123 | testing@123     |
