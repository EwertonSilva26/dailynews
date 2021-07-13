## DAILY NEWS

Abaixo estão os requisitos necessários para execução da aplicação:

node v14.17.1
npm 6.14.13
nodemon 2.0.7
MySql

## Preparação do ambiente

Antes de inicializar o front e o backend, o banco de dados deve ser criado e alimentado. O arquivo scripts.sql contigo na raiz da aplicação, uma vez rodado, faz a criação de todas as tabelas necessárias para o funcionamento do sistema, assim como inserções de um compilado de dados.

Feito isso, precisamos primeiramente subir o nosso backend, para isso, precisamos  garantir a conexão com o banco dados. O arquivo *dbserver.js* contido em *./backend/config* faz a conexão com o mysql, sendo necessário informar o usuário e senha para prosseguir com a conexão.


## Inicialização do sistema

Uma vez que os arquivos foram alterados corretamente, para subir o backend é necessário rodar o arquivo *app.js* contido em *./backend* através do comando nodemon app, que subirá o servidor na porta 3003.

Para subir o frontend precisamos executar o comando *npm start* na pasta *./frontend*, que subirá a aplicação na porta 3000.