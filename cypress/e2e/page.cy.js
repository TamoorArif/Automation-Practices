// // ///cypress pom
// // class loginpage
// // {
// //   visit(){
// //     Cy.visit("https://demoqa.com/")(
// //     cy.get('[xmlns="http://www.w3.org/2000/svg"]').click()
// //     cy.get('[xmlns="http://www.w3.org/2000/svg"]').click()

// //   }
// // }
// // class ElementsPage {
// //   visit() {
// //     cy.visit('https://demoqa.com/');
// //   }

// //   clickSvgElement() {
// //     cy.get(':nth-child(1) > :nth-child(1) > .card-up').click();
// //   }

// //   navigateToForms() {
// //     cy.get(':nth-child(1) > .element-list > .menu-list > #item-3').click();
// //   }
// // }

// export default new ElementsPage();
// formsPage.js (Page Object for the Forms page):


// class FormsPage {
//   clickAddNewRecordButton() {
//     cy.get('#addNewRecordButton').click();
//   }

//   enterFormDetails(firstName, lastName, email, age, salary, department) {
//     cy.get('#firstName').click().type(firstName);
//     cy.get('#lastName').click().type(lastName);
//     cy.get('#userEmail').click().type(email);
//     cy.wait(3000);
//     cy.get('#age').click().type(age);
//     cy.get('#salary').click().type(salary);
//     cy.get('#department').click().type(department);
//   }

//   submitForm() {
//     cy.get('#submit').click();
//   }
// }

// export default new FormsPage();
// table_data_entry.spec.js (Cypress test file using POM):


// import ElementsPage from './pageObjects/elementsPage';
// import FormsPage from './pageObjects/formsPage';

// describe('Table Data Entry Test', () => {
//   before(() => {
//     ElementsPage.visit();
//     ElementsPage.clickSvgElement();
//     ElementsPage.navigateToForms();
//   });

//   it('should enter new data into the table', () => {
//     FormsPage.clickAddNewRecordButton();
//     FormsPage.enterFormDetails('Tamoor', 'Khan', 'tamoor@yopmail.com', '10', '23', 'QA');
//     FormsPage.submitForm();
//   });
// });
// class FormsPage {
//   clickAddNewRecordButton() {
//     cy.get('#addNewRecordButton').click();
//   }

//   enterFormDetails(firstName, lastName, email, age, salary, department) {
//     cy.get('#firstName').click().type(firstName);
//     cy.get('#lastName').click().type(lastName);
//     cy.get('#userEmail').click().type(email);
//     cy.wait(3000);
//     cy.get('#age').click().type(age);
//     cy.get('#salary').click().type(salary);
//     cy.get('#department').click().type(department);
//   }

//   submitForm() {
//     cy.get('#submit').click();
//   }
// }

// export default new FormsPage();
// import ElementsPage from './pageObjects/elementsPage';
// import FormsPage from './pageObjects/formsPage';

// describe('Table Data Entry Test', () => {
//   before(() => {
//     ElementsPage.visit();
//     ElementsPage.clickSvgElement();
//     ElementsPage.navigateToForms();
//   });

//   it('should enter new data into the table', () => {
//     FormsPage.clickAddNewRecordButton();
//     FormsPage.enterFormDetails('Tamoor', 'Khan', 'tamoor@yopmail.com', '10', '23', 'QA');
//     FormsPage.submitForm();
//     cy.contains('tamoor@yopmail.com')
//   });
// });
class FormsPage {

  clickAddNewRecordButton() {

      cy.get('#addNewRecordButton').click();

  }

  enterFormDetails(firstName, lastName, email, age, salary, department) {

      cy.get('#firstName').click().type(firstName);

      cy.get('#lastName').click().type(lastName);

      cy.get('#userEmail').click().type(email);

      cy.wait(3000);

      cy.get('#age').click().type(age);

      cy.get('#salary').click().type(salary);

      cy.get('#department').click().type(department);

  }

  submitForm() {

      cy.get('#submit').click();

  }

}

export default FormsPage;




