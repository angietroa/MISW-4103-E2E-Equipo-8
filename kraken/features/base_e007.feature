Feature: Crear paginas

@user1 @web
Scenario: E006 - Crear página con markdown
  Given I navigate to page "<url_base>"
  And I want to take screenshot "ghost_base" "e007" "1. visitar_pagina_inicio_sesion"
  When I enter email "<username>"
  And I want to take screenshot "ghost_base" "e007" "2. digitar_email"
  And I enter password "<password>"
  And I want to take screenshot "ghost_base" "e007" "3. digitar_password"
  And I wait for 1 seconds
  And I click on sign-in
  And I want to take screenshot "ghost_base" "e007" "4. click_sign_in"
  And I wait for 2 seconds
  And I click on page
  And I want to take screenshot "ghost_base" "e007" "5. click_menu_page"
  And I click on new page
  And I want to take screenshot "ghost_base" "e007" "6. click_new_page"
  And I wait for 2 seconds
  And I click on text area of page
  And I want to take screenshot "ghost_base" "e007" "7. click_textarea"
  And I click on the add tool menu
  And I want to take screenshot "ghost_base" "e007" "8. click_add_tool_menu"
  And I click on the tool "Markdown"
  And I want to take screenshot "ghost_base" "e007" "9. click_tool_markdown"
  And I edit the markdown with text "Pruebas automatizadas de software - markdown"
  And I want to take screenshot "ghost_base" "e007" "10. editar_markdown"
  And I enter title "Escenario página - markdown"
  And I want to take screenshot "ghost_base" "e007" "11. digitar_titulo"
  Then I want to publish the changes ghost45
  And I want to take screenshot "ghost_base" "e007" "12. publicar"
  And I wait for 2 seconds