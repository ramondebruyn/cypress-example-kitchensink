/* eslint-disable no-console */
/// <reference types="cypress-xpath" />
/// <reference types="cypress-downloadfile"/>

import qaElements from '../fixtures/qaElements.json'

context('find elements on pages', () => {
  it('check main page elements', () => {
    cy.visit('https://staging.starlightmusic.com')
    cy.get()
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
  })

  it('checks admin portal elements', () => {
    cy.visit('https://staging-starbridge.starlightmusic.com')
  })

  it('it checks client portal elements', () => {
  })
})
