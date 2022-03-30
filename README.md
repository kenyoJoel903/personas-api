
## Description

[Nest](https://github.com/nestjs/nest) framework TypeScript starter repository.

## Creación de proyecto
```bash
$ nest new persona-api
$ npm install --save aws-sdk
$ npm install --save @nestjs/swagger swagger-ui-express
$ npm i --save aws-lambda
$ npm i --save aws-serverless-express
$ npm i --save serverless-postgres
```

## Configuracion
```bash
$ nest generate module journey/personasJo --no-spec
$ nest generate controller journey/personasJo --no-spec
$ nest generate service journey/personasJo --no-spec

$ nest generate module business/personasBs --no-spec
$ nest generate service business/personasBs --no-spec

$ nest generate module core/personasCo --no-spec
$ nest generate service core/personasCo --no-spec
```

## Iniciar en local
```bash
nest start
```
[swagger] (http://localhost:3000/api/)

## Installation

```bash
$ npm install
$ npm run build
$ npm prune --production
$ zip -r deploy/app.zip dist/ node_modules


$ sam deploy --guided --profile tranzfer-dev
```

## Running the app

```bash
# development
$ nest start

```


## License

Nest is [MIT licensed](LICENSE).
