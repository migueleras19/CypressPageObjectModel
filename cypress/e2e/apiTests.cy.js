import { faker } from '@faker-js/faker';

describe("Pruebas de Registro y Login en la API de Demoblaze", () => {
    let newUser;

    before(() => {
        newUser = {
            username: faker.internet.userName(),
            password: faker.internet.password()
        };

        // Crear un usuario para pruebas de login incorrecto
        cy.request({
            method: 'POST',
            url: "https://api.demoblaze.com/signup",
            body: {
                username: 'miguelAPItest',
                password: 'correctPassword123', // Contraseña correcta que usaremos en otra prueba
            },
            failOnStatusCode: false // Permitir que no falle si el usuario ya existe
        }).then((response) => {
            cy.log(`Usuario de prueba creado: miguelAPItest`);
        });

        // Crear el nuevo usuario dinámico para pruebas
        cy.request({
            method: 'POST',
            url: "https://api.demoblaze.com/signup",
            body: {
                username: newUser.username,
                password: newUser.password,
            },
        }).then((response) => {
            expect(response.status).to.eq(200);
            cy.log(`Usuario creado: ${JSON.stringify(newUser)}`);
        });
    });

    it('Intentar crear un usuario ya existente', () => {
        cy.request({
            method: 'POST',
            url: "https://api.demoblaze.com/signup",
            body: {
                username: 'pruebasAPI',
                password: 'pruebasAPI',
            },
        }).as('signupExistentUser');

        cy.get('@signupExistentUser').then((response) => {
            expect(response.status).to.eq(200);
            expect(response.body).to.have.property("errorMessage");
            expect(response.body.errorMessage).to.eq("This user already exist.");
        });
    });

    it('Crear un nuevo usuario en signup', () => {
        cy.request({
            method: 'POST',
            url: "https://api.demoblaze.com/signup",
            body: {
                username: newUser.username,
                password: newUser.password,
            },
        }).as('signupNewUser');

        cy.get('@signupNewUser').then((response) => {
            expect(response.status).to.eq(200);
            cy.log(`Respuesta: ${JSON.stringify(response.body)}`);
        });
    });

    it('Usuario y password correcto en login', () => {
        cy.request({
            method: 'POST',
            url: "https://api.demoblaze.com/login",
            body: {
                username: newUser.username,
                password: newUser.password,
            },
        }).as('loginCorrect');

        cy.get('@loginCorrect').then((response) => {
            cy.log(JSON.stringify(response.body));
            expect(response.status).to.eq(200);

            if (typeof response.body === "string" && response.body.includes("Auth_token")) {
                expect(response.body).to.contain("Auth_token");
            } else {
                expect(response.body).to.have.property("Auth_token");
            }
        });
    });

    it('Usuario y password incorrecto en login', () => {
        cy.request({
            method: 'POST',
            url: "https://api.demoblaze.com/login",
            body: {
                username: 'miguelAPItest',
                password: 'incorrectPassword123', // Contraseña incorrecta
            },
        }).as('loginIncorrect');

        cy.get('@loginIncorrect').then((response) => {
            expect(response.status).to.eq(200);
            expect(response.body).to.have.property("errorMessage");
            expect(response.body.errorMessage).to.eq("Wrong password.");
        });
    });
});
