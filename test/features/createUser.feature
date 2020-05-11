    Feature: Manage users

    Scenario: Create user
        Given I am in vacations management app
        When I log in to the app
        Then I expect to see home page
        When I create a user
            | name           | James               |
            | lastName       | Smith               |
            | email          | james_smith@test.com|
            | identification | 1234567890          |
            | day            | 21                  |
            | month          | 1                   |
            | year           | 2015                |
        Then I expect to see the user created
        When I delete the created user
        Then I expect to not see it

