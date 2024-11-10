Feature: Crear paginas

@user1 @web
Scenario: E009 - Crear página con subiendo file
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
  And I enter title "Escenario página - archivo kraken"
  And I click on text area of page
  And I click on the add tool menu
  And I click on the tool "File"
  And I upload a file to the element
  Then I want to publish the changes
  And I wait for 2 seconds