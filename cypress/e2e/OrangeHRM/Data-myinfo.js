class DataLog {
    elements={
    myinfoTab: ()=> cy.get(':nth-child(6) > .oxd-main-menu-item > .oxd-text'),
    fNameField: ()=> cy.get('.--name-grouped-field > :nth-child(1) > :nth-child(2) > .oxd-input'),
    mNameField:()=>cy.get(':nth-child(2) > :nth-child(2) > .oxd-input'),
    lNameField:()=> cy.get(':nth-child(3) > :nth-child(2) > .oxd-input'),
    employeeIdField: ()=> cy.get(':nth-child(1) > :nth-child(1) > .oxd-input-group > :nth-child(2) > .oxd-input') ,
    otherIdField: ()=> cy.get(':nth-child(3) > :nth-child(1) > :nth-child(2) > .oxd-input-group > :nth-child(2) > .oxd-input'),
    dlicenseNoField: ()=>cy.get(':nth-child(2) > :nth-child(1) > .oxd-input-group > :nth-child(2) > .oxd-input'),
    licenseExpDateField: ()=> cy.get(':nth-child(2) > .oxd-input-group > :nth-child(2) > .oxd-date-wrapper > .oxd-date-input > .oxd-input'), 
    dateOfBirthField: ()=> cy.get(':nth-child(1) > .oxd-input-group > :nth-child(2) > .oxd-date-wrapper > .oxd-date-input > .oxd-input'),
    genderF: ()=> cy.get(':nth-child(2) > :nth-child(2) > .oxd-radio-wrapper > label'),
    saveBtn: ()=> cy.get(':nth-child(1) > .oxd-form > .oxd-form-actions > .oxd-button'),
    successPopUp: ()=> cy.get('.oxd-text--toast-title'),
   
}}
//gives open access to objects in the repository
module.exports = new DataLog();