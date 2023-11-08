import { formPageLocator } from "../locator/locator";

export class FormPageAssertion {
   
    AssertEnteredDetails(firstName, lastName, email, age, salary, department) {
        formPageLocator.elements.firstName().should('have.value', 'Tamoor')
        formPageLocator.elements.lastName().should('have.value', 'Arif')
        formPageLocator.elements.userEmail().should('have.value', 'tamoor.arif@ceative.co.uk')
        formPageLocator.elements.age().should('have.value', '22')
        formPageLocator.elements.salary().should('have.value', '500000')
        formPageLocator.elements.department().should('have.value', 'QA')
        
    }
   
}
export const formPageAssertion  = new FormPageAssertion ;