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

context('Search and Book Band Test', () => {
  it('customer can search for and book a band', () => {
    cy.visit('https://staging.starlightmusic.com/')
    cy.xpath('//div[@id=\"__next\"]/div/main/div/header/div[3]/div[3]/section/div/div/div/div/input').click({ force: true })
    cy.xpath('//div[@id=\"__next\"]/div/main/div/header/div[3]/div[3]/section/div/div/div/div/input').type('09/09/2029{enter}', { force: true })
    // cy.xpath('//div[@id=\"__next\"]/div/main/div/header/div[3]/div[3]/section/div/div[2]/span/input').click()
    // cy.get(':nth-child(6) > :nth-child(2) > .form-control').type('Weylin, Broadway, Brooklyn, NY, USA')
    // cy.get('.ant-picker-month-btn').click()
    // cy.get('tr:nth-child(2) > .ant-picker-cell:nth-child(3) > .ant-picker-cell-inner').click()
    // cy.get('.ant-picker-year-btn').click()
    // cy.get('.ant-picker-cell-selected > .ant-picker-cell-inner').click()
    // cy.xpath('//div[@id=\"__next\"]/div/main/div/header/div[3]/div[3]/section/div/div[2]/span/input').click()
    // cy.find('.ant-tooltip-open > .search_box_field_auto').click()
    // cy.find('.ant-tooltip-open > .search_box_field_auto').dblclick()
    cy.get('.ant-tooltip-open > .search_box_field_auto').click({ force: true })
    // cy.get('.ant-tooltip-open > .search_box_field_auto').type('Plaza Hotel{enter}')
    // cy.get('.ant-tooltip-open > .search_box_field_auto').type('Cypress.io{enter}')
    // cy.get('.d-flex:nth-child(1) > .Header_search_btn__1DsYn > img').click()
    // cy.get('.SearchResult_search_result_heading__20s2l').should('contains.text', 'Congratulations!')
    // cy.xpath('//button[contains(.,\"Explore\")]').should('have.length.gt', 0)
    // cy.get('.SearchResult_search_result_card__2m0Pk:nth-child(2) .SearchResult_search_result_card_price__36J67').click()
    // cy.get('.SearchResult_search_result_card__2m0Pk:nth-child(2) img').click()
    // cy.get('.band_detail_nav_item:nth-child(3) > .m-0').click()
    // cy.get('.BandConfiguration_price_tab__1cyLl').click({ force: true })
    // cy.get('.BandConfiguration_band_conf_pink_bg__1OldT').click({ force: true })

    // cy.get('.BandConfiguration_tab__Epc4Q:nth-child(2) span:nth-child(1)').then((element) => {
    //   const bandPrice = element.text()

    //   cy.wrap(bandPrice).as('bandPrice')

    //   console.log('band price: ', bandPrice)
    // })

    // cy.get('@eventDate').then((eventDate) => {
    //   const eventMonth = eventDate.substring(0, 2)
    //   const eventDay = eventDate.substring(3, 5)
    //   const eventYear = eventDate.substring(6)

    //   cy.wrap(eventMonth).as('eventMonth')
    //   cy.wrap(eventDay).as('eventDay')
    //   cy.wrap(eventYear).as('eventYear')

    //   console.log('Month: ', eventMonth, ', Day: ', eventDay, ', Year: ', eventYear)
    // })

    // cy.visit('https://starbridge.starlightmusic.com/')
  })
})
