## 🛠 Techs

- **Web**

  - [React](https://reactjs.org/)
  - [Typescript](https://www.typescriptlang.org/)

- **Backend**
  - [Nodejs](https://nodejs.org/en/)
  - [Typescript](https://www.typescriptlang.org/)
  - [Express](https://expressjs.com/)
  - [Knexjs](http://knexjs.org/)

## ⚙ Instalação e Start

Para a execução deste projeto é necessário ter um _package manager_ instalado. Nas demonstraçoes abaixo é usado o [NPM](https://www.npmjs.com/) mas pode também usar [YARN](https://yarnpkg.com/).

Clone o repositório.

**Instalando dependências do projeto backend:**

```bash
> cd happy/backend
> npm install
```

Para executar o projeto **backend** é necessário criar a base de dados com todas as tabelas utilizadas, para isso, use no diretório correspondente:

```bash
> npx knex migrate:latest --knexfile knexfile.ts migrate:latest
> npm run start
```

**Instalando dependências do projeto web:**

```bash
> cd happy/web
> npm run install
```

Agora inicie o projeto em seu ambiente com:

```bash
> npm run start
```
