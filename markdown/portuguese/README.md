<p align="center">
 <img src="../logo-project.png" alt="Project Logo" />
</p>

# MovieReview API

## Introdução

[README em inglês](../../README.md).

O objetivo desse projeto foi criar uma api para autenticar um usuário, salvar as tentativas de login no cache e se as credenciais do usuário estiverem corretas enviar um token de autenticação.

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

## Instalação

### Pré-instalação

Para rodar esse projeto será necessário o [Docker.](https://www.docker.com/).

- Docker rodando no background com um Postgres container, mais isntruções posteriormente.
  - É possível não utilizar o docker, só se certifique de colocar o link correto para o db no arquivo ```.env```.

A Auth API não cria nenhum dado novo, apenas confere os dados do db.

### Instalação do projeto

```bash
# clona o rep
$ git clone https://github.com/guilhermag/lc-movie-review-auth.git
$ cd lc-movie-review-auth/

# instala todas as dependências
$ npm install
```

## Execução do projeto

### Pré-configuração

Para rodar esse app é preciso configurar as variáveis de ambiente utilizadas no projeto pelo arquivo ```.env```.

```bash
# sua url de coneção com o banco de dados
DATABASE_URL="postgresql://USER:PASSWORD@HOST:PORT/DATABASE"

# seu segredo jwt, precisar ser o mesmo utilizado na Auth Api
JWT_SECRET="your-jwt-secret"
```

Na para raiz existe um arquivo ```.env.example``` ele serve como um exemplo/modelo, é possível criar um novo ```.env```  ou simplesmente renomear o arquivo ```.env.example```, e preenchê-lo com as suas variáveis de ambiente.

O projeto foi configurado para rodar na porta 3000, logo todos os endpoinst estarão locarizados em ```http://localhost:3333/...```.


### Rodando o app

```bash
# development
$ npm run start

# watch mode
$ npm run start:dev
```

### Documentação

O Swagger foi utilizado para documentar essa API, então toda a informação do app pode ser encontrada no [Swagger endpoint (/api-docs/)](http://localhost:3000/api-docs/).

Todos os outros scripts possíveis de serem utilizados com ```npm run ...``` podem ser encontrados no ```package.json```.

## Contato

- Autor - Guilherme de Araujo Gabriel
- Email - [guilhermag@gmail.com](guilhermag@gmail.com)
- Github - [@guilhermag](https://github.com/guilhermag)
- LinkedIn - [Guilherme Gabriel](https://www.linkedin.com/in/guilherme-gabriel-22961610a/)
