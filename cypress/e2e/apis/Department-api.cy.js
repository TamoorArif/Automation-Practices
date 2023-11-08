describe("Testing Apis", function () {
    let accessToken;
    before(() => {
        cy.signin('user').then((token) => {
            accessToken =  token;
        });
    })
    
    it("201 Success Response", () => {
        cy.request({
            method: "POST",
            url: 'https://gateway-dev.personnellibrary.co.uk/departments',
            headers: {
                Authorization: accessToken
            },
            body: {
                "departmentName": "Tamoor Der",
                "description": "api testing"
            },
            // failOnStatusCode: false
        }).then((response) => {
            expect(response.status).to.eq(201);
        });
    }); 

    after(() => {
        cy.signout(accessToken);
    })
});