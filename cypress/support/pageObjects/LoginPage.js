class LoginPage{

    /** Login page view elements */

    getUsernameInput(){
        return cy.get('[data-test="input-username"]', {timeout:10000})
    }
    getPasswordInput(){
        return cy.get('[data-test="input-password"]', {timeout:10000})
    }
    getSubmitCTA(){
        return cy.get('[data-test="control-submit"]', {timeout:10000})
    }
}
export default new LoginPage();