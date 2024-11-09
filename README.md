# MISW-4103-E2E-Equipo-8
## Pruebas e2e en kraken y cypress para GHOST.

|Integrante| Correo |
|--|--|
| Angie Roa | a.roap@uniandes.edu.co |
| Esteban Heredia | e.herediar@uniandes.edu.co |
| Andres Folleco | oa.folleco41@uniandes.edu.co |
| Daniela Suárez |  cd.suarez@uniandes.edu.co |

Este README pretende describir como hacer la ejecución de las pruebas "end to end" de las [funcionalidades escogidas](https://github.com/angietroa/MISW-4103-E2E-Equipo-8/wiki/1.-Funcionalidades-bajo-pruebas) para GHOST y sus [escenarios de prueba](https://github.com/angietroa/MISW-4103-E2E-Equipo-8/wiki/2.-Escenarios-de-pruebas).

# Cómo ejecutar
A continuación el paso a paso para hacer la ejecución:

## Prerequisitos

Debera tener instalado los siguientes paquetes en su entorno:
| Prerequisito | Versión  | Obsevación
|--|--|--|
| [Node.js](https://nodejs.org/en/download/package-manager) | 20.18.0 | - |
| [Ghost](https://ghost.org/docs/install/) | 5.96.0 | Puede tenerlo instalado localmente o tenerlo desplegado en algun servidor web al que tenga acceso |
| [Cypress](https://docs.cypress.io/app/get-started/install-cypress) | 13.15.1 | **Opcional**, si quiere visualizar la ejecución de las pruebas e2e de cypress desde un navegador puede hacer la instalación de lo contrario se pueden ejecutar las pruebas modo "headless". |

## Instalación de dependencias
Dirijase a la carpeta raiz del proyecto y haga `npm install`.

## Archivos de configuración
1. Dirijase al archivo `kraken/properties.json` y modifique las variables de ser necesario:

| Variable | Descripción  | Default |
|--|--|--|
| `username` | Correo de usuario que ingresara a la aplicación | johndoe@mail.com|
| `password` | Contraseña de usuario que ingresara a a la aplicación | 1234567890123456 |
| `url` | Dirección URL donde esta alojado GHOST | http://localhost:2368/ghost/ |

2. Dirijase al archivo `cypress/cypress/fixtures/properties.json` y modifique las variables de ser necesario:

| Variable | Descripción  | Default |
|--|--|--|
| `username` | Correo de usuario que ingresara a la aplicación | johndoe@mail.com|
| `password` | Contraseña de usuario que ingresara a a la aplicación | 1234567890123456 |
| `url` | Dirección URL donde esta alojado GHOST | http://localhost:2368/ghost/ |

## Ejecución pruebas e2e de Kraken

Dirijase a la carpeta raiz del proyecto y ejecute `npm run e2e:kraken`

## Ejecución pruebas e2e de Cypress

Dirijase a la carpeta raiz del proyecto y ejecute `npm run e2e:cypress` o siga esta guia de [como ejecutar tests en cypress](https://docs.cypress.io/app/end-to-end-testing/writing-your-first-end-to-end-test#Add-a-test-file) para ejecutarlos en un navegador (para ello debe añadir el proyecto a cypress ubicado en `cypress/cypress/e2e`.

