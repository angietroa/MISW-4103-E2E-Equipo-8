Feature: Editar página

@user1 @web
Scenario: E020 - Editar URL
    Given I navigate to page "<url>"
    And I want to take screenshot "ghost_rc" "e020" "1. visitar_pagina_inicio_sesion"
    And I wait for 1 seconds
    When I enter email "<username>"
    And I want to take screenshot "ghost_rc" "e020" "2. digitar_usuario"
    And I wait for 1 seconds
    And I enter password "<password>"
    And I want to take screenshot "ghost_rc" "e020" "3. digitar_password"
    And I wait for 1 seconds
    And I click on sign-in
    And I want to take screenshot "ghost_rc" "e020" "4. click_sign_in"
    And I wait for 3 seconds
    And I click on page
    And I want to take screenshot "ghost_rc" "e020" "5. navegar_menu_page"
    And I click on new page
    And I want to take screenshot "ghost_rc" "e020" "6. click_new_page"
    And I enter title "nueva pagina"
    And I want to take screenshot "ghost_rc" "e020" "7. digitar_titulo"
    And I click on text area of page
    And I want to take screenshot "ghost_rc" "e020" "8. click_textarea"
    And I want to publish the changes
    And I want to take screenshot "ghost_rc" "e020" "9. publicar"
    And I wait for 2 seconds
    And I want to close popup
    And I wait for 1 seconds
    And I want to edit "nueva pagina" page
    And I want to take screenshot "ghost_rc" "e020" "10. editar_pagina"
    And I wait for 2 seconds
    And I want to change url "nueva-url"
    And I want to take screenshot "ghost_rc" "e020" "11. digitar_nueva_url"
    