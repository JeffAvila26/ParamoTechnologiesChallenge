import CommonPage  from '../../../support/pageObjects/CommonPage';
import UserProfileSettings  from '../../../support/pageObjects/UserProfileSettings';
import {selectGenderProfileSetting,getValidDate,typeFullLoginName} from '../../../support/actions.js'

describe('TestSet-5678: User profile',{ testIsolation: false }, () => {
  beforeEach(() => {
    /* Enrollment User and then should be redirected to main view page. */
    cy.authenticate();

    /*Login user, this function validate that session is active or not, if the session is not active should be redirected to login view, else 
    should be redirect to main view page */
   // cy.login();

  });

  /*test case format: Project-number test case: Summary test case */
  it('TestCase-1111: Update profile', () => {
    /** As a user i want to update my personal data profile */
    //Click on profile button
    CommonPage.getProfileCTA().should('be.visible').click()
    //Click on profile settings button
    UserProfileSettings.getProfileSettingsCTA().should('be.visible').click()
    //type full name
    typeFullLoginName()
    //Select gender on dropdown
    selectGenderProfileSetting();
    //Validate that username is visible
    UserProfileSettings.getUserNameInput().should('be.visible')
    //Validate that nickname is visible
    UserProfileSettings.getNicknameInput().should('be.visible')
    //Put a valid birthdate
    getValidDate()
    //Click on submit button
    UserProfileSettings.getSubmitCTA().should('be.visible').click()




  })

})