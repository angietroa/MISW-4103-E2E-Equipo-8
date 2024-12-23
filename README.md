# MISW-4103-E2E-Equipo-8
|Integrante| Correo |
|--|--|
| Angie Roa | a.roap@uniandes.edu.co |
| Esteban Heredia | e.herediar@uniandes.edu.co |
| Andres Folleco | oa.folleco41@uniandes.edu.co |
| Daniela Suárez |  cd.suarez@uniandes.edu.co |

# *Semana 8: Pruebas e2e en Cypress con generación de datos (a priori) y en diferentes navegadores para GHOST*
Este apartado del README pretende describir como hacer la ejecución de las pruebas "end to end" con generación de datos (a priori) y en diferentes navegadores de las funcionalidades y escenarios escogidos para GHOST en la versión 5.96.0.

# Cómo ejecutar
## Prerequisitos
Debera tener instalado los siguientes paquetes en su entorno:
| Prerequisito | Versión  | Obsevación
|--|--|--|
| [Node.js](https://nodejs.org/en/download/package-manager) | 20.18.0 | - |
| [Ghost](https://ghost.org/docs/install/) | 5.96.0 | Puede tenerlo instalado localmente (recomendamos instalarlo con [Docker](https://hub.docker.com/_/ghost/)) o tenerlo desplegado en algeun servidor web al que tenga acceso |
| [Cypress](https://docs.cypress.io/app/get-started/install-cypress) | 13.15.2 |-|
| [Chrome](https://www.google.com/intl/es-419/chrome/dr/download/?brand=YTUH&ds_kid=43700078776498264&gad_source=1&gclid=CjwKCAiA6aW6BhBqEiwA6KzDc_XmnGu0ocahg_2Vf53rLeKIwViZuFI4uUF2A7tnzK5dn8fUdzX4wRoCKokQAvD_BwE&gclsrc=aw.ds) | 131 | Necesario para la ejeción de pruebas en Chrome |
| [Firefox](https://www.mozilla.org/es-ES/firefox/new/) | 131 | Necesario para la ejecución de pruebas en Firefox |
| [Edge](https://www.microsoft.com/es-es/edge/download?form=MA13FJ) | 131 | Necesario para la ejecución de pruebas en Edge |

Al instalar Cypress cuando se escoja qué navegador usar, debería verse así (esta es una manera de comprobar que todos los navegadores están instaladas en su equipo):
<img width="1419" alt="Screenshot 2024-11-29 at 4 25 20 PM" src="https://github.com/user-attachments/assets/89ee1778-0062-4b4f-99ba-39357e65ec34">

## Instalación de dependencias
Dirijase a la carpeta raiz del proyecto y haga `npm install`.

## Archivos de configuración
Dirijase al archivo `final-strategy/cypress/fixtures/properties.json` y modifique las variables de ser necesario:

| Variable | Descripción  | Default |
|--|--|--|
| `username` | Correo de usuario que ingresara a la aplicación | johndoe@mail.com |
| `password` | Contraseña de usuario que ingresara a a la aplicación | 1234567890123456 |
| `url` | Dirección URL donde esta alojado GHOST en la versión 5.96.0 | http://localhost:2368/ghost/ |

## Ejecución pruebas e2e de Cypress
Dirijase a la carpeta raiz del proyecto y ejecute: 

* `npm run e2e:final:chrome`
* `npm run e2e:final:firefox`
* `npm run e2e:final:electron`
* `npm run e2e:final:edge`

O también abra la aplicación de Cypress y ejecute cada una de las pruebas ubicadas en `final-strategy/cypress/e2e` por separado y con un navegador escogido.

**Importante**: antes de hacer la ejecución en cada navegador, borre la base de datos de la aplicación o la instancia, para tener pruebas limpias (sin datos anteriores).

---

# *Semana 7: Pruebas e2e en Cypress con generación de datos para GHOST*
Este apartado del README pretende describir como hacer la ejecución de las pruebas "end to end" con generación de datos de las [funcionalidades y escenarios escogidos](https://github.com/angietroa/MISW-4103-E2E-Equipo-8/wiki/semana7-escenarios) para GHOST en la versión 5.96.0.

# Cómo ejecutar
## Prerequisitos
Debera tener instalado los siguientes paquetes en su entorno:
| Prerequisito | Versión  | Obsevación
|--|--|--|
| [Node.js](https://nodejs.org/en/download/package-manager) | 20.18.0 | - |
| [Ghost](https://ghost.org/docs/install/) | 5.96.0 | Puede tenerlo instalado localmente (recomendamos instalarlo con [Docker](https://hub.docker.com/_/ghost/)) o tenerlo desplegado en algun servidor web al que tenga acceso |
| [Cypress](https://docs.cypress.io/app/get-started/install-cypress) | 13.15.2 | **Opcional**, si quiere visualizar la ejecución de las pruebas e2e de cypress desde un navegador puede hacer la instalación de lo contrario se pueden ejecutar las pruebas modo "headless". |

## Instalación de dependencias
Dirijase a la carpeta raiz del proyecto y haga `npm install`.

## Archivos de configuración
Dirijase al archivo `data-generation/cypress/fixtures/properties.json` y modifique las variables de ser necesario:

| Variable | Descripción  | Default |
|--|--|--|
| `username` | Correo de usuario que ingresara a la aplicación | johndoe@mail.com |
| `password` | Contraseña de usuario que ingresara a a la aplicación | 1234567890123456 |
| `url` | Dirección URL donde esta alojado GHOST en la versión 5.96.0 | http://localhost:2368/ghost/ |

## Ejecución pruebas e2e de Cypress
Dirijase a la carpeta raiz del proyecto y ejecute `npm run e2e:data` o ejecute abra la aplicación de Cypress y ejecute cada una de las pruebas ubicadas en `/data-generation/cypress/e2e` por separado.

---

# *Semana 5 y Semana 6: Pruebas e2e en Kraken y Cypress para GHOST*
Este apartado del README pretende describir como hacer la ejecución de las pruebas "end to end" de las [funcionalidades y escenarios escogidos](https://github.com/angietroa/MISW-4103-E2E-Equipo-8/wiki/Funcionalidades-y-escenarios-escogidos) y de los scripts para ver el reporte de regresión visual comparando GHOST en la versión 4.5.0 (versión base) con GHOST en la versión 5.96.0 (versión release candidate).

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

**Importante**: Las dos versiones de GHOST (4.5.0 y 5.96.0) deben estar ejecutandose al tiempo (recomendamos instalarlo con [Docker](https://hub.docker.com/_/ghost/), para hacer la ejecución de los respectivos escenarios de extremo a extremo.

**Importante**: Junto con las dos versiones de GHOST, se debe tener un mismo usuario para las dos, ya que se manejara este para la ejecución de las pruebas.

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
### 1. Ejecución pruebas e2e de Kraken
**Importante:** antes de hacer la ejecución de las pruebas recomendamos borrar los datos ingresados anteriormente a la aplicación GHOST de Paginas, Posts, Tags y Miembros.

Dirijase a la carpeta raiz del proyecto y ejecute `npm run e2e:kraken`

### 2. Ejecución de script de comparación de imagenes con PixelMatch
* 2.1 Dirijase al directorio `kraken/make_report/`
* 2.2 Instale las dependencias necesarias ejecutando el comando `npm install`
* 2.3 Ejecute el programa con el siguiente comando `node index.js`

### 3. Cómo ver los resultados del reporte
Dirijase al directorio `kraken/make_reports/reports/` aquí encontrará varios directorios de reportes, ingrese al reporte de su interés, va a encontrar varias carpetas con los escenarios probados, abra la carpeta e001, y posteriormente abra el archivo `index.html`. Podrá navegar los diferentes escenarios desde el reporte Web.

## Ejecución pruebas e2e de Cypress y script de comparación de imagenes con ResembleJs
### 1. Ejecución pruebas e2e de Cypress
**Importante:** antes de hacer la ejecución de las pruebas recomendamos borrar los datos ingresados anteriormente a la aplicación GHOST de Paginas, Posts, Tags y Miembros.

Dirijase a la carpeta raiz del proyecto y ejecute `npm run e2e:cypress` o siga esta guia de [como ejecutar tests en cypress](https://docs.cypress.io/app/end-to-end-testing/writing-your-first-end-to-end-test#Add-a-test-file) para ejecutarlos en un navegador (para ello debe añadir el proyecto a cypress ubicado en `cypress/cypress/e2e`.

### 2. Ejecución de script de comparación de imagenes con ResembleJs
Para la ejecución del script de comparación dirijase a la carpeta raiz del proyecto y ejecute `npm run vrt:cypress`, esto tomara los screenshots tomados en el paso anterior "Ejecución pruebas e2e de Cypress".

**Importante:** para correr este script y que pueda generar los reportes de forma adecuada, el paso anterior debe estar completo, de lo contrario no se podra ver cada uno de los reportes generados para cada uno de los escenarios

### 3. Cómo ver los resultados del reporte
Una vez el script ha sido ejecutado y ha terminado su proceso, puede dirigirse a la carpeta `cypress/cypress/results`, en esta encontrara relacionados cada uno de los escenarios para los cuales se hizo VRT separados en carpetas, cada carpeta contiene una carpeta con las imagenes de diferencia generadas por ResembleJS y un reporte en HTML que podrá visualizar desde un navegador.
