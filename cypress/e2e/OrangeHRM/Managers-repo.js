class Manage {
    element = {
        admin: ()=> cy.get(':nth-child(1) > .oxd-main-menu-item > .oxd-text'),
        adminAssert: ()=> cy.get('.--visited > .oxd-topbar-body-nav-tab-item'),
        userNamField: ()=> cy.get(':nth-child(2) > .oxd-input'),
        employeeNameFld: ()=> cy.get('.oxd-autocomplete-text-input > input'),
        searchButton: ()=> cy.get('.oxd-form-actions > .oxd-button--secondary'),
        addButton: ()=> cy.get('.orangehrm-header-container > .oxd-button'),
        searchResults: ()=> cy.get('.orangehrm-container'),
        editUserProf: ()=> cy.get(':nth-child(2) > .oxd-table-row > :nth-child(6) > .oxd-table-cell-actions > :nth-child(2) > .oxd-icon'),
        deleteUserProf: () => cy.get(':nth-child(2) > .oxd-table-row > :nth-child(6) > .oxd-table-cell-actions > :nth-child(1) > .oxd-icon'),
        empNameEditFld: ()=> cy.get('.oxd-autocomplete-text-input > input'),
        userNameEdFld: ()=> cy.get(':nth-child(2) > .oxd-input'),
        saveButton: ()=>cy.get('.oxd-button--secondary'),
        popUp: ()=> cy.get('.oxd-text--toast-title'),
    }
}

module.exports = new Manage();