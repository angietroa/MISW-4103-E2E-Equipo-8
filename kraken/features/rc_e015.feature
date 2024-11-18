Feature: Crear tags

@user1 @web
Scenario: E015 - Crear tag con Facebook card
  Given I navigate to page "<url>"
  And I want to take screenshot "ghost_rc" "e015" "1. visitar_pagina_inicio_sesion"
  And I wait for 5 seconds
  When I enter email "<username>"
  And I want to take screenshot "ghost_rc" "e015" "2. digitar_email"
  And I wait for 1 seconds
  And I enter password "<password>"
  And I want to take screenshot "ghost_rc" "e015" "3. digitar_password"
  And I wait for 1 seconds
  And I click on sign-in
  And I want to take screenshot "ghost_rc" "e015" "4. click_sign_in"
  And I wait for 3 seconds
  And I click on tags menu
  And I want to take screenshot "ghost_rc" "e015" "5. click_menu_tags"
  And I wait for 2 seconds
  And I click on new tag
  And I want to take screenshot "ghost_rc" "e015" "6. click_new_tag"
  And I wait for 2 seconds
  And I enter a tag name "$name_1"
  And I want to take screenshot "ghost_rc" "e015" "7. digitar_nombre"
  And I wait for 1 seconds
  And I click on expand facebook card form
  And I want to take screenshot "ghost_rc" "e015" "8. click_facebook_form"
  And I wait for 3 seconds
  And I enter facebook card values with an image, a title as "$$name_1" and a description as "$string_1"
  And I want to take screenshot "ghost_rc" "e015" "9. digitar_valores_facebook_form"
  And I wait for 5 seconds
  And I click on save a tag
  And I want to take screenshot "ghost_rc" "e015" "10. guardar_tag"
  And I wait for 3 seconds
  And I click on tags menu
  And I want to take screenshot "ghost_rc" "e015" "11. navegar_menu_tag"
  And I wait for 2 seconds
  Then I see a tag named "$$name_1"
  And I want to take screenshot "ghost_rc" "e015" "12. verificar_tag_creado"
  And I wait for 3 seconds
