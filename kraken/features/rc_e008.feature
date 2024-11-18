Feature: Crear paginas

@user1 @web
Scenario: E008 - Crear página con galeria
  Given I navigate to page "<url>"
  And I want to take screenshot "ghost_rc" "e008" "1. visitar_pagina_inicio_sesion"
  And I wait for 1 seconds
  When I enter email "<username>"
  And I want to take screenshot "ghost_rc" "e008" "2. digitar_email"
  And I wait for 1 seconds
  And I enter password "<password>"
  And I want to take screenshot "ghost_rc" "e008" "3. digitar_password"
  And I wait for 1 seconds
  And I click on sign-in
  And I want to take screenshot "ghost_rc" "e008" "4. click_sign_in"
  And I click on page
  And I want to take screenshot "ghost_rc" "e008" "5. click_menu_page"
  And I click on new page
  And I want to take screenshot "ghost_rc" "e008" "6. click_new_page"
  And I wait for 2 seconds
  And I enter title "Escenario página - galeria kraken"
  And I want to take screenshot "ghost_rc" "e008" "7. digitar_titulo"
  And I click on text area of page
  And I want to take screenshot "ghost_rc" "e008" "8. click_textarea"
  And I click on the add tool menu
  And I want to take screenshot "ghost_rc" "e008" "9. click_add_tool_menu"
  And I click on the tool "Gallery"
  And I want to take screenshot "ghost_rc" "e008" "10. click_tool_gallery"
  And I upload images to gallery
  And I want to take screenshot "ghost_rc" "e008" "11. cargar_imagenes"
  Then I want to publish the changes
  And I want to take screenshot "ghost_rc" "e008" "12. publicar"
  And I wait for 2 seconds