class EnrollmentPage {

    /** Enrollment page view elements*/

    getEmailInput(){
        return '#core__protected_modules_user_yiiForm_RegistrationForm_email'
    }
    getTermsConditionsCB(){
        return cy.get('label[for="core__protected_modules_user_yiiForm_RegistrationForm_terms_and_conditions"]', {timeout: 10000})
    }
    getCurrencyDropdown(){
        return '.input__wrapper > .selectric-wrapper > .selectric > .label'
    }
    getPasswordInput(){
        return '#core__protected_modules_user_yiiForm_RegistrationForm_password'
    }
    getReenterPassInput(){
        return '#core__protected_modules_user_yiiForm_RegistrationForm_password_confirmation'
    }
    getNoBonus(){
        return '#bonus-0'
    }
    getSubmitCTA(){
        return cy.get('[data-test="control-submit"]', {timeout: 10000})
    }
    getBrowseGamesCTA(){
        return cy.get('.button--t4', {timeout: 10000})
    }
    

}
export default new EnrollmentPage();