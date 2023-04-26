import EnrollmentPage  from './pageObjects/EnrollmentPage';
import UserProfileSettings  from './pageObjects/UserProfileSettings';

//type full name on profile
function typeFullLoginName(){
  UserProfileSettings.getNameInput().should('be.visible').type('Joel')
  UserProfileSettings.getSurnameInput().should('be.visible').type('Wood')
  UserProfileSettings.getMiddleNameInput().should('be.visible').type('Saint')
}

//type email on enrollment flow
function typeEmailRegistration() {
    cy.get(EnrollmentPage.getEmailInput()).type(Cypress.env("username"))
}

//Currency dropdown on enrollment flow
function currencyDropdownRegistration(){
    cy.get(EnrollmentPage.getCurrencyDropdown(), {timeout: 10000})
    .should('be.visible').click().then(() =>{
        cy.get('[data-index="2"]').click()
    })
}

//type and confirm password
function typeAndConfirmPassword() {
    cy.get(EnrollmentPage.getPasswordInput(), {timeout: 10000})
    .should('be.visible').type(Cypress.env("password")).then(() => {
        cy.get(EnrollmentPage.getReenterPassInput(), {timeout: 10000})
        .should('be.visible').type(Cypress.env("password"))
    })
}

//gender dropdown profile
function selectGenderProfileSetting() {
    UserProfileSettings.getGenderDropdown()
    .click().then(() =>{
      UserProfileSettings.getGenderOptionMock().click()
  })
}

//function to get 30 years before actual date, then will be used on getValidDate()
function getYearThirtyYearsAgo() {
    const currentDate = new Date();
    const thirtyYearsAgo = new Date(currentDate.getFullYear() - 30, currentDate.getMonth(), currentDate.getDate());
    const yearThirtyYearsAgo = thirtyYearsAgo.getFullYear();
    return yearThirtyYearsAgo;
  }

  //Put a valid nirthdate
  function getValidDate(){
    const year = getYearThirtyYearsAgo()
    let currentYear = 2005
    UserProfileSettings.getBirthdateInput().should('be.visible').click().then(() => {
        UserProfileSettings.getBirthdateTitleYear().should('be.visible').click()
        for(year; year <= currentYear; currentYear--){
            UserProfileSettings.getPrevArrowDate().should('be.visible').click()
          if(year == currentYear){
            UserProfileSettings.getMonthMock().should('be.visible').click() 
            UserProfileSettings.getFullDateMock(year-1).should('be.visible').click()
                        break;
 
          }
  
        }
      })
  }
  

  module.exports = {
    typeEmailRegistration,
    currencyDropdownRegistration,
    typeAndConfirmPassword,
    selectGenderProfileSetting,
    getYearThirtyYearsAgo,
    getValidDate,
    typeFullLoginName
  }