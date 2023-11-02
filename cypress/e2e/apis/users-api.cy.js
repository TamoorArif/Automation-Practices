// cypress/tests/api/api-users.spec.ts

describe("Testing Apis", function () {
    
    it("200 Success Response", () => {
        cy.request({
            method: "PUT",
            url: 'https://gateway-dev.personnellibrary.co.uk/auth/signin',
            body: {
                "email": "PLadmin@yopmail.com",
                "password": "PLib$$786"
            },
            failOnStatusCode: false
        }).then((response) => {
            expect(response.status).to.eq(200);
        }
        )
    })

    it("400 Failure Response", () => {
        cy.request({
            method: "PUT",
            url: 'https://gateway-dev.personnellibrary.co.uk/auth/signin',
            body: {
                "email": "PLadmin@yopmai",
                "password": "PLib$$78"
            },
            failOnStatusCode: false
        }).then((response) => {
            expect(response.status).to.eq(400);
        }
        )

    })

    it("401 Success Response", () => {
        cy.request({
            method: "PUT",
            url: 'https://gateway-dev.personnellibrary.co.uk/auth/signin',
            body: {
                "email": "PLadmin@yopmail.com",
                "password": "PLib$$78"
            },
            failOnStatusCode: false
        }).then((response) => {
            expect(response.status).to.eq(401);
        }
        )

    })
})