Feature: Crear paginas

@user1 @web
Scenario: E006 - Crear página con Bookmark
  Given I navigate to page "<url>"
  And I want to take screenshot "ghost_rc" "e006" "1. visitar_pagina_inicio_sesion"
  And I wait for 1 seconds
  When I enter email "<username>"
  And I want to take screenshot "ghost_rc" "e006" "2. digitar_email"
  And I wait for 1 seconds
  And I enter password "<password>"
  And I want to take screenshot "ghost_rc" "e006" "3. digitar_password"
  And I wait for 1 seconds
  And I click on sign-in
  And I want to take screenshot "ghost_rc" "e006" "4. click_sign_in"
  And I click on page
  And I want to take screenshot "ghost_rc" "e006" "5. click_menu_page"
  And I click on new page
  And I want to take screenshot "ghost_rc" "e006" "6. click_new_page"
  And I wait for 2 seconds
  And I enter title "Escenario página - Bookmark kraken"
  And I want to take screenshot "ghost_rc" "e006" "7. digitar_titulo"
  And I click on text area of page
  And I want to take screenshot "ghost_rc" "e006" "8. click_textarea"
  And I click on the add tool menu
  And I want to take screenshot "ghost_rc" "e006" "9. click_add_tool_menu"
  And I click on the tool "Bookmark"
  And I want to take screenshot "ghost_rc" "e006" "10. click_tool_bookmark"
  And I wait for 6 seconds
  And I select a bookmark
  And I want to take screenshot "ghost_rc" "e006" "11. seleccionar_bookmark"
  Then I want to publish the changes
  And I want to take screenshot "ghost_rc" "e006" "12. publicar"
  And I wait for 2 seconds