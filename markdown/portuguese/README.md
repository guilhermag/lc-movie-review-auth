<p align="center">
 <img src="../logo-project.png" alt="Project Logo" />
</p>

# Authentication API

## Introdução

[README em inglês](../../README.md).

Todo

- todo.

### Regras de negócio e requisitos do projeto

Com o intuito de deixar esse documento o mais limpo possível, as regras de negócio e requisitos foram detalhadas nos arquivos abaixo.

- [Regras de negócio.](./business-rules.md)
- [Requisitos de projeto.](./project-requirements.md)

### Stacks

As tecnologias utilizada para esse projeto foram:

- [NestJS framework.](https://nestjs.com/)
  - [Typescript.](https://www.typescriptlang.org/)
  - [Express.](https://expressjs.com/)
  - Testes: [PactumJS.](https://pactumjs.github.io/) 
- [Prisma ORM.](https://www.prisma.io/docs/getting-started/quickstart)
- [ProstgreSQL.](https://www.postgresql.org/)
- [Docker.](https://www.docker.com/)
- [OMDb API - The Open Movie Database](http://omdbapi.com/)

## Instalação

### Pré-instalação

Para rodar esse projeto será necessário o [Docker.](https://www.docker.com/) e a [api de autenticação](https://github.com/guilhermag/lc-movie-review-auth) que é usada para confirmar o login do usuário, dessa forma para que o projeto funcione corretamente é necessário:

- Auth API rodando na porta: 3000(padrão).
  - É possível mudar as portas padrões, apenas se certifique de alterar nos arquivos do projeto.
  - A instalação da Auth API é documentada no seu respectivo repositório.
- Docker rodando no background com um Postgres container, mais isntruções posteriormente.
  - É possível não utiliza o docker, só se certifique de colocar o link correto para o db no arquivo ```.env```.

Para criar o banco de dados com o docker apenas clone o repositório, vá para  a sua pasta e rode o o arquivo ```docker-compose.yml```.

### Instalação do projeto

```bash
# clones o rep
$ git clone https://github.com/guilhermag/lc-movie-review-api.git
$ cd lc-movie-review-api/

# cria o database
$ npm run db:dev:up

# instala todas as dependências
$ npm install

# script usado para reiniciar o banco de dados e rodar todas as migrations do prisma
$ npm run db:dev:restart
```

## Execução do projeto

### Pré-configuração

Para rodar esse app é preciso configurar as variáveis de ambiente utilizadas no projeto pelo arquivo ```.env```.

```bash
# sua url de coneção com o banco de dados
DATABASE_URL="postgresql://USER:PASSWORD@HOST:PORT/DATABASE"

# seu segredo jwt, precisar ser o mesmo utilizado na Auth Api
JWT_SECRET="your-jwt-secret"

# a sua api key para conseguir fazer requisições para a ombd api
API_KEY_OMDB="your-api-key"
```

Na para raiz existe um arquivo ```.env.example``` ele serve como um exemplo/modelo, é possível criar um novo ```.env```  ou simplesmente renomear o arquivo ```.env.example```, e preenchê-lo com as suas variáveis de ambiente.

O projeto foi configurado para rodar na porta 3333, logo todos os endpoinst estarão locarizados em ```http://localhost:3333/...```.


### Rodando o app

```bash
# development
$ npm run start

# watch mode
$ npm run start:dev
```

### Documentação

O Swagger foi utilizado para documentar essa API, então toda a informação do app pode ser encontrada no [Swagger endpoint (/api-docs/)](http://localhost:3333/api-docs/).

## Testes

Para esse app foram feitos apenas os testes e2e, eles podem ser acessados com os seguintes comandos.

```bash
# e2e tests
$ npm run test:e2e
```

Todos os outros scripts possíveis de serem utilizados com ```npm run ...``` podem ser encontrados no ```packge.json```.

## Contato

- Autor - Guilherme de Araujo Gabriel
- Email - [guilhermag@gmail.com](guilhermag@gmail.com)
- Github - [@guilhermag](https://github.com/guilhermag)
- LinkedIn - [Guilherme Gabriel](https://www.linkedin.com/in/guilherme-gabriel-22961610a/)
