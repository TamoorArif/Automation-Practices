describe("Testing Apis", function () {
    it("201 Success Response", () => {
        cy.request({
            method: "POST",
            url: 'https://gateway-dev.personnellibrary.co.uk/departments',
            body: {
                "departmentName": "Tamoor Der",
                "description": "api testing"
            },
            failOnStatusCode: false
        }).then((response) => {
            expect(response.status).to.eq(201);
        });
    }); 
}); 