import EnrollmentPage  from '../support/pageObjects/EnrollmentPage';
import CommonPage  from '../support/pageObjects/CommonPage';
import LoginPage  from '../support/pageObjects/LoginPage';
import {typeEmailRegistration,currencyDropdownRegistration,typeAndConfirmPassword} from '../support/actions.js'

//Command to enroll user
Cypress.Commands.add("authenticate", () => {
    cy.session("MySession", () => {
      cy.visit(Cypress.env("url"),{failOnStatusCode:false})
      CommonPage.getGotItCTA().should('be.visible').click()
      typeEmailRegistration()
      EnrollmentPage.getTermsConditionsCB().should('be.visible').click()
      currencyDropdownRegistration()
      typeAndConfirmPassword()
      EnrollmentPage.getSubmitCTA().click()
      EnrollmentPage.getBrowseGamesCTA().click()
    })  
  })

  //Command to login user
Cypress.Commands.add("login", () => {
    cy.getCookie('PHPSESSID').then((cookie) => {
      if (cookie) {
        cy.visit(Cypress.env('url_gamePage'))
        cy.wait(3000)
      } else {
        cy.session("MySession", () => {
        cy.visit(Cypress.env("url_login"),{failOnStatusCode:false})
        CommonPage.getGotItCTA().should('be.visible').click()
        LoginPage.getUsernameInput().should('be.visible').type(Cypress.env("username"))
        LoginPage.getPasswordInput().should('be.visible').type(Cypress.env("password"))
        LoginPage.getSubmitCTA().should('be.visible').click()
        cy.wait(30000)
      })
  }
})

  })  
 
  
  //Command to click on submit button and validate that all field are filled.
  Cypress.Commands.add('submitWhenAllFieldsAreFilled', () => {
    cy.get('#core__protected_modules_user_yiiForm_RegistrationForm_email', {timeout: 10000}).should('not.have.value', '').then(() => {
      cy.get('#core__protected_modules_user_yiiForm_RegistrationForm_password', {timeout: 10000}).should('not.have.value', '').then(() => {
        cy.get('#core__protected_modules_user_yiiForm_RegistrationForm_password_confirmation', {timeout: 10000}).then(() => {
          cy.get('[data-test="control-submit"]', {timeout: 10000}).should('be.visible').click()
      })
    })
  })
}) 

//I have been creating this function to use it in some tc I was planning to do on playgames. But it is incomplete
Cypress.Commands.add('getCanvasPosition', (selector) => {
  return cy.get(selector)
    .then($canvas => {
      const canvasRect = $canvas[0].getBoundingClientRect();
      return {
        x: canvasRect.x,
        y: canvasRect.y,
      };
    });
});

