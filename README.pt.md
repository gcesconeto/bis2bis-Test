# Teste Bis2Bis

## Contexto

Este projeto foi desenvolvido como um teste para uma vaga na empresa [Bis2Bis](www.bis2bis.com.br).


O teste pede uma aplicação, composta de um script e uma API utilizando Node.js. O script deve ser capaz de consumir uma API externa e popular um banco de dados mongoDB com os dados recebidos. A API deve disponibilizar ações de CRUD para manipulação desse banco de dados.

Estas foram as principais tecnologias utilizadas:
* Node.js + express para a API,
* Axios para o consumo da API externa,
* mongoDB como banco de dados,
* Joi para validação de entradas.
* Jest + supertest para testes de integração.



## Instalação

### Requisitos:
* npm com Node.js v14.x +
* mongoDB v4.4+
### Preparação:
* Clone o repositório https://github.com/gcesconeto/bis2bis-Test,
* Rode `npm install` na pasta raiz do repositório clonado,
* Renomeie o arquivo `.env.example` fornecido para `.env`.
  * Edite esse arquivo com os dados relevantes para configurar o banco de dados e também a porta onde a API será exposta.
## Utilizando o script
Para consumir a API externa e popular o bando de dados, rode `npm run db:populate` na pasta raiz.
O usuário é informado sobre o status da operação através de mensagens no terminal.

Outro script foi disponibilizado para apagar a coleção do banco de dados, para isso rode `npm run db:wipe`. Se a variável de ambiente `NODE_ENV` for `production` o script pedira a confirmação do usuário antes de prosseguir.


## Utilizando a API

Rode `npm start` na pasta raíz, a API estará disponível na port configurada previamente, URL padrão: `http://localhost:3000`

### Exemplo de dado:

```
{
  "domains": [
    "atlantida.edu.ar"
  ],
  "alpha_two_code": "AR",
  "country": "Argentina",
  "web_pages": [
    "http://www.atlantida.edu.ar/"
  ],
  "name": "Universidad Atlantida Argentina",
  "state-province": "Buenos Aires"
}
```

### Endpoints:
* GET `/`:
  * Responde com `200` e um HTML básico com um link para a documentação.
* GET `/universities`:
  * Responde com os dados simplificados das primeiras 20 universidades do banco de dados,
  * Se a query string `?country=(country)` for utilizada, somente universidades do país em questão são retornadas,
  * Se a query string `?page=(page >= 1)` for utilizada, a página de 20 itens especificada é retornada.
* GET `/universities/:id`:
  * Responde com `200` e dados detalhados da universidade atrelada ao id informado,
  * Responde com `404` se o id informado não se encontra no banco de dados,
  * Responde com `422` se o id informado está mal formatado.
* POST `/universities`:
  * Recebe um corpo JSON no formato exemplificado acima,
  * Responde com `201` e os dados inseridos com o id correspondente,
  * Se os dados não estiverem de acordo com o formato, responde com `422` e os erros relevantes,
  * Se os campos name, state-province, and country entrarem em conflito com itens já presentes no banco de dados, responde com `409`, e os itens conflituosos em questão.
* PUT `/universities/:id`:
  * Recebe um corpo JSON com qualquer combinação dos campos: web_pages, name and domains,
  * Responde com `200` se foi atualizado corretamente,
  * Se os dados não estiverem de acordo com o formato, responde com `422` e os erros relevantes,
  * Responde com `404` se o id informado não se encontra no banco de dados,
  * Responde com `422` se o id informado está mal formatado.
* DELETE `/universities/:id`:
  * Responde com `204` if deleted successfully,
  * Responde com `404` se o id informado não se encontra no banco de dados,
  * Responde com `422` se o id informado está mal formatado.

## Tests

Testes de integração foram desenvolvidos para os "caminhos felizes" e "caminhos infelizes". Para testar rode `npm test`.

## Contato

* Guilherme Cesconeto
* [`Github`](https://github.com/gcesconeto)
