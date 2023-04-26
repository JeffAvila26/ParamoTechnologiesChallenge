class UserProfileSettings{

    /** User profile page view elements */

    getProfileSettingsCTA(){
        return cy.get('.active > .profile-menu__item-link', {timeout: 10000})
    }
    getNameInput(){
        return cy.get('[data-test="input-name"]', {timeout: 10000})
    }
    getSurnameInput(){
        return cy.get('[data-test="input-surname"]', {timeout: 10000})
    }
    getMiddleNameInput(){
        return cy.get('[data-test="input-middle_name"]', {timeout: 10000})
    }
    getGenderDropdown(){
        return cy.get(':nth-child(4) > .input__wrapper > .selectric-wrapper > .selectric > .label', {timeout: 10000})
    }
    getGenderOptionMock(){
        return cy.get(':nth-child(4) > .input__wrapper > .selectric-wrapper > .selectric-items > .selectric-scroll > ul > [data-index="2"]')
    }
    getUserNameInput(){
        return cy.get('[data-test="input-username"]', {timeout: 10000})
    }
    getNicknameInput(){
        return cy.get('[data-test="input-nickname"]', {timeout: 10000})
    }
    getBirthdateInput(){
        return cy.get('[data-test="input-birthdate"]', {timeout: 10000})
    }
    getSubmitCTA(){
        return cy.get('[data-test="form-profile-personal"] > .profile-info__form-button > [data-test="control-submit"]')

    }
    getBirthdateTitleYear() {
        return cy.get('.datepicker--nav-title', {timeout:10000})
    }
    getPrevArrowDate(){
        return cy.get('div[data-action="prev"]', {timeout: 10000})
    }
    getMonthMock(){
        return cy.get('div[data-month="1"]', {timeout: 10000})
    }
    getFullDateMock(year){
        return cy.get(`[data-date="7"][data-month="1"][data-year="${year}"]`, {timeout: 10000})
    }
}
export default new UserProfileSettings();