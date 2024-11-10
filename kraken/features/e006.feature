Feature: Crear paginas

@user1 @web
Scenario: E006 - Crear página con Bookmark
  Given I navigate to page "<url>"
  And I wait for 1 seconds
  When I enter email "<username>"
  And I wait for 1 seconds
  And I enter password "<password>"
  And I wait for 1 seconds
  And I click on sign-in
  And I click on page
  And I click on new page
  And I wait for 2 seconds
  And I enter title "Escenario página - Bookmark kraken"
  And I click on text area of page
  And I click on the add tool menu
  And I click on the tool "Bookmark"
  And I wait for 6 seconds
  And I select a bookmark
  Then I want to publish the changes
  And I wait for 2 seconds