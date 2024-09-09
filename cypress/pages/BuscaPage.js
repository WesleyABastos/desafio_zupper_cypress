// cypress/pages/BuscaPage.js

class BuscaPage {
    visitarPagina() {
      cy.visit('/');
    }
  
    aceitarCookies() {
      cy.get('#oPrivallyApp-AcceptLink').click();
    }
  
    removerIframe() {
      cy.get('iframe[src*="zupper-wp.vendavalida.com.br/webpush/optinPopup"]').then(($iframe) => {
        cy.wrap($iframe).invoke('remove');
      });
    }
  
    selecionarOrigem(Origem, AeroportoOrigem) {
      cy.get("[data-zt='flightSearchOrigin']").within(() => {
        cy.get("[data-zt='airportSelectionInput']").first().click();
        cy.get("[data-zt='airportSelectionInput']").first().type(Origem);
      });
      cy.wait(2000);
      cy.contains("[data-zt='airportName']", AeroportoOrigem).click();
    }
  
    selecionarDestino(Destino, AeroportoDestino) {
      cy.get("[data-zt='flightSearchDestination']").within(() => {
        cy.get("[data-zt='airportSelectionInput']").first().click();
        cy.get("[data-zt='airportSelectionInput']").first().type(Destino);
      });
      cy.wait(2000);
      cy.contains("[data-zt='airportName']", AeroportoDestino).click();
    }
  
    selecionarDatas(diaIda, diaVolta) {
      cy.get("[data-zt='calendarTrigger']").click();
      cy.contains('span', diaIda).click();
      cy.contains('span', diaVolta).click();
    }
  
    selecionarPassageiros() {
      cy.get("input[data-zt='passengersConfigTrigger']").click();
      cy.get("span[data-zt='passengersConfigAddAdult']").click();
      cy.get("span[data-zt='passengersConfigAddChild']").click();
      cy.get("span[data-zt='passengersConfigAddInfant']").click();
    }
  
    buscarVoos() {
      cy.get('.find-hotels > button').click();
    }
  
    verificarResultados() {
      cy.get("article[data-zt='priceMatrix']", { timeout: 50000 }).should('be.visible').then(() => {
        cy.get('.ngx-foreground-spinner > .sk-ball-spin-clockwise', { timeout: 30000 }).should('not.be.visible');
      });
    }
  
    verificarPrecos() {
      cy.get("article[data-zt='priceMatrix'] td.best-prices span", { timeout: 30000 }).then(($spans) => {
        const best_prices = $spans.filter((index, span) => Cypress.$(span).text().trim() !== "");
  
        if (best_prices.length > 0) {
          best_prices.each((index, span) => {
            const priceText = Cypress.$(span).text().trim();
            if (priceText) {
              cy.log(`${index + 1}. Melhor preço encontrado: ${priceText}`);
            }
          });
  
          cy.get('h3.description').contains('Melhores tarifas encontradas').should('be.visible');
        } else {
          cy.log("Os preços estão visíveis, mas nenhum valor foi encontrado.");
        }
      });
    }
  }
  
export default new BuscaPage();
  