/* eslint-disable no-console */
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

  it('can book a demo', async function () {
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

    // ...continue here to figure out how to test calendly
    // cy.get('.calendly-container').within(() => {
    //   cy.get('iframe').should('exist').within(() => {
    //     cy.get('div').should('exist')
    //   })
    // })
  })

  it('customer can search for and book a band', async function () {
    cy.visit('https://staging.starlightmusic.com/')
    // get event date

    /// get event date, store event date
    cy.xpath('//div[@id=\"__next\"]/div/main/div/header/div[3]/div[3]/section/div/div/div/div/input').then((element) => {
      const eventDate = element.val()

      cy.wrap(eventDate).as('eventDate')
      console.log('Event Date: ', eventDate)
    })

    // click event date
    cy.xpath('//div[@id=\"__next\"]/div/main/div/header/div[3]/div[3]/section/div/div/div/div/input').click()

    cy.get('.ant-picker-month-btn').click()
    cy.get('tr:nth-child(2) > .ant-picker-cell:nth-child(3) > .ant-picker-cell-inner').click()
    cy.get('.ant-picker-year-btn').click()
    cy.get('.ant-picker-cell-selected > .ant-picker-cell-inner').click()

    ///
    cy.xpath('//div[@id=\"__next\"]/div/main/div/header/div[3]/div[3]/section/div/div[2]/span/input').click()
    cy.find('.ant-tooltip-open > .search_box_field_auto').click()
    cy.find('.ant-tooltip-open > .search_box_field_auto').dblclick()
    ///

    cy.get('.ant-tooltip-open > .search_box_field_auto').click()
    cy.get('.ant-tooltip-open > .search_box_field_auto').type('Plaza Hotel{enter}')
    cy.get('.ant-tooltip-open > .search_box_field_auto').type('Cypress.io{enter}')
    // console.log(vars["event_date"])
    cy.get('.d-flex:nth-child(1) > .Header_search_btn__1DsYn > img').click()
    ///
    cy.get('.SearchResult_search_result_heading__20s2l').should('contains.text', 'Congratulations!')
    cy.xpath('//button[contains(.,\"Explore\")]').should('have.length.gt', 0)
    ///
    cy.get('.SearchResult_search_result_card__2m0Pk:nth-child(2) .SearchResult_search_result_card_price__36J67').click()
    cy.get('.SearchResult_search_result_card__2m0Pk:nth-child(2) img').click()
    ///
    cy.get('.band_detail_nav_item:nth-child(3) > .m-0').click()
    ///
    cy.get('.BandConfiguration_price_tab__1cyLl').click({ force: true })
    cy.get('.BandConfiguration_band_conf_pink_bg__1OldT').click({ force: true })
    /// band price
    cy.get('.BandConfiguration_tab__Epc4Q:nth-child(2) span:nth-child(1)').then((element) => {
      const bandPrice = element.text()

      cy.wrap(bandPrice).as('bandPrice')

      console.log('band price: ', bandPrice)
    })

    cy.get('@eventDate').then((eventDate) => {
      const eventMonth = eventDate.substring(0, 2)
      const eventDay = eventDate.substring(3, 5)
      const eventYear = eventDate.substring(6)

      cy.wrap(eventMonth).as('eventMonth')
      cy.wrap(eventDay).as('eventDay')
      cy.wrap(eventYear).as('eventYear')

      console.log('Month: ', eventMonth, ', Day: ', eventDay, ', Year: ', eventYear)
    })

    cy.visit('https://starbridge.starlightmusic.com/')
  })

  it('event planner can login', async function () {
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

    cy.xpath('//button[contains(.,\"Verify\")]').should('exist')

    /// get otp here START ///
    cy.visit('https://oksms.org/receive/15186726861')
    /// get otp here END ///

    cy.xpath('//button[contains(.,\"Verify\")]').should('exist')
    const userOtp = 1234

    console.log('userOtp: ', userOtp)
    cy.get('@userOtp').then((value) => {
      const otpArray = userOtp.split('')
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

  it('event planner signup', async function () {
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

    /// get otp here START ///
    cy.visit('https://oksms.org/receive/15186726861')
    const userOtp = 1234

    /// get otp here END ///

    cy.xpath('//button[contains(.,\"Verify\")]').should('exist')
    console.log('userOtp: ', userOtp)

    cy.get('@userOtp').then((value) => {
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
