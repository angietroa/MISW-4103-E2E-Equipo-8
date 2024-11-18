Feature: Crear paginas

@user1 @web
Scenario: E009 - Crear página con subiendo file
  Given I navigate to page "<url>"
  And I want to take screenshot "ghost_rc" "e009" "1. visitar_pagina_inicio_sesion"
  And I wait for 1 seconds
  When I enter email "<username>"
  And I want to take screenshot "ghost_rc" "e009" "2. digitar_email"
  And I wait for 1 seconds
  And I enter password "<password>"
  And I want to take screenshot "ghost_rc" "e009" "3. digitar_password"
  And I wait for 1 seconds
  And I click on sign-in
  And I want to take screenshot "ghost_rc" "e009" "4. click_sign_in"
  And I click on page
  And I want to take screenshot "ghost_rc" "e009" "5. click_menu_page"
  And I click on new page
  And I want to take screenshot "ghost_rc" "e009" "6. click_new_page"
  And I wait for 2 seconds
  And I enter title "Escenario página - archivo kraken"
  And I want to take screenshot "ghost_rc" "e009" "7. digitar_titulo"
  And I click on text area of page
  And I want to take screenshot "ghost_rc" "e009" "8. click_textarea"
  And I click on the add tool menu
  And I want to take screenshot "ghost_rc" "e009" "9. click_add_tool_menu"
  And I wait for 3 seconds
  And I click on the tool "File"
  And I want to take screenshot "ghost_rc" "e009" "10. click_tool_file"
  And I wait for 3 seconds
  And I upload a file to the element
  And I want to take screenshot "ghost_rc" "e009" "11. cargar_archivo"
  Then I want to publish the changes
  And I want to take screenshot "ghost_rc" "e009" "12. publicar"
  And I wait for 2 seconds