// class textbox{
//     elements={
//         Elements : ()=> cy.get('.category-cards > :nth-child(1)'),
//         textBox:()=>cy.get(':nth-child(1) > .element-list > .menu-list > #item-0'),
//         username:()=>cy.get('#userName'),
//         currentAddress:()=>cy.get('#current-address')
//     }
// }
// export const locatorstextbox = new textbox;


class FormPage {
    elements = {
        addNewRecordBtn: () => cy.get('#addNewRecordButton'),
        firstName: () => cy.get('#firstName'),
        lastName: () => cy.get('#lastName'),
        userEmail: () => cy.get('#userEmail'),
        age: () => cy.get('#age'),
        salary: () => cy.get('#salary'),
        department: () => cy.get('#department'),
        submitBtn: () => cy.get('#submit'),
        editBtn: (record) => cy.get('#edit-record-' + record),
        deletBtn:(record)=>cy.get("#delete-record-"+record),
    }
}

export const formPageLocator = new FormPage;