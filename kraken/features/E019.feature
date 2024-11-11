Feature: Editar página

@user1 @web
Scenario: E019 - Editar acceso de página
    Given I navigate to page "<url>"
    And I wait for 1 seconds
    When I enter email "<username>"
    And I wait for 1 seconds
    And I enter password "<password>"
    And I wait for 1 seconds
    And I click on sign-in
    And I wait for 3 seconds
    And I click on page
    And I click on new page
    And I enter title "nueva pagina"
    And I click on text area of page
    And I want to publish the changes
    And I wait for 2 seconds
    And I want to close popup
    And I wait for 1 seconds
    And I want to edit "nueva pagina" page
    And I wait for 2 seconds
    And I want to change access type "members"
    