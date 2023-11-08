// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })

Cypress.Commands.add('signin', (userType, options = {}) => {
    const types = {
        admin: {
            email: 'super_admin@yopmail.com',
            password: 'PLib$$786'
        },
        user: {
            email: 'PLadmin@yopmail.com',
            password: 'PLib$$786'
        },
    }
    const user = types[userType]
    cy.request({
        url: 'https://gateway-dev.personnellibrary.co.uk/auth/signin',
        method: 'PUT',
        body: user,
        failOnStatusCode: false
    })
        .its('body')
        .then((body) => {
            return `Bearer ${body.data.authToken}`;
        })

});

Cypress.Commands.add("signout", (authToken) => {
    if (!authToken) {
        cy.log("No authentication token found. Make sure to sign in first.");
        return;
    }

    cy.request({
        method: "PUT",
        url: 'https://gateway-dev.personnellibrary.co.uk/auth/signout',
        headers: {
            Authorization: authToken,
        },
        failOnStatusCode: false
    }).then((response) => {
        expect(response.status).to.eq(202);
    });
});