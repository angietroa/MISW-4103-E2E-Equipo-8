// ***********************************************************
// This example support/e2e.js is processed and
// loaded automatically before your test files.
//
// This is a great place to put global configuration and
// behavior that modifies Cypress.
//
// You can change the location of this file or turn off
// automatically serving support files with the
// 'supportFile' configuration option.
//
// You can read more here:
// https://on.cypress.io/configuration
// ***********************************************************

// Import commands.js using ES2015 syntax:
import './commands'

Cypress.on('uncaught:exception', (err) => {
  // Ignorar el error relacionado con "play()"
  if (err.message.includes('The play() request was interrupted')) {
    // Retornar false evita que Cypress falle la prueba
    return false;
  }

  // Permitir que otros errores no relacionados fallen la prueba
  return true;
});

// Alternatively you can use CommonJS syntax:
// require('./commands')
