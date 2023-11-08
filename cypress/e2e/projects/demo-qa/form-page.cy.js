import { formPageOperations } from "../../PageObject/operations/form-page";
import { formPageAssertion } from "./pageobject/Assertion/form-page.assert";

describe('Table Data Entry Test', () => {

    it('should enter new data into the table', () => {
      cy.visit("https://demoqa.com/webtables");
      formPageOperations.addNewRecord();
      cy.fixture('form-details').then((data) => {
        formPageOperations.enterDetails(data);
      })
      formPageAssertion.AssertEnteredDetails();
      formPageOperations.submit();
      cy.wait(500);
      formPageOperations.editRecord(4);
      cy.fixture('edit-form-details').then((data) => {
        formPageOperations.enterDetails(data);
      })
      formPageOperations.submit();
      formPageOperations.deletRecord(2)
      Cypress.on('uncaught:exception', (err, runnable) => {
        return false
      })
    });

});