
// object repository for page elements frequently interacted with
class Authentication {
    elements ={
        userNameField: ()=> cy.get(':nth-child(2) > .oxd-input-group > :nth-child(2) > .oxd-input'),
        passwordField: ()=> cy.get(':nth-child(3) > .oxd-input-group > :nth-child(2) > .oxd-input'),
        loginButton: () =>  cy.get('.oxd-button'),
        profileIcon: ()=> cy.get('.oxd-userdropdown-tab'),
        errorMessage: ()=> cy.contains('Invalid credentials'),
        forgotPassword: ()=> cy.get('.orangehrm-login-forgot > .oxd-text'),
        resetPasswordField: ()=> cy.get('.oxd-input'),
        resetButton: ()=> cy.get('.oxd-button--secondary'),
        confirmationMsg: ()=> cy.contains('A reset password link has been sent to you via email.'),
        changePasswordOptn: ()=> cy.get(':nth-child(3) > .oxd-userdropdown-link'),
        oldPasswordField: ()=> cy.get(':nth-child(1) > .oxd-grid-2 > :nth-child(2) > .oxd-input-group > :nth-child(2) > .oxd-input'),
        newPasswordField: ()=> cy.get('.user-password-cell > .oxd-input-group > :nth-child(2) > .oxd-input'),
        confirmPassField: ()=> cy.get('.user-password-row > .oxd-grid-2 > :nth-child(2) > .oxd-input-group > :nth-child(2) > .oxd-input'),
        savePasswordBtn: ()=> cy.get('.oxd-button--secondary'),
        logOut: ()=> cy.get(':nth-child(4) > .oxd-userdropdown-link'),
        loginText: ()=> cy.get('.oxd-text--h5'),
    }
}

//gives open access to objects in the repository
module.exports = new Authentication();