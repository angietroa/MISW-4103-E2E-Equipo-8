Feature: Crear tags

@user1 @web
Scenario: E012 - Crear tag con nombre y demas atributos
  Given I navigate to page "<url>"
  And I want to take screenshot "ghost_rc" "e012" "1. visitar_pagina_inicio_sesion"
  And I wait for 5 seconds
  When I enter email "<username>"
  And I want to take screenshot "ghost_rc" "e012" "2. digitar_email"
  And I wait for 1 seconds
  And I enter password "<password>"
  And I want to take screenshot "ghost_rc" "e012" "3. digitar_password"
  And I wait for 1 seconds
  And I click on sign-in
  And I want to take screenshot "ghost_rc" "e012" "4. click_sign_in"
  And I wait for 3 seconds
  And I click on tags menu
  And I want to take screenshot "ghost_rc" "e012" "5. click_menu_tags"
  And I wait for 2 seconds
  And I click on new tag
  And I want to take screenshot "ghost_rc" "e012" "6. click_new_tag"
  And I wait for 2 seconds
  And I enter a tag name "$name_1"
  And I want to take screenshot "ghost_rc" "e012" "7. digitar_nombre"
  And I wait for 1 seconds
  And I enter a tag color "000000"
  And I want to take screenshot "ghost_rc" "e012" "8. digitar_color"
  And I wait for 1 seconds
  And I enter a tag description "$string_1"
  And I want to take screenshot "ghost_rc" "e012" "9. digitar_descripcion"
  And I wait for 1 seconds
  And I upload a tag file
  And I want to take screenshot "ghost_rc" "e012" "10. cargar_archivo"
  And I wait for 1 seconds
  And I click on save a tag
  And I want to take screenshot "ghost_rc" "e012" "11. guardar_tag"
  And I wait for 4 seconds
  And I click on tags menu
  And I want to take screenshot "ghost_rc" "e012" "12. navegar_menu_tags"
  And I wait for 2 seconds
  Then I see a tag named "$$name_1"
  And I want to take screenshot "ghost_rc" "e012" "13. verificar_tag_creado"
  And I wait for 1 seconds
