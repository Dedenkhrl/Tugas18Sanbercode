import baselogin from "../../support/PageObject/loginpage.cy"
const Logindata = require("../../fixtures/sanber18/login.json")
describe('Kataloncura', () => {
  const Baselogin = new baselogin()
  beforeEach(() => {
    cy.visit('https://katalon-demo-cura.herokuapp.com/')
  })

  it('Successs make appointment', () => {
    Baselogin.clickmenu()
    Baselogin.clicklogmenu()
    Baselogin.inputuser(Logindata.validuser)
    Baselogin.inputpassw(Logindata.validpass)
    Baselogin.clicklogbtn()
    Baselogin.verifylogin()
    cy.get('#chk_hospotal_readmission').click()
    cy.get('#combo_facility').select('Tokyo CURA Healthcare Center')
    cy.get('.glyphicon').click()
    cy.get(':nth-child(5) > :nth-child(6)').click()
    cy.get('#btn-book-appointment').click()
    cy.get('h2').should('be.visible')
  })

})