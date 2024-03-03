# Front-end Be

Este é um Teste Técnico em Front-end da Be. Ele é destinado demonstrar habilidades. 

## Desafio

O Teste Técnico para Front-End da Be consiste em construir a visualização de uma tabela com dados que virão de uma API simulada, em json-server.

### Tecnologias usadas

- React.js
- TypeScript
- Styled Components

Foi utilizado o gerenciado de pacotes NPM.

### Componentes do Layout
A tabela contem as seguintes colunas:

- imagem;
- nome;
- cargo
- data de admissão;
- telefone.

Também é possível realizar pesquisa na tabela por meio de uma caixa de pesquisa.

![Caixas  de pesquisa](https://i.imgur.com/s9CJHEv.png)

 A pesquisa  permiti filtrar os dados por cargo, nome e telefone.

No layout mara mobile as colunas `Cargo`, `Data de admissão` e `Telefone`, podem ser vistas após um clique na `seta` para baixo.

![Seta para abrir dados do funcionário](https://i.imgur.com/GZNsxGr.png) 

Como é a visualização das informações.

![Seta para abrir dados do funcionário](https://i.imgur.com/9gGnDvW.png) 

O recolhimento das informações do funcionário pode ser feita na `seta` para cima.

![Seta para recolher os dados do funcionário](https://i.imgur.com/RPPhag3.png) 



### Comandos para Rodar o Projeto
Foi orientado a Usar uma APi simulada.
Para ter acesso aos dados que alimentarão o projeto e rodar o projeto, faça o seguinte:

1. Caso você não tenha, instale o pacote [json-server](https://github.com/typicode/json-server);
2. Clone este repositório do GitHub em sua máquina: [git@github.com:monique282/desafio-front-end.git](https://github.com/BeMobile/desafio-front-end);
3. Entre na pasta do projeto, em sua máquina, e, por meio da linha de comando, execute o comando `npx json-server db.json`, para consumir a API simulada. Lembrando que você tem que deixar o comando rodando no terminal.
4. Em outro terminal, execute o comando `npm install`, para fazer a instalação de todas as bibliotecas.
5. Use o arquivo .env.example para criar o .env .
6. Execute o comando `npm run dev`, para rodar o projeto. Esse comando disponibilizaram um link do qual você pode abrir o link no seu navegador para fazer a interação com o projeto.

``````
Lembrando, todos os comando acima tem ser dados na pasta que corresponde ao projeto.
``````
