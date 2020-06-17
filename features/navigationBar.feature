Feature: All links in navigation bar are functional

    Scenario: Home page is reloaded on click of home page link
        Given I go to the jobs page
        When I click home page link
        Then I should see home page

    Scenario: Jobs page is open on click of Find a job link
        Given I go to the jobs page
        When I click Find a job link
        Then I should see jobs page is open

    Scenario: Job alerts page is open on click of Job alerts link
        Given I go to the jobs page
        When I click Job Alerts link
        Then I should see jobs Alerts is open

    Scenario: Recruiters page is open on click of Search recruiters link
        Given I go to the jobs page
        When I click Search recruiters link
        Then I should see recruiters page is open

    Scenario: Jobs blog page is open on click of Jobs blog link
        Given I go to the jobs page
        When I click Jobs blog link
        Then I should see jobs blog page is open