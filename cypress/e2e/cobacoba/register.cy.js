describe('Register', () => {
  beforeEach(() => {
    cy.visit('https://demowebshop.tricentis.com/')
  })

  it('Successs Register', () => {
    cy.get('.ico-register').click()
    cy.get('#gender-male').click()
    cy.get('#FirstName').type("denden")
    cy.get('#LastName').type("baston")
    cy.get('#Email').type("denden1@gmail.com")
    cy.get('#Password').type("denden123")
    cy.get('#ConfirmPassword').type("denden123")
    cy.get('#register-button').click()
    cy.get('.result').should ('contain.text', 'Your registration completed')
  })

})