import { formPageOperations } from "./PageObject/operations/form-page";
import { formPageAssertion } from "./pageobject/Assertion/form-page.assert";

describe('Table Data Entry Test', () => {

    it('should enter new data into the table', () => {
      cy.visit("https://demoqa.com/webtables");
      formPageOperations.addNewRecord();
      formPageOperations.enterDetails('Tamoor', 'Arif', 'tamoor.arif@ceative.co.uk', 22, 500000, 'QA');
      formPageAssertion.AssertEnteredDetails();
      formPageOperations.submit();
      cy.wait(500);
      formPageOperations.editRecord(4);
      formPageOperations.enterDetails('or', 'if', 'tamoor.arif@ceative.co.uk', 232, 500000, 'QA');
      formPageOperations.submit();
      formPageOperations.deletRecord(2)
      Cypress.on('uncaught:exception', (err, runnable) => {
        return false
      })
    });

});