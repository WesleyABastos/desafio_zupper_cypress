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

import 'cypress-iframe';


Cypress.Commands.add('calcularDatasViagem', (diasIda = 3, diasVolta = 5) => {
  // Obter a data atual
  const dataAtual = new Date();

  const dataIda = new Date(dataAtual);
  dataIda.setDate(dataIda.getDate() + diasIda);

  const dataVolta = new Date(dataIda);
  dataVolta.setDate(dataVolta.getDate() + diasVolta);

  // Obter o dia da data de ida e volta
  const diaIda = dataIda.getDate().toString();
  const diaVolta = dataVolta.getDate().toString();

  return { diaIda, diaVolta };
});

// Função personalizada para fazer scroll e tirar screenshots, rolando meia tela por vez
Cypress.Commands.add('scrollAndCapture', (times, delay = 10000) => {
    for (let i = 0; i < times; i++) {
    
      cy.wait(delay);
      cy.window().then((win) => {
        win.scrollBy(0, win.innerHeight / 2); // Scroll meia tela
      });

      cy.wait(delay);
      cy.screenshot(`captura_parte_${i + 1}`);
    }
  });
  