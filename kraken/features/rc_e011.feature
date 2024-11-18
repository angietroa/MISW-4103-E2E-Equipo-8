Feature: Crear tags

@user1 @web
Scenario: E011 - Crear tag solo con nombre
  Given I navigate to page "<url>"
  And I want to take screenshot "ghost_rc" "e011" "1. visitar_pagina_inicio_sesion"
  And I wait for 5 seconds
  When I enter email "<username>"
  And I want to take screenshot "ghost_rc" "e011" "2. digitar_email"
  And I wait for 1 seconds
  And I enter password "<password>"
  And I want to take screenshot "ghost_rc" "e011" "3. digitar_password"
  And I wait for 1 seconds
  And I click on sign-in
  And I want to take screenshot "ghost_rc" "e011" "4. click_sign_in"
  And I wait for 3 seconds
  And I click on tags menu
  And I want to take screenshot "ghost_rc" "e011" "5. click_menu_tags"
  And I wait for 2 seconds
  And I click on new tag
  And I want to take screenshot "ghost_rc" "e011" "6. click_new_tag"
  And I wait for 2 seconds
  And I enter a tag name "$name_1"
  And I want to take screenshot "ghost_rc" "e011" "7. digitar_nombre"
  And I wait for 1 seconds
  And I click on save a tag
  And I want to take screenshot "ghost_rc" "e011" "8. click_gurdar"
  And I wait for 4 seconds
  And I click on tags menu
  And I want to take screenshot "ghost_rc" "e011" "9. click_menu_tags"
  And I wait for 2 seconds
  Then I see a tag named "$$name_1"
  And I want to take screenshot "ghost_rc" "e011" "10. verificar_tag_creado"
  And I wait for 1 seconds