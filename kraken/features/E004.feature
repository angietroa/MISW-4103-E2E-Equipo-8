Feature: Crear un post con video de YouTube embebido

@user1 @web
  Scenario: El usuario crea un post con video de YouTube embebido
    Given el usuario está en la página de inicio de sesión "<url>"
    When el usuario inicia sesión "<username>" "<password>"
    And el usuario navega a la sección de posts y crea un nuevo post
    And el usuario agrega un título al post "YouTube"
    And I wait for 1 seconds
    When el usuario agrega un video de YouTube a un nuevo post
    And I wait for 1 seconds
    And el usuario publica el post
    And I wait for 1 seconds
    Then el usuario verifica que el post ha sido creado
