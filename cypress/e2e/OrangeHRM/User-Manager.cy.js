/// <reference types ="cypress" />

import Authentication from "./auth"
import Manage from "./Managers-repo"
 
describe('Tests for User management functionality ', ()=>{

before(' the tests , user should be logged in', ()=>{

    cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')

} )

/*it.only('enures that the user filter feature is functional',()=>{
    cy.wait(4000)
    Authentication.elements.userNameField().type('Admin')
    Authentication.elements.passwordField().type('admin123')
    Authentication.elements.loginButton().click()
    Manage.element.admin().click()
    cy.contains('User Management').should('be.visible')//Asserts that the right selection is made
   // Manage.element.userNamField().type('andrew')
    Manage.element.employeeNameFld().type('Qwerty LName')
    Manage.element.searchButton().click()
    Manage.element.searchResults().should('indlude', 'Qwerty LName')
})*/



it('ensures that user profiles can be updated',()=>{
cy.wait(4000)
Authentication.elements.userNameField().type('Admin')
Authentication.elements.passwordField().type('admin123')
Authentication.elements.loginButton().click()
Manage.element.admin().click()
Manage.element.editUserProf().click()
Manage.element.empNameEditFld().type('steve')
Manage.element.userNameEdFld().type('collins22')
Manage.element.saveButton().click()
cy.wait(1000)
Manage.element.popUp().should('be.visible')
Manage.element.userNamField().type('collins22')
Manage.element.searchButton().click()
cy.wait(1000)
Manage.element.searchResults().should('include','collins22')
})


it('verifies that existing user profiles can be deleted',()=>{
})


})
