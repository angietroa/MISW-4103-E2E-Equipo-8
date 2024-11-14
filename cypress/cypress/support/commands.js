// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })
import "cypress-file-upload";
const fs = require("fs");
const path = require("path");

// Crear una carpeta para el test si no existe
Cypress.Commands.add("createTestFolder", (testName) => {
  const folderPath = path.join(Cypress.config("screenshotsFolder"), testName);

  // Crear carpeta si no existe
  if (!fs.existsSync(folderPath)) {
    fs.mkdirSync(folderPath, { recursive: true });
  }

  return folderPath;
});

// Tomar screenshot dentro de la carpeta específica del test
Cypress.Commands.add("screenshotInTestFolder", (testName, screenshotName) => {
  const folderPath = path.join(Cypress.config("screenshotsFolder"), testName);
  cy.screenshot(screenshotName, {
    capture: "viewport",
    log: true,
    screenshotFolder: folderPath,
  });
});
