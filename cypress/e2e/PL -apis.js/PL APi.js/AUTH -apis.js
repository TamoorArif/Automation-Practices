// cypress/tests/api/api-users.spec.ts

describe("Testing Apis",function(){
    it("",()=>{
        Cy.request({
            method:"Get"
            url:"https://gateway-dev.personnellibrary.co.uk/api/performance#/"
            qs:"results=1"
        }).then((response)=>{
            expected(response.status).to.eq(200)
        }
    )

    })
})