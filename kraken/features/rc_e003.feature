Feature: Crear un post con contenido HTML

@user1 @web
  Scenario: El usuario crea un post con contenido HTML
    Given el usuario está en la página de inicio de sesión "<url>"
    And I want to take screenshot "ghost_rc" "e003" "1. visitar_pagina_iniciar_sesion"
    When el usuario inicia sesión "<username>" "<password>"
    And I want to take screenshot "ghost_rc" "e003" "2. digitar_credenciales_autenticacion"
    And el usuario navega a la sección de posts y crea un nuevo post
    And I want to take screenshot "ghost_rc" "e003" "3. navegar_seccion_posts"
    And el usuario agrega un título al post "HTML"
    And I want to take screenshot "ghost_rc" "e003" "4. digitar_titulo"
    And I wait for 1 seconds
    When el usuario crea un nuevo post con contenido HTML
    And I want to take screenshot "ghost_rc" "e003" "5. agregar_contenido_html"
    And I wait for 1 seconds
    And el usuario publica el post
    And I want to take screenshot "ghost_rc" "e003" "6. publicar_post"
    And I wait for 1 seconds
    Then el usuario verifica que el post ha sido creado
    And I want to take screenshot "ghost_rc" "e003" "7. verificar_post_creado"
