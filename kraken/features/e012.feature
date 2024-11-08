Feature: Crear tags

@user1 @web
Scenario: E012 - Crear tag con nombre y demas atributos
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
  And I enter a tag color "000000"
  And I wait for 1 seconds
  And I enter a tag description "$string_1"
  And I wait for 1 seconds
  And I upload a tag file
  And I wait for 1 seconds
  And I click on save a tag
  And I wait for 4 seconds
  And I click on tags menu
  And I wait for 2 seconds
  Then I see a tag named "$$name_1"
  And I wait for 1 seconds
