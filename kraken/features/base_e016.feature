Feature: Crear miembro

@user1 @web
Scenario: E016 - Crear miembro con todos los datos
    Given El usuario está en la página de inicio de sesión "<url_base>"
    And I want to take screenshot "ghost_base" "e016" "1. visitar_pagina_inicio_sesion"
    When El usuario inicia sesión "<username>" "<password>"
    And I want to take screenshot "ghost_base" "e016" "2. autenticar_usuario"
    And El usuario navega a la sección 'Members'
    And I want to take screenshot "ghost_base" "e016" "3. navegar_seccion_members"
    And El usuario hace clic en el botón 'New member'
    And I want to take screenshot "ghost_base" "e016" "4. click_new_member"
    And El usuario digita el nombre del nuevo miembro
    And I want to take screenshot "ghost_base" "e016" "5. digitar_nombre"
    And El usuario digita el email del nuevo miembro
    And I want to take screenshot "ghost_base" "e016" "6. digitar_email"
    And El usuario digita una nota para el nuevo miembro
    And I want to take screenshot "ghost_base" "e016" "7. digitar_nota"
    And El usuario hace clic en el botón 'Save'
    And I want to take screenshot "ghost_base" "e016" "8. click_save"
    Then El usuario verifica que se agregó el nuevo miembro
    And I want to take screenshot "ghost_base" "e016" "9. verificar_miembro_agregado"