Feature: Crear tags

@user1 @web
Scenario: E015 - Crear tag con Facebook card
  Given I navigate to page "<url>"
  And I wait for 5 seconds
  When I enter email "<username>"
  And I wait for 1 seconds
  And I enter password "<password>"
  And I wait for 1 seconds
  And I click on sign-in
  And I wait for 3 seconds
  And I click on tags menu
  And I wait for 2 seconds
  And I click on new tag
  And I wait for 2 seconds
  And I enter a tag name "$name_1"
  And I wait for 1 seconds
  And I click on expand facebook card form
  And I wait for 3 seconds
  And I enter facebook card values with an image, a title as "$$name_1" and a description as "$string_1"
  And I wait for 5 seconds
  And I click on save a tag
  And I wait for 3 seconds
  And I click on tags menu
  And I wait for 2 seconds
  Then I see a tag named "$$name_1"
  And I wait for 3 seconds
