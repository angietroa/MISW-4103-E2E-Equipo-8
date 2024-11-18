Feature: Crear tags

@user1 @web
Scenario: E013 - Crear tag con metadata
  Given I navigate to page "<url_base>"
  And I want to take screenshot "ghost_base" "e013" "1. visitar_pagina_inicio_sesion"
  And I wait for 5 seconds
  When I enter email "<username>"
  And I want to take screenshot "ghost_base" "e013" "2. digitar_email"
  And I wait for 1 seconds
  And I enter password "<password>"
  And I want to take screenshot "ghost_base" "e013" "3. digitar_password"
  And I wait for 1 seconds
  And I click on sign-in
  And I want to take screenshot "ghost_base" "e013" "4. click_sign_in"
  And I wait for 3 seconds
  And I click on tags menu
  And I want to take screenshot "ghost_base" "e013" "5. click_menu_tags"
  And I wait for 2 seconds
  And I click on new tag
  And I want to take screenshot "ghost_base" "e013" "6. click_new_tag"
  And I wait for 2 seconds
  And I enter a tag name "$name_1"
  And I want to take screenshot "ghost_base" "e013" "7. digitar_nombre"
  And I wait for 1 seconds
  And I click on expand metadata form
  And I want to take screenshot "ghost_base" "e013" "8. click_formulario_metadata"
  And I wait for 1 seconds
  And I enter tag medatata title as "$$name_1", description as "$string_1" and url as "$url_1"
  And I want to take screenshot "ghost_base" "e013" "9. digitar_metadata"
  And I wait for 4 seconds
  And I click on save a tag
  And I want to take screenshot "ghost_base" "e013" "10. guardar_tag"
  And I wait for 2 seconds
  And I click on tags menu
  And I want to take screenshot "ghost_base" "e013" "11. navegar_menu_tags"
  And I wait for 2 seconds
  Then I see a tag named "$$name_1"
  And I want to take screenshot "ghost_base" "e013" "12. verificar_tag_creado"
  And I wait for 1 seconds
