# MISW-4103-E2E-Equipo-8
## Pruebas e2e en kraken y cypress para GHOST.

|Integrante| Correo |
|--|--|
| Angie Roa | a.roap@uniandes.edu.co |
| Esteban Heredia | e.herediar@uniandes.edu.co |
| Andres Folleco | oa.folleco41@uniandes.edu.co |
| Daniela Suárez |  cd.suarez@uniandes.edu.co |

Este README pretende describir como hacer la ejecución de las pruebas "end to end" de las [funcionalidades y escenarios escogidos](https://github.com/angietroa/MISW-4103-E2E-Equipo-8/wiki/Funcionalidades-y-escenarios-escogidos) y de los scripts para ver el reporte de regresión visual comparando GHOST en la versión 4.5.0 (versión base) con GHOST en la versión 5.96.0 (versión release candidate).

# Cómo ejecutar
A continuación el paso a paso para hacer la ejecución:

## Prerequisitos

Debera tener instalado los siguientes paquetes en su entorno:
| Prerequisito | Versión  | Obsevación
|--|--|--|
| [Node.js](https://nodejs.org/en/download/package-manager) | 20.18.0 | - |
| [Ghost](https://ghost.org/docs/install/) | 5.96.0 | (Versión release candidate) Puede tenerlo instalado localmente (recomendamos instalarlo con [Docker](https://hub.docker.com/_/ghost/)) o tenerlo desplegado en algun servidor web al que tenga acceso |
| [Ghost](https://ghost.org/docs/install/) | 4.5.0 | (Versión base) Puede tenerlo instalado localmente (recomendamos instalarlo con [Docker](https://hub.docker.com/_/ghost/)) o tenerlo desplegado en algun servidor web al que tenga acceso |
| [Cypress](https://docs.cypress.io/app/get-started/install-cypress) | 13.15.2 | **Opcional**, si quiere visualizar la ejecución de las pruebas e2e de cypress desde un navegador puede hacer la instalación de lo contrario se pueden ejecutar las pruebas modo "headless". |

**Importante**: Las dos versiones de GHOST (4.5.0 y 5.96.0) deben estar ejecutandose al tiempo (recomendamos instalarlo con [Docker](https://hub.docker.com/_/ghost/)), para hacer la ejecución de los respectivos escenarios de extremo a extremo.

## Instalación de dependencias
Dirijase a la carpeta raiz del proyecto y haga `npm install`.

## Archivos de configuración
1. Dirijase al archivo `kraken/properties.json` y modifique las variables de ser necesario:

| Variable | Descripción  | Default |
|--|--|--|
| `username` | Correo de usuario que ingresara a la aplicación | johndoe@mail.com|
| `password` | Contraseña de usuario que ingresara a a la aplicación | 1234567890123456 |
| `url` | Dirección URL donde esta alojado GHOST en la versión release candidate (5.96.0) | http://localhost:2368/ghost/ |
| `url_base` | Dirección URL donde esta alojado GHOST en la versión base (4.5.0) | http://localhost:3001/ghost/ |

2. Dirijase al archivo `cypress/cypress/fixtures/properties.json` y modifique las variables de ser necesario:

| Variable | Descripción  | Default |
|--|--|--|
| `username` | Correo de usuario que ingresara a la aplicación | johndoe@mail.com|
| `password` | Contraseña de usuario que ingresara a a la aplicación | 1234567890123456 |
| `url` | Dirección URL donde esta alojado GHOST en la versión release candidate (5.96.0) | http://localhost:2368/ghost/ |
| `url_base` | Dirección URL donde esta alojado GHOST en la versión base (4.5.0) | http://localhost:3001/ghost/ |

## Ejecución pruebas e2e de Kraken y script de comparación de imagenes con PixelMatch
### Ejecución pruebas e2e de Kraken
**Importante:** antes de hacer la ejecución de las pruebas recomendamos borrar los datos ingresados anteriormente a la aplicación GHOST de Paginas, Posts, Tags y Miembros.

Dirijase a la carpeta raiz del proyecto y ejecute `npm run e2e:kraken`

### Ejecución de script de comparación de imagenes con PixelMatch
Por aqui proceso de ejecución

### Cómo ver los resultados del reporte
Poner aqui como ver los resultados del reporte

## Ejecución pruebas e2e de Cypress y script de comparación de imagenes con ResembleJs
### Ejecución pruebas e2e de Kraken
**Importante:** antes de hacer la ejecución de las pruebas recomendamos borrar los datos ingresados anteriormente a la aplicación GHOST de Paginas, Posts, Tags y Miembros.

Dirijase a la carpeta raiz del proyecto y ejecute `npm run e2e:cypress` o siga esta guia de [como ejecutar tests en cypress](https://docs.cypress.io/app/end-to-end-testing/writing-your-first-end-to-end-test#Add-a-test-file) para ejecutarlos en un navegador (para ello debe añadir el proyecto a cypress ubicado en `cypress/cypress/e2e`.

### Ejecución de script de comparación de imagenes con ResembleJs
Por aqui proceso de ejecución

### Cómo ver los resultados del reporte
Poner aqui como ver los resultados del reporte
