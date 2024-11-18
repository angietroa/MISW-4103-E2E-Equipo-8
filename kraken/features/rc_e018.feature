Feature: Editar página

@user1 @web
Scenario: E018 - Editar fecha de publicación página
    Given I navigate to page "<url>"
    And I want to take screenshot "ghost_rc" "e018" "1. visitar_pagina_inicio_sesion"
    And I wait for 1 seconds
    When I enter email "<username>"
    And I want to take screenshot "ghost_rc" "e018" "2. digitar_usuario"
    And I wait for 1 seconds
    And I enter password "<password>"
    And I want to take screenshot "ghost_rc" "e018" "3. digitar_password"
    And I wait for 1 seconds
    And I click on sign-in
    And I want to take screenshot "ghost_rc" "e018" "4. click_sign_in"
    And I wait for 3 seconds
    And I click on page
    And I want to take screenshot "ghost_rc" "e018" "5. navegar_menu_page"
    And I click on new page
    And I want to take screenshot "ghost_rc" "e018" "6. click_new_page"
    And I enter title "nueva pagina"
    And I want to take screenshot "ghost_rc" "e018" "7. digitar_titulo"
    And I click on text area of page
    And I want to take screenshot "ghost_rc" "e018" "8. click_textarea"
    And I want to publish the changes
    And I want to take screenshot "ghost_rc" "e018" "9. publicar"
    And I wait for 2 seconds
    And I want to close popup
    And I wait for 1 seconds
    And I want to edit "nueva pagina" page
    And I want to take screenshot "ghost_rc" "e018" "10. editar_pagina"
    And I wait for 2 seconds
    And I want to change publish date "1999-01-01"
    And I want to take screenshot "ghost_rc" "e018" "11. ingresar_nueva_fecha"
    