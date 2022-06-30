<p align="center">
 <img src="./markdown/logo-project.png" alt="Project Logo" />
</p>

# Authentication API

## Introduction

[Portuguese README](./markdown/portuguese/README.md).

The goal of this project was create an API for authenticate an user, save the login attempts in cache and if the credential are right just send a authentication token.

### Business rules and requirements

With the goal of keeping this document clean, the business rules and requirements are detailed in the files above.

- [Business rules.](./markdown/english/business-rules.md)
- [Project requirements.](./markdown/english/project-requirements.md)

### Stacks

The technologies used on this project are:

- [NestJS framework.](https://nestjs.com/)
  - [Typescript.](https://www.typescriptlang.org/)
  - [Express.](https://expressjs.com/)
  - Testing: [PactumJS.](https://pactumjs.github.io/) 
- [Prisma ORM.](https://www.prisma.io/docs/getting-started/quickstart)
- [ProstgreSQL.](https://www.postgresql.org/)
- [Docker.](https://www.docker.com/)

## Installation

### Pre installation

To run this project you'll need [Docker.](https://www.docker.com/).

- Docker running in background with the Postgres container, instructions ahead.
  - It's possible not use docker, just make sure to put the correct db link on the ```.env``` file.

The Auth API doesn't creates new data just read it, so you just need the connection link with the db.

### Project installation

```bash
# clones the rep
$ git clone https://github.com/guilhermag/lc-movie-review-auth.git
$ cd lc-movie-review-auth/

# installing all the dependencies
$ npm install
```

## Project execution

### Pre configuration

To run this app is needed to config the environment variables in the ```.env``` file:

```bash
# your database url for connection
DATABASE_URL="postgresql://USER:PASSWORD@HOST:PORT/DATABASE"

# your jwt secret that must be the same on this app and in the authentication api
JWT_SECRET="your-jwt-secret"
```

In the root folder exists a file ```.env.example``` which serves as an example, it's possible to create a new ```.env``` or just rename the ```.env.example``` file, and fill with your environment variables.

The project is set to run on port 3000, so all the endpoints are located in the ```http://localhost:3333/...```.

### Running the app

```bash
# development
$ npm run start

# watch mode
$ npm run start:dev
```

### Documentation

Swagger was used to document the API, so all the app information can be found on the [Swagger endpoint (/api-docs/)](http://localhost:3000/api-docs/).

## Test

For this app just end to end test were made, they can be accessed with the following commands.

```bash
# e2e tests
$ npm run test:e2e
```

All the others scripts possibles te be used with ```npm run ...``` can be found in the ```package.json```.

## Stay in touch

- Author - Guilherme de Araujo Gabriel
- Email - [guilhermag@gmail.com](guilhermag@gmail.com)
- Github - [@guilhermag](https://github.com/guilhermag)
- LinkedIn - [Guilherme Gabriel](https://www.linkedin.com/in/guilherme-gabriel-22961610a/)
