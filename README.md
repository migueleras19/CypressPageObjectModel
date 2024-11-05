# Test_E2E_and_API

Este proyecto contiene pruebas End-to-End (E2E) y pruebas de API utilizando Cypress para la aplicación SauceDemo y la API de Demoblaze.

**Autor:** Miguel Eras  
**Framework:** Cypress v13.15.1  
**Versión de Node:** v20.16.0  

#### Descripción
Esta es una PoC construida para un test técnico para aplicar a una oferta de trabajo de QA Assurance.

## Comenzando
- Clona el repositorio o descarga el .zip: `git clone https://gitlab.com/migueleras19/test_e2e_and_api.git`
- Navega al directorio del proyecto: `cd test_e2e_and_api`
- Instala las dependencias: `npm install`
- Instala Cypress: `npm install cypress --save-dev`
- Instala Faker: `npm install --save-dev @faker-js/faker`
- Instala Cypress XPath: `npm install -D cypress-xpath`

## Ejecutar el Proyecto
- Ejecutar todas las pruebas: `npx cypress run --spec cypress/e2e/saucedemo.cy.js`
- Ejecutar pruebas de API: `npx cypress run --spec cypress/e2e/apiTests.cy.js`

## Modo de Ejecución Gráfico
- Abrir Cypress en modo interactivo: `npx cypress open`

## Estructura del Proyecto

- `cypress/e2e/`: Contiene las pruebas E2E.
- `cypress/fixtures/`: Contiene los datos de prueba.
- `cypress/support/`: Contiene comandos y configuraciones adicionales.
- `cypress/page/`: Contiene las clases de página para la estructura de Page Object Model (POM).

## Estructura de Clases de Página

- `LoginPage.js`: Contiene métodos para interactuar con la página de inicio de sesión.
- `ProductsPage.js`: Contiene métodos para interactuar con la página de productos.
- `CartPage.js`: Contiene métodos para interactuar con la página del carrito.
- `CheckoutPage.js`: Contiene métodos para interactuar con la página de checkout.
- `ConfirmationPage.js`: Contiene métodos para interactuar con la página de confirmación.

