// describe('template spec', () => {
//   it('clicks SVG elements', () => {
//     cy.visit("https://demoqa.com/")
//     cy.get(':nth-child(1) > :nth-child(1) > .card-up').click()
//     cy.get(':nth-child(1) > .element-list > .menu-list > #item-3').click()
//     cy.get('#addNewRecordButton').click()
//     cy.get('#firstName').click().type('Tamoor')
//     cy.get('#lastName').click().type('khan')
//     cy.get('#userEmail').click().type('tamoor@yopmail.com')
//     cy.wait(3000)
//     cy.get('#age').click().type('10')
//     cy.get('#salary').click().type('23')
//     cy.get('#department').click().type('QA')
//     cy.get('#submit').click()
//     Cypress.on('uncaught:exception', (err, runnable) => {
//       return false
//   })
//   })
// })
import FormsPage from "./page.cy";

 

describe('Table Data Entry Test', () => {

    const formsPage = new FormsPage();

    it('should enter new data into the table', () => {
      cy.visit("https://demoqa.com/webtables")

        formsPage.clickAddNewRecordButton();

        formsPage.enterFormDetails('Tamoor', 'Khan', 'tamoor@yopmail.com', '10', '23', 'QA');

        formsPage.submitForm();
        cy.url().should('eq', 'https://demoqa.com/webtables');
        Cypress.on('uncaught:exception', (err, runnable) => {
              return false
             })

    });

});