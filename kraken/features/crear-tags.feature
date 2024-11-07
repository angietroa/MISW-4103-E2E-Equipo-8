Feature: Crear tags

@user1 @web
Scenario: E011 - Crear tag solo con nombre
  Given I navigate to page "http://localhost:2368/ghost/"
  And I wait for 5 seconds
  When I enter email "<username>"
  And I wait for 2 seconds
  And I enter password "<password>"
  And I wait for 2 seconds
  And I click on sign-in
  And I wait for 7 seconds
  And I click on tags option
  And I wait for 7 seconds
