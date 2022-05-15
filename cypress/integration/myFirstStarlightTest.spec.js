/// <reference types="cypress-xpath" />
// const { before } = require("cypress/types/lodash")

// const { it } = require("mocha")
// const myVar = undefined;

context('Contact Us Test', () => {
  // beforeEach(() => {
  //   cy.viewport(1920, 976)
  //   cy.visit('https://staging.starlightmusic.com')
  // })
  // beforeEach(() => {
  //     cy.visit('https://www.starlightmusic.com')
  // })

  // it('has an h1 on the page', () => {
  //   cy.get('h1').should('exist')
  // })

  it('can contact us', () => {
    cy.on('uncaught:exception', (err, runnable) => {
      expect(err.message).to.include('gtag')

      // using mocha's async done callback to finish
      // this test so we prove that an uncaught exception
      // was thrown
      // done()

      // return false to prevent the error from
      // failing this test
      return false
    })

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

  it('can book a demo', () => {
    // this event will automatically be unbound when this
  // test ends because it's attached to 'cy'
    cy.on('uncaught:exception', (err, runnable) => {
      expect(err.message).to.include('gtag')

      // using mocha's async done callback to finish
      // this test so we prove that an uncaught exception
      // was thrown
      // done()

      // return false to prevent the error from
      // failing this test
      return false
    })

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
    // cy.get('.calendly-container').within(() => {
    //   cy.get('iframe').should('exist').within(() => {
    //     cy.get('div').should('exist')
    //   })
    // })
  })

  it('customer can search for and book a band', () => {

  })

  it('event planner can login', () => {

  })

  it('event planner signup', () => {

  })
})
