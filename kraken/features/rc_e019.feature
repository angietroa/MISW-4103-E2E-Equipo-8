Feature: Editar página

@user1 @web
Scenario: E019 - Editar acceso de página
    Given I navigate to page "<url>"
    And I want to take screenshot "ghost_rc" "e019" "1. visitar_pagina_inicio_sesion"
    And I wait for 1 seconds
    When I enter email "<username>"
    And I want to take screenshot "ghost_rc" "e019" "2. digitar_usuario"
    And I wait for 1 seconds
    And I enter password "<password>"
    And I want to take screenshot "ghost_rc" "e019" "3. digitar_password"
    And I wait for 1 seconds
    And I click on sign-in
    And I want to take screenshot "ghost_rc" "e019" "4. click_sign_in"
    And I wait for 3 seconds
    And I click on page
    And I want to take screenshot "ghost_rc" "e019" "5. navegar_menu_page"
    And I click on new page
    And I want to take screenshot "ghost_rc" "e019" "6. click_new_page"
    And I enter title "nueva pagina"
    And I want to take screenshot "ghost_rc" "e019" "7. digitar_titulo"
    And I click on text area of page
    And I want to take screenshot "ghost_rc" "e019" "8. click_textarea"
    And I want to publish the changes
    And I want to take screenshot "ghost_rc" "e019" "9. publicar"
    And I wait for 2 seconds
    And I want to close popup
    And I want to take screenshot "ghost_rc" "e019" "10. cerrar_popup"
    And I wait for 1 seconds
    And I want to edit "nueva pagina" page
    And I want to take screenshot "ghost_rc" "e019" "11. editar_pagina"
    And I wait for 2 seconds
    And I want to change access type "members"
    And I want to take screenshot "ghost_rc" "e019" "12. cambiar_tipo_acceso"