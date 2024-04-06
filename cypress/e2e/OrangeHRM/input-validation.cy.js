/// <reference types ="cypress" />

import Authentication from "./auth"
import DataLog from "./Data-myinfo"
describe( 'MyInfo Form Validation (Required Fields, Formats)  ', ()=>{
beforeEach('', ()=>{
cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
})


//PERSONAL DETAILS MODULE//
it(' Ensures that users can submit valid credentials of their personal details ', ()=>{
    cy.wait(4000)
    Authentication.elements.userNameField().type('Admin')
    Authentication.elements.passwordField().type('admin123')
    Authentication.elements.loginButton().click()
    DataLog.elements.myinfoTab().click()
    DataLog.elements.fNameField().clear()
    DataLog.elements.fNameField().type('David')
    DataLog.elements.mNameField().clear()
    DataLog.elements.mNameField().type('Peter')
    DataLog.elements.lNameField().clear()
    DataLog.elements.lNameField().type('oloche')
    DataLog.elements.employeeIdField().clear()
    DataLog.elements.employeeIdField().type('David')
    DataLog.elements.otherIdField().clear()
    DataLog.elements.otherIdField().type('4957589 ')
    DataLog.elements.dlicenseNoField().clear()
    DataLog.elements.dlicenseNoField().type('56788GJ567890')
    //DataLog.elements.licenseExpDateField().clear()
    //DataLog.elements.licenseExpDateField().type('2024-30-10')
    DataLog.elements.genderF().click()
    DataLog.elements.saveBtn().click()
    cy.wait(2000)
    DataLog.elements.successPopUp().should('be.visible')
})


it(' Ensures that users is unable to submit invalid credentials  ', ()=>{
    cy.wait(4000)
    Authentication.elements.userNameField().type('Admin')
    Authentication.elements.passwordField().type('admin123')
    Authentication.elements.loginButton().click()
    DataLog.elements.myinfoTab().click()
    DataLog.elements.fNameField().clear()
    DataLog.elements.fNameField().type('D|6=id')
    DataLog.elements.mNameField().clear()
    DataLog.elements.mNameField().type('P-=kn')
    DataLog.elements.lNameField().clear()
    DataLog.elements.lNameField().type('oloche')
    DataLog.elements.employeeIdField().clear()
    DataLog.elements.employeeIdField().type('David')
    DataLog.elements.otherIdField().clear()
    DataLog.elements.otherIdField().type('49573t432%jdi3 ')
    DataLog.elements.dlicenseNoField().clear()
    DataLog.elements.dlicenseNoField().type('5678)_($*(")!890')
    //DataLog.elements.licenseExpDateField().clear()
    //DataLog.elements.licenseExpDateField().type('2024-30-10')
    DataLog.elements.genderF().click()
    DataLog.elements.saveBtn().click()
    cy.wait(1000)
    DataLog.elements.successPopUp().should('not.include', 'successful')
})

})