/* eslint-disable no-console */
/// <reference types="cypress-xpath" />
/// <reference types="cypress-downloadfile"/>

import qaElements from '../fixtures/qaElements.json'

context('find elements on pages', () => {
  it('check main page elements', () => {
    cy.visit('https://staging.starlightmusic.com')
    cy.get(qaElements.mainPage.browseBandsLinkId).should('exist')
    cy.get(qaElements.mainPage.meetTheTeamLinkId).should('exist')
    cy.get(qaElements.mainPage.loginSignupButtonId).should('exist')
    cy.get(qaElements.mainPage.contactUsLinkId).should('exist')
    cy.get(qaElements.mainPage.searchDateInputId).should('exist')
    cy.get(qaElements.mainPage.searchVenueInputId).should('exist')
    cy.get(qaElements.mainPage.searchEventInputId).should('exist')
    cy.get(qaElements.mainPage.runSearchButtonId).should('exist')
    cy.get(qaElements.mainPage.welcomeLinkId).should('exist')
  })

  it('check contact us page elements', () => {
    cy.visit('https://www.starlightmusic.com/contact-us')
    cy.get(qaElements.contactUsPage.configureThisBandLinkId).should('exist')
    cy.get(qaElements.contactUsPage.segmentsButtonId).should('exist')
    cy.get(qaElements.contactUsPage.stringsButtonId).should('exist')
    cy.get(qaElements.contactUsPage.travelButtonId).should('exist')
    cy.get(qaElements.contactUsPage.bandButtonId).should('exist')
    cy.get(qaElements.contactUsPage.extrasButtonId).should('exist')
    cy.get(qaElements.contactUsPage.totalPriceTextId).should('exist')
    cy.get(qaElements.contactUsPage.notesLinkId).should('exist')
    cy.get(qaElements.contactUsPage.nextItemButtonId).should('exist')
    cy.get(qaElements.contactUsPage.bookNowButtonId).should('exist')
    cy.get(qaElements.contactUsPage.faqQuestionLinkId).should('exist')
    cy.get(qaElements.contactUsPage.shareProposalLinkId).should('exist')
    cy.get(qaElements.contactUsPage.downloadProposalButtonId).should('exist')
    cy.get(qaElements.contactUsPage.saveProposalButtonId).should('exist')
  })

  it('check our talent page', () => {
    cy.visit('https://staging.starlightmusic.com/our-talent')
    cy.get(qaElements.searchBlade.bookADemoButtonId).should('exist').click()
    cy.get(qaElements.bookADemoModal1.fNameInputId).should('exist')
    cy.get(qaElements.bookADemoModal1.lNameInputId).should('exist')
    cy.get(qaElements.bookADemoModal1.phoneInputId).should('exist')
    cy.get(qaElements.bookADemoModal1.emailInputId).should('exist')
    cy.get(qaElements.bookADemoModal1.dateInputId).should('exist')
    cy.get(qaElements.bookADemoModal1.venueInputId).should('exist')
    cy.get(qaElements.bookADemoModal1.eventInputId).should('exist')
    cy.get(qaElements.bookADemoModal1.bookADemoNextButtonId).should('exist')
  })

  it('check band page elements', () => {
    cy.visit('https://www.starlightmusic.com/band/onyx-nyc-wedding-band')
    cy.get(qaElements.bandPage.configureThisBandLinkId).should('exist')
    cy.get(qaElements.bandPage.segmentsButtonId).should('exist')
    cy.get(qaElements.bandPage.stringsButtonId).should('exist')
    cy.get(qaElements.bandPage.travelButtonId).should('exist')
    cy.get(qaElements.bandPage.bandButtonId).should('exist')
    cy.get(qaElements.bandPage.extrasButtonId).should('exist')
    cy.get(qaElements.bandPage.totalPriceTextId).should('exist')
    cy.get(qaElements.bandPage.notesLinkId).should('exist')
    cy.get(qaElements.bandPage.nextItemButtonId).should('exist')
    cy.get(qaElements.bandPage.bookNowButtonId).should('exist')
    cy.get(qaElements.bandPage.faqQuestionLinkId).should('exist')
    cy.get(qaElements.bandPage.shareProposalLinkId).should('exist')
    cy.get(qaElements.bandPage.downloadProposalButtonId).should('exist')
    cy.get(qaElements.bandPage.saveProposalButtonId).should('exist')
  })

  it('checks admin portal elements', () => {
    cy.visit('https://staging-starbridge.starlightmusic.com')
    cy.get(qaElements.portal.superAdmin.navbar.dashboardLinkId).should('exist')
    cy.get(qaElements.portal.superAdmin.navbar.leadsLinkId).should('exist').click().then(() => {
      cy.get(qaElements.portal.superAdmin.leadsPage.fromDateInputId).should('exist')
      cy.get(qaElements.portal.superAdmin.leadsPage.toDateInputId).should('exist')
      cy.get(qaElements.portal.superAdmin.leadsPage.typeSelectDropdownId).should('exist')
      cy.get(qaElements.portal.superAdmin.leadsPage.searchInputFieldId).should('exist')
      cy.get(qaElements.portal.superAdmin.leadsPage.searchButtonId).should('exist')
      cy.get(qaElements.portal.superAdmin.leadsPage.bandSelectDropdownId).should('exist')
      cy.get(qaElements.portal.superAdmin.leadsPage.statusSelectDropdownId).should('exist')
    })

    cy.get(qaElements.portal.superAdmin.navbar.notificationLinkId).should('exist').click().then(() => {
      cy.get(qaElements.portal.superAdmin.navbar.notificationModalId).should('exist')
      cy.get(qaElements.portal.superAdmin.navbar.notificationModalTextId).should('exist')
    })

    cy.get(qaElements.portal.superAdmin.navbar.eventsLinkId).should('exist').click().then(() => {
      cy.get(qaElements.portal.superAdmin.navbar.subEventsLinkId).should('exist')
      cy.get(qaElements.portal.superAdmin.navbar.subContractsLinkId).should('exist')
    })
  })

  it('it checks client portal elements', () => {
    // visit client portal
    cy.visit(qaElements.client.navbar.savedProposalButtonId).should('exist')
  })
})
