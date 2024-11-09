Feature: Crear paginas

@user1 @web
Scenario: E006 - Crear página con markdown
  Given I navigate to page "<url>"
  When I enter email "<username>"
  And I enter password "<password>"
  And I wait for 1 seconds
  And I click on sign-in
  And I wait for 2 seconds
  And I click on page
  And I click on new page
  And I wait for 2 seconds
  And I click on text area of page
  And I click on the add tool menu
  And I click on the tool "Markdown"
  And I edit the markdown with text "Pruebas automatizadas de software - markdown"
  And I enter title "Escenario página - markdown"
  Then I want to publish the changes
  And I wait for 2 seconds