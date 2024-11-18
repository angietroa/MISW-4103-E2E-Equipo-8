Feature: Crear un post con imágenes

@user1 @web
  Scenario: El usuario crea un post con imágenes
    Given el usuario está en la página de inicio de sesión "<url>"
    And I want to take screenshot "ghost_rc" "e002" "1. visitar_pagina_iniciar_sesion"
    When el usuario inicia sesión "<username>" "<password>"
    And I want to take screenshot "ghost_rc" "e002" "2. digitar_credenciales_autenticacion"
    And el usuario navega a la sección de posts y crea un nuevo post
    And I want to take screenshot "ghost_rc" "e002" "3. navegar_seccion_posts"
    And el usuario agrega un título al post "imagenes"
    And I want to take screenshot "ghost_rc" "e002" "4. agregar_titulo"
    And I wait for 1 seconds
    And el usuario carga imágenes en el post
    And I want to take screenshot "ghost_rc" "e002" "5. cargar_imagenes"
    And I wait for 1 seconds
    And el usuario publica el post
    And I want to take screenshot "ghost_rc" "e002" "6. publicar_post"
    And I wait for 1 seconds
    Then el usuario verifica que el post ha sido creado
    And I want to take screenshot "ghost_rc" "e002" "7. verificar_post_creado"
