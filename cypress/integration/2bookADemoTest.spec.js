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

context('Book a Demo Test', () => {
  it('can book a demo', async function () {
    cy.viewport(1920, 976)
    cy.visit('https://staging.starlightmusic.com/')
    // cy.get('.d-flex > .w-100 > .navbar > .w-100 > .Header_nav_link__3qapQ:nth-child(2)').click()
    cy.get('a').eq(1).should('have.attr', 'href', '/our-talent').dblclick({ force: true })
    cy.wait(0)
    cy.get('div > .align-items-center').eq(7).should('contains.text', 'Book a Demo').dblclick({ force: true })
    cy.wait(2000)
    cy.get('.Header_book_demo__CqqVI').click()
    cy.get('.col:nth-child(1) > .form-control').click()
    cy.get('.col:nth-child(1) > .form-control').type('Bruce')
    cy.get('.row:nth-child(2) > .col:nth-child(2) > .form-control').click()
    cy.get('.row:nth-child(2) > .col:nth-child(2) > .form-control').type('Wayne')
    cy.get('.react-tel-input > .form-control').click()
    cy.get('.react-tel-input > .form-control').type('(804) 406-4234')
    cy.get('.row:nth-child(3) > .col > .form-control').click()
    cy.get('.row:nth-child(3) > .col > .form-control').type('bbanner.dl@gmail.com')
    cy.get(':nth-child(4) > :nth-child(1) > .ant-picker > .ant-picker-input > input').click()
    cy.get('.ant-picker-focused').click()
    cy.get('.ant-picker-focused input').dblclick()
    cy.get('.ant-picker-focused input').click()
    cy.get('.col > .ant-picker input').type('09/09/2029')
    cy.get('.pac-target-input:nth-child(2)').click()
    cy.get('.pac-target-input:nth-child(2)').type('Weylin, Broadway, Brooklyn, NY, USA')
    cy.get('.pac-target-input:nth-child(2)').type('{enter}')
    cy.wait(0)
    cy.get('.book-a-demo-container').should('exist').within(() => {
      cy.get('.ant-select-selection-search-input').eq(0).click({ force: true })
      cy.wait(0)
      cy.get('.ant-select-selection-search-input').eq(0).type('{enter}', { force: true })
    })

    cy.wait(0)
    cy.get('.book-demo-next-btn').click()
    cy.get('.calendly-container').should('exist')
    cy.wait(30)
    cy.get('.LYc2_mbhXohr_BOepbm2').should('exist')

    // ...continue here to figure out how to test calendly
    // cy.get('.calendly-container').within(() => {
    //   cy.get('iframe').should('exist').within(() => {
    //     cy.get('div').should('exist')
    //   })
    // })
  })
})
