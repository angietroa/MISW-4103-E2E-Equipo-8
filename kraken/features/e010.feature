Feature: Crear paginas

@user1 @web
Scenario: E006 - Crear página embebiendo link de spotify
  Given I navigate to page "<url>"
  And I wait for 5 seconds
  When I enter email "<username>"
  And I wait for 1 seconds
  And I enter password "<password>"
  And I wait for 1 seconds
  And I click on sign-in
  