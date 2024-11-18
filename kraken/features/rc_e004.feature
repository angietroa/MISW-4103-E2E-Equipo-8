Feature: Crear un post con video de YouTube embebido

@user1 @web
  Scenario: El usuario crea un post con video de YouTube embebido
    Given el usuario está en la página de inicio de sesión "<url>"
    And I want to take screenshot "ghost_rc" "e004" "1. visitar_pagina_inicio_sesion"
    When el usuario inicia sesión "<username>" "<password>"
    And I want to take screenshot "ghost_rc" "e004" "2. digitar_credenciales_autenticacion"
    And el usuario navega a la sección de posts y crea un nuevo post
    And I want to take screenshot "ghost_rc" "e004" "3. navegar_seccion_posts"
    And el usuario agrega un título al post "YouTube"
    And I want to take screenshot "ghost_rc" "e004" "4. agregar_titulo"
    And I wait for 1 seconds
    When el usuario agrega un video de YouTube a un nuevo post
    And I want to take screenshot "ghost_rc" "e004" "5. agregar_video_youtube"
    And I wait for 1 seconds
    And el usuario publica el post
    And I want to take screenshot "ghost_rc" "e004" "6. publicar_post"
    And I wait for 1 seconds
    Then el usuario verifica que el post ha sido creado
    And I want to take screenshot "ghost_rc" "e004" "7. verificar_post_creado"
