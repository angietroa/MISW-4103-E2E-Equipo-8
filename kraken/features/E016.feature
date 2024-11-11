Feature: Crear miembro

@user1 @web
Scenario: E016 - Crear miembro con todos los datos
    Given El usuario está en la página de inicio de sesión "<url>"
    When El usuario inicia sesión "<username>" "<password>"
    And El usuario navega a la sección 'Members'
    And El usuario hace clic en el botón 'New member'
    And El usuario digita el nombre del nuevo miembro
    And El usuario digita el email del nuevo miembro
    And El usuario digita una nota para el nuevo miembro
    And El usuario hace clic en el botón 'Save'
    Then El usuario verifica que se agregó el nuevo miembro