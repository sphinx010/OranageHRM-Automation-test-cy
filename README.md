![Cypress Tests](https://img.shields.io/badge/Tests-Passing-brightgreen)
![License](https://img.shields.io/badge/license-MIT-blue)
# OrangeHRM Automation Testing with Cypress

This project is a comprehensive end-to-end test suite for the OrangeHRM Demo web application. It covers manual and automated tests of core modules such as Authentication, My Info, and Admin/User Management using Cypress.

## Overview

OrangeHRM is a human resource management system. This project demonstrates how to automate and manage a test suite for its demo platform, verifying both functional behavior and data integrity across modules.

## Technologies Used
- **Cypress** v13.7.0
- JavaScript (ES6)
- Microsoft Excel (manual test case documentation)
- Chrome Browser v123.0.6312.86
- Windows 10

## Test Coverage

### Authentication
- Login with valid/invalid credentials
- Password reset and update flow
- Logout verification

### My Info (Data Validation)
- Form validation on personal details, contact info, and emergency contacts
- Valid and invalid input types (names, phone, email, files)

### Admin/User Management
- Filtering users by various criteria
- Adding, updating, and deleting user profiles

## How to Run Tests

1. Clone this repository.
2. Install dependencies:
   ```bash
   npm install
   ```
3. Launch Cypress UI:
   ```bash
   npx cypress open
   ```
4. Select your test file from `cypress/e2e/` and run it.

## Folder Structure

```
cypress/
  â””â”€â”€ e2e/
      â”œâ”€â”€ auth.cy.js
      â”œâ”€â”€ myinfo.cy.js
      â””â”€â”€ admin.cy.js
```

## Author
Ayooluwa Paul Obembe
