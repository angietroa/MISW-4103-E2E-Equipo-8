Feature: Crear paginas

@user1 @web
Scenario: E010 - Crear página con Link de spotify
  Given I navigate to page "<url>"
  And I want to take screenshot "ghost_rc" "e010" "1. visitar_pagina_inicio_sesion"
  And I wait for 1 seconds
  When I enter email "<username>"
  And I want to take screenshot "ghost_rc" "e010" "2. digitar_email"
  And I wait for 1 seconds
  And I enter password "<password>"
  And I want to take screenshot "ghost_rc" "e010" "3. digitar_password"
  And I wait for 1 seconds
  And I click on sign-in
  And I want to take screenshot "ghost_rc" "e010" "4. click_sign_in"
  And I click on page
  And I want to take screenshot "ghost_rc" "e010" "5. click_menu_page"
  And I click on new page
  And I want to take screenshot "ghost_rc" "e010" "6. click_new_page"
  And I wait for 2 seconds
  And I enter title "Escenario página - Spotify kraken"
  And I want to take screenshot "ghost_rc" "e010" "7. digitar_titulo"
  And I click on text area of page
  And I want to take screenshot "ghost_rc" "e010" "8. click_textarea"
  And I want to put "/spotify"
  And I want to take screenshot "ghost_rc" "e009" "9. click_add_tool_menu"
  And I wait for 3 seconds
  And I want to take screenshot "ghost_rc" "e010" "10. click_tool_spotify"
  And I want to upload a song to the page "https://open.spotify.com/track/71N1Ob14XLnH5JwsmvXhXj?si=d99b678f09b9492b"
  And I want to take screenshot "ghost_rc" "e010" "11. cargar_cancion"
  Then I want to publish the changes
  And I want to take screenshot "ghost_rc" "e010" "12. publicar"
  And I wait for 2 seconds