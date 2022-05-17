/* eslint-disable no-console */
/// <reference types="cypress-xpath" />
// const { before } = require("cypress/types/lodash")

// const { it } = require("mocha")
// const myVar = undefined;

import credentials from '../fixtures/credentials.json'
const accountSid = credentials.TWILIO_ACCOUNT_SID
const authToken = credentials.TWILIO_AUTH_TOKEN
const client = require('twilio')(accountSid, authToken)

context('Contact Us Test', () => {
  it('event planner can login', () => {
    cy.visit('https://staging.starlightmusic.com/')

    cy.xpath('//p[@class=\"Header_nav_section_profile_detail_welcomeText__Tl1wI\"]').then((value) => {
      const welcomeMessageCount = value.length()

      if (welcomeMessageCount === 0) {
        cy.xpath('//li[contains(.,\"Logout\")]').should('exist').click()
        cy.xpath('//p[contains(.,\"Welcome\")]').should('exist')
      }
    })

    cy.findAllByText('Login /Sign Up').first().should('contain.text', 'Login /Sign Up')
    cy.contains('Login /Sign Up').click()
    cy.get('*[data-test=\"user_name\"]').type('srogers.dl0@gmail.com')
    cy.get('*[data-test=\"password\"]').type('CaptainAmerica501!')
    cy.get('.Header_login_btn__2tigy').click()

    /// verify button and get otp here START /// UNCOMMENT WHEN RE-ACTIVATED
    cy.xpath('//button[contains(.,\"Verify\")]').should('exist').then((value) => {
      client.messages
        .list({ limit: 1 })
        .then((messages) => {
          return messages.forEach((m) => {
            const returnedNumber = m.body.match(/\d+/)[0]

            cy.wrap(returnedNumber).as('userOtp0')
          })
        })
    })
    /// get otp here END ///

    cy.xpath('//button[contains(.,\"Verify\")]').should('exist')
    cy.get('@userOtp0').then((value) => {
      const otpArray = value.split('')
      const otpDigit1 = otpArray[0]
      const otpDigit2 = otpArray[1]
      const otpDigit3 = otpArray[2]
      const otpDigit4 = otpArray[3]

      cy.wrap(otpDigit1).as('otpDigit1')
      cy.wrap(otpDigit2).as('otpDigit2')
      cy.wrap(otpDigit3).as('otpDigit3')
      cy.wrap(otpDigit4).as('otpDigit4')

      console.log('otpDigits: ', otpDigit1, ' -- ', otpDigit2, ' -- ', otpDigit3, ' -- ', otpDigit4)

      cy.get('.Header_otp_input_form__303Uy:nth-child(1) > input').type(otpDigit1)
      cy.get('.Header_otp_input_form__303Uy:nth-child(2) > input').type(otpDigit2)
      cy.get('.Header_otp_input_form__303Uy:nth-child(3) > input').type(otpDigit3)
      cy.get('.Header_otp_input_form__303Uy:nth-child(4) > input').type(otpDigit4)
    })

    cy.get('.Header_login_btn__2tigy:nth-child(2)').click()
    cy.xpath('//p[contains(.,\"Welcome\")]').should('contain.text', 'Welcome')
  })
})
