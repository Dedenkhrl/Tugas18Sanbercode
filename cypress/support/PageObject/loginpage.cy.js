class baselogin {
    menu = '#menu-toggle > .fa'
    logmenu = '.sidebar-nav > :nth-child(4) > a'
    user = '#txt-username'
    passw = '#txt-password'
    logbtn = '#btn-login'
    veriflogin = 'h2'

    clickmenu(){
        cy.get(this.menu).click()
    }
    clicklogmenu(){
        cy.get(this.logmenu).click()
    }
    inputuser(username){
        cy.get(this.user).type(username)
    }
    inputpassw(password){
        cy.get(this.passw).type(password)
    }
    clicklogbtn(){
        cy.get(this.logbtn).click()
    }
    verifylogin(){
        cy.get(this.veriflogin).should ('be.visible')
    }

}
export default baselogin;