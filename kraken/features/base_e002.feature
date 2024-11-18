Feature: Crear un post con imágenes

@user1 @web
  Scenario: El usuario crea un post con imágenes
    Given el usuario está en la página de inicio de sesión "<url_base>"
    And I want to take screenshot "ghost_base" "e002" "1. visitar_pagina_iniciar_sesion"
    When el usuario inicia sesión "<username>" "<password>"
    And I want to take screenshot "ghost_base" "e002" "2. digitar_credenciales_autenticacion"
    And el usuario navega a la sección de posts y crea un nuevo post
    And I want to take screenshot "ghost_base" "e002" "3. navegar_seccion_posts"
    And el usuario agrega un título al post "imagenes"
    And I want to take screenshot "ghost_base" "e002" "4. agregar_titulo"
    And I wait for 1 seconds
    And el usuario carga imágenes en el post ghost45
    And I want to take screenshot "ghost_base" "e002" "5. cargar_imagenes"
    And I wait for 1 seconds
    And el usuario publica el post ghost45
    And I want to take screenshot "ghost_base" "e002" "6. publicar_post"
    And I wait for 1 seconds
    And el usuario navega a la sección de posts
    And I wait for 3 seconds
    Then el usuario verifica que el post ha sido creado
    And I want to take screenshot "ghost_base" "e002" "7. verificar_post_creado"
