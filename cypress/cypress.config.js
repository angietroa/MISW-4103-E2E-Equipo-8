const { defineConfig } = require("cypress");
const fs = require("fs");
const path = require("path");

module.exports = defineConfig({
  projectId: "GHOST",
  supportFolder: "./cypress/support",
  screenshotsFolder: "cypress/screenshots",
  e2e: {
    setupNodeEvents(on, config) {
      on("task", {
        // Crear la carpeta del test si no existe
        createTestFolder(testName) {
          const folderPath = path.join(config.screenshotsFolder, testName);
          if (!fs.existsSync(folderPath)) {
            fs.mkdirSync(folderPath, { recursive: true });
          }
          return null;
        },
        clearScreenshots(folderName) {
          const screenshotsDir = path.join(
            "cypress",
            "screenshots",
            folderName
          );

          // Verifica si la carpeta existe y la elimina
          if (fs.existsSync(screenshotsDir)) {
            fs.rmSync(screenshotsDir, { recursive: true, force: true });
          }

          return null;
        },
      });

      // Otras configuraciones que puedas tener
      return config;
    },

    // Asegúrate de que la ruta a la carpeta de screenshots esté configurada
    screenshotsFolder: "cypress/screenshots",
  },
});
