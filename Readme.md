# Desafio Zupper 🚀

## *Automação de Testes com Cypress* 

### Nesse projeto utilizamos: 

* *Cypress:* Framework moderno para automação de testes end-to-end, focado em simplicidade e velocidade de execução;
* *Cypress Iframe Plugin:* Suporte para interações com elementos dentro de iframes;
* *Allure Reports:* Plugin para geração de relatórios detalhados de execução dos testes;
* *Fixtures e Commands:* Utilizados para gerenciamento de massas de dados e organização de comandos personalizados;;
* *Page Object Model (POM):* Organização das interações com páginas para reutilização e facilidade de manutenção do código..

### > Estrutura do Projeto: 📂

- *cypress/e2e:* contem as pastas de Steps definitions e Support;
- *cypress/fixtures:* Contém arquivos de massa de teste utilizados nos testes;
- *cypress/support:* Inclui os arquivos de suporte, como os comandos personalizados e configuração de antes e depois dos testes;
- *cypress/pages:* Implementação do padrão Page Objects, separando a lógica de interação com cada página;
- *reports:* Pasta onde são gerados os relatórios de execução de testes utilizando o Allure Reports.

### > Pré-requisitos ⚡

- **Node.js:** Instalar a versão (>= 12.x);
- **Cypress:** Versão utilizada no projeto é a 12.2.0;
- **Allure Reports:** Utilizamos o plugin @shelex/cypress-allure-plugin para geração dos relatórios, como um plus no projeto, localizado no https://github.com/shelex/cypress-allure-plugin


### > Instalação ⚙️

1. Clonar o repositório:
  ``git clone https://github.com/WesleyABastos/desafio_zupper_cypress.git``

2. Entrar no diretório do projeto:
  ``cd desafio_zupper_cypress``

3. Instalar as dependências:
  ``npm install``

### > Como rodar a automação 🔥

- **Opção 1:** Para abrir a interface gráfica do Cypress (GUI) e ver a execução dos testes, no terminal digite o comando:
  ``npx cypress open``

*Obs: Quando Cypress abrir interface grafica escolher a opção 'E2E Testing', depois a opção de browser Electron (nativo no Cypress), clicar em Start E2E Testing in Electron e por ultimo clicar no arquivo busca.cy.js para ver a execução em modo debbuging.*


- **Opção 2:** Para rodar os testes no modo headless pelo CLI do Cypress e gerar os relatórios Allure:  
  `npx cypress run`

Nessa opção depois da execução, o relatório Allure será gerado na pasta reports.  

### > Reports com Allure após escolher opção 2 📂

- Ao rodar os testes, relatórios em formato Allure serão gerados na pasta reports e poderão ser visualizados utilizando o comando:   
  ``allure serve reports``


### > **Observações do BDD ⚠️**

***Cenário Busca de passagens aéreas:*** que foi automatizado descreve o fluxo básico de uma busca bem-sucedida, sem considerar casos de erro ou funcionalidades adicionais (filtros, erros, etc.).

Neste cenário envolveu a interação com os elementos da página, inclusive com Iframe inserido no projeto (campos de entrada, botões, etc.) e verificar se os resultados exibidos estão corretos.

***Esquema de cenários:*** tipo de formato que usa a matriz de Exemplos para consumir os dados e cada linha da tabela é uma cenário executado. 

No projeto descrevi muitos cenários de sucesso para Busca de Voos e outros arquivos com pelo menos um cenário de sucesso para hospedagem e pacotes.

### > Melhorias para esse projeto de automação, conforme crescimento da cobertura de cenários (Regressivo): 

  **1. Separar testes:** Em vez de colocar todos os testes em um único diretório e2e, você pode dividi-los em subdiretórios de acordo com funcionalidades, módulos ou áreas da aplicação;  

  **2. Page Objects Dinâmicos:** Se uma página for muito grande ou possuir interações complexas, divida o Page Object em subcomponentes;  
  **3. Padrões reutilizáveis:** Algumas interações são comuns em muitas páginas (como aceitar cookies ou interagir com modais);  
  **4. Fixtures:** Organizar as massas de testes de fixtures por funcionalidade;  
  **5. Execução em paralelo:** Configure seu projeto para rodar testes em paralelo em diferentes máquinas ou containers, o que reduzirá o tempo de execução dos testes.  
  **6. Divisão de testes:** Divida os testes em grupos menores com base em tags ou funcionalidades para que possam ser rodados separadamente.  
  **7. Configurações Multinavegador:** deixar o projeto preparado para ser executado em múltiplos navegadores (Chrome, Firefox, Edge);  
  **8. Adição de comandos para APIs:** Em interações com APIs, podemos considerar adicionar testes de API diretamente no Cypress, utilizando cy.request() e criando comandos específicos para chamadas frequentes de API, como autenticação ou criação de massas;  
  **9. Estratégia de Testes de Regressão:**  
  -- Smoke Tests: para rapidamente as funcionalidades principais da aplicação,  
  -- Testes de regressão: Rodar os testes de regressão completos periodicamente ou após grandes mudanças no código, enquanto os testes críticos são executados frequentemente. 




 ### > Cenários identificados no levantamento do site anteriormente no projeto com ruby + Capybara: 

**Funcionalidade: Busca de Passagens Aéreas**

  Sendo uma pessoa que deseja curtir uma viagem com a familia
  Quero realizar buscas de passagens para minhas férias
  Para que possa escolher a melhor opção disponivel  

    @BuscaVoos
    Cenário: Busca de passagens aéreas de ida e volta para 2 Adultos, 1 Criança e 1 Bebê
        Dado que acesso o site da zupper
        Quando inserir as informações da minha viagem
        E clicar em buscar
        Então serão exibidos os voos e as melhores tarifas encontradas

    @BuscaVoo_ida
    Cenário: Busca de passagens aéreas de ida para 1 Adultos, 2 Criança e 1 Bebê
        Dado que acesso o site da zupper
        Quando inserir as informações da minha viagem
        E clicar em buscar
        Então serão exibidos os voos e as melhores tarifas encontradas

    @BuscaVoo_multidestinos
    Cenário: Busca de passagens aéreas para 2 destinos RJ > SP e RJ > Recife 
        Dado que acesso o site da zupper
        Quando inserir as informações das 2 minhas viagens
        E clicar em buscar
        Então serão exibidos os voos e as melhores tarifas encontradas para as 2 datas

    @BuscaVoo_multidestinos
    Cenário: Busca de passagens aéreas para 3 destinos Patos MG > SP e SP > Manaus 
        Dado que acesso o site da zupper
        Quando inserir as informações das minhas 3 viagens
        E clicar em buscar
        Então serão exibidos os voos e as melhores tarifas encontradas para as 3 datas


    @BuscaDinamica @sucesso
    Esquema do Cenario: Busca de voos com informações predefinidas
        Dado que acesso o site da zupper
        E inserir as informações obrigatórias:
            | origem         | destino         | ida        | volta        | passageiros   |
            | <lugar_origem> | <lugar_destino> | <data_ida> | <data_volta> | <passageiros> |
        Quando clicar em buscar
        Então serão exibidos os voos e as melhores tarifas encontradas

    Exemplo:
        | lugar_origem   |   lugar_destino   |  data_ida  | data_volta |          passageiros            |
        |   São Paulo    |      Natal        | 14/10/2024 | 18/10/2024 | 2 adultos + 1 criança + 2 bebes |
        | Rio de Janeiro | Rio Grande do Sul | 11/09/2024 | 13/09/2024 |       1 adulto + 2 criança      |
        |    Paraíba     |      Recife       | 01/10/2024 | 05/10/2024 |       3 adultos + 1 criança     |
        |  divinopolis   |      Manaus       | 13/11/2024 | 15/12/2024 |         1 adulto + 1 bebes      |
    
    @Lista
    Cenário: Tentativa de busca sem selecionar as opções na opção origem 
        Dado que acesso o site da zupper
        Quando digitar o lugar de origem
        Mas não selecionar as opções da listagem
        E clicar em buscar
        Então apresentará os campos obrigatórios em vermelho
    
    @Busca_invalida
    Esquema do Cenario: Tentativa de busca de voos com falta de informações obrigatórias 
        Dado que acesso o site da zupper
        Quando deixar de inserir alguma informação:
            | origem         | destino         | ida        | volta        | passageiros   |
            | <lugar_origem> | <lugar_destino> | <data_ida> | <data_volta> | <passageiros> |
        E clicar em buscar
        Então apresentará os campos obrigatórios em vermelho

    Exemplo:
        | lugar_origem   |   lugar_destino   |  data_ida  | data_volta |          passageiros            |
        |                |      Natal        | 14/10/2024 | 18/10/2024 | 2 adultos + 1 criança + 2 bebes |
        | Rio de Janeiro | Rio Grande do Sul | 11/09/2024 | 00/00/0000 |       1 adulto + 2 criança      |
        |    Paraíba     |                   |            | 05/10/2024 |       3 adultos + 1 criança     |
        |  divinopolis   |        21         | 13/11/2024 | 15/12/2024 |                                 |

  
**Funcionalidade: Busca de pacotes de viagem**

  Sendo uma pessoa que deseja curtir uma viagem com a familia
  Quero realizar buscas de pacotes para minhas férias
  Para que possa escolher a melhor opção disponivel   

    @BuscaHospedagens
    Cenário: Busca de passagens aéreas de ida e volta para 2 Adultos, 1 Criança
        Dado que acesso o site da zupper
        E clique no menu pacotes
        Quando inserir origem, destino, data ida, data volta, numero de viajantes/quartos 
        E clicar em buscar
        Então serão exibidos as melhores opções de pacotes


**Funcionalidade: Busca de hospedagens**

  Sendo uma pessoa que precisa ir trabalhar em outro estado
  Quero realizar buscas de hospedagens
  Para que possa ficar enquanto desenvolver minhas atividades  

    @BuscaHospedagens
    Cenário: Busca de passagens aéreas de ida e volta para 2 Adultos, 1 Criança
      Dado que acesso o site da zupper
      E clique no menu hospedagens
      Quando inserir origem, destino, numero de hóspedes, idade da criança, data entrada, data de saída e idade 
      E clicar em buscar
      Então serão exibidos as melhores opções de hospedagens