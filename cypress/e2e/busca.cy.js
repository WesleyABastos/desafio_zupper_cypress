/// <reference types="cypress"/>

import BuscaPage from '../pages/BuscaPage';

describe('Funcionalidade: Busca de Passagens Aéreas no site da Zupper', () => {

  let massaTeste;

  before(() => {
    cy.fixture('massa_teste').then(m => {
      massaTeste = m;
    });
  });

  it('Cenário: Busca de passagens aéreas de ida e volta para 2 Adultos, 1 Criança e 1 Bebê com sucesso', () => {
    BuscaPage.visitarPagina();

    cy.wait(2000);
    BuscaPage.removerIframe();

    BuscaPage.aceitarCookies();

    BuscaPage.selecionarOrigem(massaTeste.origem, massaTeste.aeroporto_origem);
    BuscaPage.selecionarDestino(massaTeste.destino, massaTeste.aeroporto_destino);

    cy.calcularDatasViagem().then(({ diaIda, diaVolta }) => {
      BuscaPage.selecionarDatas(diaIda, diaVolta);
    });

    BuscaPage.selecionarPassageiros();

    cy.wait(2000);
    BuscaPage.buscarVoos();

    BuscaPage.verificarResultados();
    BuscaPage.verificarPrecos();
  });
});