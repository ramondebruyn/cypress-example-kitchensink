/* eslint-disable no-console */
/// <reference types="cypress-xpath" />
// const { before } = require("cypress/types/lodash")

// const { it } = require("mocha")
// const myVar = undefined;

import credentials from '../fixtures/credentials.json'
const accountSid = credentials.TWILIO_ACCOUNT_SID
const authToken = credentials.TWILIO_AUTH_TOKEN
const client = require('twilio')(accountSid, authToken)

context('Event Planner Signup Test', () => {
  it('event planner signup', () => {
    cy.visit('https://staging.starlightmusic.com/')
    cy.contains('Login / Signup').click()
    cy.get('#firstName').click()
    cy.get('#firstName').click()
    cy.get('#firstName').type('Bruce')
    cy.get('#lastName').type('Bruce')
    cy.get('.Header_input_section__1HbL7:nth-child(3) #user_email').type('bbanner.dl@gmail.com')
    cy.get('input[name=phone]').type('(518) 672-6861')
    cy.get('*[data-test=\"user_password\"]').type('TheHulk501!')
    cy.get('.Header_register_checkbox__2Grz-').click()
    cy.get('#companyName').type('Test Event Planner')
    cy.get('#companyLink').type('www.google.com')
    cy.get('.ms-auto').click()
    cy.get('input[name=phone]').type('(518) 672-6861')
    cy.get('.Header_input_section__1HbL7:nth-child(5) .Header_eye_icon__QRxrT').click()

    /// check 'Verify' button exists, then get otp here START /// UNCOMMENT WHEN RE-ACTIVATED
    cy.xpath('//button[contains(.,\"Verify\")]').should('exist').then((value) => {
      client.messages
        .list({ limit: 1 })
        .then((messages) => {
          return messages.forEach((m) => {
            const returnedNumber = m.body.match(/\d+/)[0]

            cy.wrap(returnedNumber).as('userOtp1')
          })
        })
    })
    /// get otp here END ///

    cy.get('@userOtp1').then((value) => {
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
