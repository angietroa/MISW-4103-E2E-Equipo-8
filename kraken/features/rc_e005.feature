Feature: Crear un post con un botón

@user1 @web
  Scenario: El usuario crea un post con un botón
    Given el usuario está en la página de inicio de sesión "<url>"
    And I want to take screenshot "ghost_rc" "e005" "1. visitar_pagina_inicio_sesion"
    When el usuario inicia sesión "<username>" "<password>"
    And I want to take screenshot "ghost_rc" "e005" "2. digitar_credenciales_autenticacion"
    And el usuario navega a la sección de posts y crea un nuevo post
    And I want to take screenshot "ghost_rc" "e005" "3. navegar_seccion_posts"
    And el usuario agrega un título al post "boton"
    And I want to take screenshot "ghost_rc" "e005" "4. agregar_titulo"
    And I wait for 1 seconds
    When el usuario añade un botón a un nuevo post
    And I want to take screenshot "ghost_rc" "e005" "5. agregar_boton"
    And I wait for 1 seconds
    And el usuario publica el post
    And I want to take screenshot "ghost_rc" "e005" "6. publicar_post"
    And I wait for 1 seconds
    Then el usuario verifica que el post ha sido creado
    And I want to take screenshot "ghost_rc" "e005" "7. verificar_post_creado"
