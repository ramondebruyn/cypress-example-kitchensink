/* eslint-disable no-console */
/// <reference types="cypress-xpath" />
// const { before } = require("cypress/types/lodash")

// const { it } = require("mocha")
// const myVar = undefined;

import credentials from '../fixtures/credentials.json'
const accountSid = credentials.TWILIO_ACCOUNT_SID
const authToken = credentials.TWILIO_AUTH_TOKEN
// eslint-disable-next-line no-unused-vars
const client = require('twilio')(accountSid, authToken)

context('Contact Us Test', () => {
  it('can contact us', () => {
    cy.visit('https://staging.starlightmusic.com/contact-us')
    cy.get('.col-md-6:nth-child(1) > .form-control').click({ force: true })
    cy.get('.col-md-6:nth-child(1) > .form-control').type('Bruce')
    cy.get('.row:nth-child(3) > .col-md-6:nth-child(2) > .form-control').click({ force: true })
    cy.get('.row:nth-child(3) > .col-md-6:nth-child(2) > .form-control').type('Wayne')
    cy.get('.react-tel-input > .form-control').click({ force: true })
    cy.get('.react-tel-input > .form-control').type('(804) 406-4234')
    cy.get('.mt-3 > .col-md-6 > .form-control').click({ force: true })
    cy.get('.mt-3 > .col-md-6 > .form-control').type('bwayne.dl0@gmail.com')
    cy.get(':nth-child(6) > :nth-child(1) > .ant-picker > .ant-picker-input > input').click({ force: true })
    cy.get(':nth-child(6) > :nth-child(1) > .ant-picker > .ant-picker-input > input').type('09/09/2029')
    cy.get(':nth-child(6) > :nth-child(1) > .ant-picker > .ant-picker-input > input').type('Cypress.io{enter}')
    cy.get(':nth-child(6) > :nth-child(2) > .form-control').click({ force: true })
    cy.get(':nth-child(6) > :nth-child(2) > .form-control').type('Weylin, Broadway, Brooklyn, NY, USA')
    cy.get(':nth-child(6) > :nth-child(2) > .form-control').type('Cypress.io{enter}')
    cy.get('#rc_select_1').click({ force: true })
    cy.get('.ant-select-item-option-active > .ant-select-item-option-content').click({ force: true })
    cy.findByPlaceholderText('Message').type('Test message', { force: true }).should('have.value', 'Test message')
    cy.wait(2000)
    cy.wait(0)
    cy.get('.contact-us-submit-btn').click({ force: true }) // this is not working
    cy.get('.cnt_success_subheading > span').should('exist')

    // still need to verify
  })
})
