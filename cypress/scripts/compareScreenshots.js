const fs = require("fs");
const path = require("path");
const resemble = require("resemblejs");

const scenarios = [
  "E001",
  "E002",
  "E003",
  "E007",
  "E009",
  "E012",
  "E013",
  "E016",
  "E018",
  "E020",
];

const config = {
  baseResultsFolder: path.join(__dirname, "../cypress/results/"),

  compareOptions: {
    output: {
      errorColor: { red: 255, green: 0, blue: 0 },
      transparency: 0.3,
    },
    scaleToSameSize: true,
    ignore: "antialiasing",
  },
};

if (!fs.existsSync(config.baseResultsFolder)) {
  fs.mkdirSync(config.baseResultsFolder, { recursive: true });
}

// Función para obtener los archivos de imagen
const getImageFiles = (folder) => {
  return fs.readdirSync(folder).filter((file) => file.endsWith(".png"));
};

const compareImages = (imagePath1, imagePath2, scenario) => {
  return new Promise((resolve, reject) => {
    resemble(imagePath1)
      .compareTo(imagePath2)
      .ignoreAntialiasing()
      .onComplete((data) => {
        if (data.misMatchPercentage > 0) {
          const diffFolder = path.join(
            config.baseResultsFolder,
            scenario,
            "diffs"
          );
          if (!fs.existsSync(diffFolder)) {
            fs.mkdirSync(diffFolder, { recursive: true });
          }

          const diffImagePath = path.join(
            diffFolder,
            `diff-${path.basename(imagePath1)}`
          );
          fs.writeFileSync(diffImagePath, data.getBuffer());
          resolve({
            misMatchPercentage: data.misMatchPercentage,
            diffImagePath: `./${scenario}/diffs/${path.basename(
              diffImagePath
            )}`, // Ruta relativa a la carpeta de cada escenario
            isSameDimensions: data.isSameDimensions,
            dimensionDifference: data.dimensionDifference,
          });
        } else {
          resolve(null);
        }
      });
  });
};

const generateReportHTML = (datetime, comparisonResults, scenario) => {
  const browserHTML = (imageName, result) => {
    return `
        <div class="browser" id="test0">
          <div class="btitle">
            <h2>Imagen: ${imageName}</h2>
            <p>Porcentaje de diferencia: ${result?.misMatchPercentage || 0}%</p>
          </div>
          <div class="imgline">
            <div class="imgcontainer">
              <span class="imgname">Versión Base</span>
              <img class="img2" src="../../screenshots/${scenario}_legacyVersion.cy.js/${scenario}/${imageName}" alt="Referencia">
            </div>
            <div class="imgcontainer">
              <span class="imgname">Versión RC</span>
              <img class="img2" src="../../screenshots/${scenario}.cy.js/${scenario}/${imageName}" alt="Prueba">
            </div>
          </div>
          ${
            result
              ? `
          <div class="imgline">
            <div class="imgcontainer">
              <span class="imgname">Diferencia</span>
              <img class="imgfull" src="../../results/${scenario}/diffs/${path.basename(
                  result.diffImagePath
                )}" alt="Diferencia">
            </div>
          </div>
        `
              : ""
          }
        </div>
      `;
  };

  const compareOptionsHTML = `
      <h2>Configuración utilizada para la comparación</h2>
      <table>
        <tr>
          <td><strong>Escalado a tamaño idéntico</strong></td>
          <td>${config.compareOptions.scaleToSameSize ? "Sí" : "No"}</td>
        </tr>
        <tr>
          <td><strong>Ignorar antialiasing</strong></td>
          <td>${
            config.compareOptions.ignore === "antialiasing" ? "Sí" : "No"
          }</td>
        </tr>
        <tr>
          <td><strong>Color de error</strong></td>
          <td>RGB(${config.compareOptions.output.errorColor.red}, ${
    config.compareOptions.output.errorColor.green
  }, ${config.compareOptions.output.errorColor.blue})</td>
        </tr>
        <tr>
          <td><strong>Transparencia</strong></td>
          <td>${config.compareOptions.output.transparency}</td>
        </tr>
      </table>
    `;

  return `
      <html>
        <head>
          <title> VRT Report - ${scenario} </title>
          <style>
            body {
              font-family: Arial, sans-serif;
              padding: 20px;
              background-color: #f9f9f9;
            }
            h1 {
              text-align: center;
              color: #333;
            }
            .imgcontainer {
              -webkit-flex: 1 1 auto;
              -ms-flex: 1 1 auto;
              flex: 1 1 auto;
              padding: 0 25px;
              padding-top: 20px;
              text-align: center;
            }
            .imgname {
              text-align: center;
              font-family: latoregular;
              color: #787878;
              display: block;
              margin: 0 auto;
              text-transform: uppercase;
              padding: 5px 0;
              padding-bottom: 15px;
              font-size: 12px;
            }
            .imgline {
              position: relative;
              display: flex;
            }
            .img2 {
              width: auto;
              max-width: 100%;
              max-height: 400px;
            }
            .imgfull {
              width: 100%;
            }
            .browser {
              position: relative;
              margin: 5px auto;
              padding: 10px 30px;
              background-color: #FAFAFA;
              box-shadow: 0 3px 6px 0 rgba(0,0,0,0.16);
              min-height: 40px;
              break-inside: avoid;
            }
            .btitle {
              padding: 5px 0;
            }
            h2 {
              color: #333;
            }
            table {
              width: 100%;
              border-collapse: collapse;
              margin: 20px 0;
            }
            td {
              padding: 8px;
              border: 1px solid #ddd;
            }
            th {
              padding: 8px;
              background-color: #f2f2f2;
              text-align: left;
            }
          </style>
        </head>
        <body>
          <h1>Reporte Visual (VRT) - ${scenario}</h1>
          <p>Ejecutado: ${datetime}</p>
          ${compareOptionsHTML}
          <div id="visualizer">
            ${Object.entries(comparisonResults)
              .map(([imageName, result]) => browserHTML(imageName, result))
              .join("")}
          </div>
        </body>
      </html>
    `;
};

const executeComparison = async (scenario) => {
  const comparisonResults = {};

  try {
    const scenarioResultsFolder = path.join(config.baseResultsFolder, scenario);
    const scenarioDiffFolder = path.join(scenarioResultsFolder, "diffs");
    if (!fs.existsSync(scenarioResultsFolder)) {
      fs.mkdirSync(scenarioResultsFolder, { recursive: true });
    }
    if (!fs.existsSync(scenarioDiffFolder)) {
      fs.mkdirSync(scenarioDiffFolder, { recursive: true });
    }

    const legacyImagesFolder = path.join(
      __dirname,
      `../cypress/screenshots/${scenario}_legacyversion.cy.js/${scenario}/`
    );
    const newImagesFolder = path.join(
      __dirname,
      `../cypress/screenshots/${scenario}.cy.js/${scenario}/`
    );

    console.log(
      `Verificando existencia de la ruta legacy: ${legacyImagesFolder}`
    );
    console.log(`Verificando existencia de la ruta nueva: ${newImagesFolder}`);

    if (!fs.existsSync(legacyImagesFolder)) {
      console.error(`La ruta legacy no existe: ${legacyImagesFolder}`);
      return;
    }
    if (!fs.existsSync(newImagesFolder)) {
      console.error(`La ruta nueva no existe: ${newImagesFolder}`);
      return;
    }

    const legacyImages = getImageFiles(legacyImagesFolder);
    const newImages = getImageFiles(newImagesFolder);

    if (legacyImages.length === 0 || newImages.length === 0) {
      console.error(
        `No se encontraron imágenes en alguna de las carpetas: ${scenario}`
      );
      return;
    }

    // Comparar las imágenes
    for (let imageName of legacyImages) {
      if (newImages.includes(imageName)) {
        const legacyImagePath = path.join(legacyImagesFolder, imageName);
        const newImagePath = path.join(newImagesFolder, imageName);

        console.log(
          `Comparando imágenes: ${legacyImagePath} vs ${newImagePath}`
        );
        const result = await compareImages(
          legacyImagePath,
          newImagePath,
          scenario
        );

        if (result) {
          console.log(`Diferencias encontradas en ${imageName}:`);
          console.log(
            `Porcentaje de diferencia: ${result.misMatchPercentage}%`
          );
          console.log(
            `Archivo de diferencia guardado en: ${result.diffImagePath}`
          );
          comparisonResults[imageName] = result;
        } else {
          console.log(`Las imágenes son idénticas: ${imageName}`);
          comparisonResults[imageName] = null;
        }
      }
    }

    const datetime = new Date().toISOString().replace(/:/g, ".");
    const reportHTML = generateReportHTML(
      datetime,
      comparisonResults,
      scenario
    );
    const reportPath = path.join(
      scenarioResultsFolder,
      `report-${datetime}.html`
    );

    fs.writeFileSync(reportPath, reportHTML);
    console.log(`Reporte generado en: ${reportPath}`);
  } catch (error) {
    console.error(
      `Error en la comparación de imágenes para ${scenario}: ${error}`
    );
  }
};

const runComparisons = async () => {
  for (const scenario of scenarios) {
    await executeComparison(scenario);
  }
};

runComparisons();
