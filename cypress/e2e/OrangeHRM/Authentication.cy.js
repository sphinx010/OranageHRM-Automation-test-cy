/// <reference types ="cypress" />

import Authentication from "./auth"

//Testing the authentication response of varied inputs instances, in the login section, updating user login credentials and testing the logout function.

describe('This block tests the authentication functionality of the application ', () => {

  beforeEach('sets the preconditions for each execution context', () =>{
    cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')

  })

  it(' Verifies successful login with valid credentials', () => {
    Authentication.elements.userNameField().type('Admin')
    Authentication.elements.passwordField().type('admin123')
    Authentication.elements.loginButton().click()

    cy.wait(4000)//sets  a 4s delay for page elements to be fully rendered

    Authentication.elements.profileIcon().should('be.visible')//Assertion for profile icon visibility, this helps to confirm a successful login attempt
  })

  it('Verifies unsuccessful login with invalid credentials', ()=>{
    Authentication.elements.userNameField().type('admin')
    Authentication.elements.passwordField().type('Admin456')
    Authentication.elements.loginButton().click()
    Authentication.elements.errorMessage().should('be.visible') //Asserts that error message is displayed, this confirms an unsuccessful login attempt
    Authentication.elements.userNameField().type('admin')
    Authentication.elements.passwordField().type('admin123')
    Authentication.elements.loginButton().click()
    Authentication.elements.errorMessage().should('be.visible') //Asserts that error message is displayed, this confirms an unsuccessful login attempt with credentials of similar username but different formatting
  })

  it('Ensures password reset is functional', ()=>{
   Authentication.elements.forgotPassword().click() 
   cy.wait(2000)
  cy.url().should('include', 'Reset') //Asserts that user is routed to the right endpoint to reset their password
  Authentication.elements.resetPasswordField().type('user42')
  Authentication.elements.resetButton().click()
  cy.contains('A reset password link has been sent to you via email.').should('be.visible')//Asserts that user has successfully executed password reset
  })

  it('Ensures that the change password feature is functional', ()=>{
    Authentication.elements.userNameField().type('Admin')
    Authentication.elements.passwordField().type('admin123')
    Authentication.elements.loginButton().click()
    Authentication.elements.profileIcon().click()
    Authentication.elements.changePasswordOptn().click()
    Authentication.elements.oldPasswordField().type('admin123')
    Authentication.elements.newPasswordField().type('admin456123')
    Authentication.elements.confirmPassField().type('admin456123')
    Authentication.elements.savePasswordBtn().click()
    cy.wait(2000)
    Authentication.elements.profileIcon().click()
    Authentication.elements.logOut().click()
    Authentication.elements.userNameField().type('Admin')
    Authentication.elements.passwordField().type('admin456123')
    Authentication.elements.loginButton().click()
    Authentication.elements.profileIcon().should('be.visible')
  })
  
  it('Ensures that users can logout after each session', ()=>{
    Authentication.elements.userNameField().type('Admin')
    Authentication.elements.passwordField().type('admin123')
    Authentication.elements.loginButton().click()
    Authentication.elements.profileIcon().click()
    cy.wait(2000)
    Authentication.elements.logOut().click()
    Authentication.elements.loginText().should('be.visible')//Assertion for successful logout
  })
})
