import 'cypress-iframe'; //iframe yapmak icin import gerekli bunu npm den yukledik

describe('iframes',()=>{
    it('iframe Test',()=>{
        cy.visit('https://the-internet.herokuapp.com/iframe')
        cy.get('h3').should('contain','Editor')
        cy.frameLoaded('#mce_0_ifr')//iframe ulasildi 
        cy.iframe().find('p').clear() // var olan yazi p taginin icindeydi onu bulduk sonrasinda icini temizledik
        cy.iframe().find('p').type("Zeynep") 
        cy.get('.large-4 > div > a').should('contain.text','Elemental Selenium')
        cy.get('.large-4 > div > a').should('contain.text','Elemental Selenium').click() //yeni sekmeye gecer ve cypress ara yuzunde islem yaptirmaz 
       
       

    })
})