# AngularKeycloak Sample Project

- [AngularKeycloak Sample Project](#angularkeycloak-sample-project)
  - [Development server](#development-server)
  - [Generate the API](#generate-the-api)
  - [Code scaffolding](#code-scaffolding)
  - [Build](#build)
  - [Prettier](#prettier)
  - [Running unit tests](#running-unit-tests)
  - [Running end-to-end tests](#running-end-to-end-tests)
  - [Further help](#further-help)
  - [Other Infos](#other-infos)

## Development server

Run `npm start` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Generate the API

To generate the API implementation use: `npm run generate-api-application-service`.

Make sure the [application service](../application-service/README.md) at `/application-service/` is running :)

## Code scaffolding

I set the schematics default to `@ngrx/schematics`!

See: <https://ngrx.io/guide/schematics>

The 'HelloResponse' feature was generated like this:

```bash
ng generate feature hello-response/HelloResponse --creators --module app --group --api --reducers ../reducers/index.ts



```

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `npm run build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `--prod` flag for a production build.

## Prettier

Run `npm run prettier` for code formatting via [prettier.io](https://prettier.io).

## Running unit tests

Run `npm run test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `npm run e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).

## Further help

* To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).

* https://ngrx.io/guide

* https://github.com/ngrx/platform 

## Other Infos

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 10.1.3 and [@ngrx/schematics](https://ngrx.io/guide) version 10.0.0.
