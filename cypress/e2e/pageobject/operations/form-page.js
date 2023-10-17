import { formPageLocator } from "../locator/locator";

export class FormPageOperations {
    addNewRecord() {
        formPageLocator.elements.addNewRecordBtn().click();
    }
    enterDetails(firstName, lastName, email, age, salary, department) {
        formPageLocator.elements.firstName().click().clear().type(firstName);
        formPageLocator.elements.lastName().click().clear().type(lastName);
        formPageLocator.elements.userEmail().click().clear().type(email);
        cy.wait(3000);
        formPageLocator.elements.age().click().clear().type(age);
        formPageLocator.elements.salary().click().clear().type(salary);
        formPageLocator.elements.department().click().clear().type(department);
    }
    submit(){
        formPageLocator.elements.submitBtn().click()
    }
    editRecord(record) {
        formPageLocator.elements.editBtn(record).click();
    }
    deletRecord(record) {
        formPageLocator.elements.deletBtn(record).click();
    }
}
export const formPageOperations = new FormPageOperations;