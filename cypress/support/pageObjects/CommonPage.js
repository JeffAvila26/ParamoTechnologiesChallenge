class CommonPage{
/** Commons elements  */
    getProfileCTA(){
        return cy.get('.mobile-bar--right > [href="/cabinet/profile/index"]', {timeout: 10000})
    }
    getGotItCTA(){
        return cy.get('.modal__buttons > .button--t1', {timeout: 10000})
    }
}

export default new CommonPage();