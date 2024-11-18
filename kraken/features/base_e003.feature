Feature: Crear un post con contenido HTML

@user1 @web
  Scenario: El usuario crea un post con contenido HTML
    Given el usuario está en la página de inicio de sesión "<url_base>"
    And I want to take screenshot "ghost_base" "e003" "1. visitar_pagina_iniciar_sesion"
    When el usuario inicia sesión "<username>" "<password>"
    And I want to take screenshot "ghost_base" "e003" "2. digitar_credenciales_autenticacion"
    And el usuario navega a la sección de posts y crea un nuevo post
    And I want to take screenshot "ghost_base" "e003" "3. navegar_seccion_posts"
    And el usuario agrega un título al post "HTML"
    And I want to take screenshot "ghost_base" "e003" "4. digitar_titulo"
    And I wait for 1 seconds
    When el usuario crea un nuevo post con contenido HTML ghost45
    And I want to take screenshot "ghost_base" "e003" "5. agregar_contenido_html"
    And I wait for 1 seconds
    And el usuario publica el post ghost45
    And I want to take screenshot "ghost_base" "e003" "6. publicar_post"
    And I wait for 1 seconds
    And el usuario navega a la sección de posts
    And I wait for 3 seconds
    Then el usuario verifica que el post ha sido creado
    And I want to take screenshot "ghost_base" "e003" "7. verificar_post_creado"
