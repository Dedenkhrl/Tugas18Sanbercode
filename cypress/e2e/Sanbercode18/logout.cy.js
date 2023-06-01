import baselogin from "../../support/PageObject/loginpage.cy"
const Logindata = require("../../fixtures/sanber18/login.json")
describe('Kataloncura', () => {
  const Baselogin = new baselogin()
  beforeEach(() => {
    cy.visit('https://katalon-demo-cura.herokuapp.com/')
  })

  it('Successs login', () => {
    Baselogin.clickmenu()
    Baselogin.clicklogmenu()
    Baselogin.inputuser(Logindata.validuser)
    Baselogin.inputpassw(Logindata.validpass)
    Baselogin.clicklogbtn()
    Baselogin.verifylogin()
    cy.get('#menu-toggle').click()
    cy.get(':nth-child(6) > a').click()
    cy.get('h1').should('be.visible')
  })

})